const {test} = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const channel = 'quantcorner-bookmarks-v1';
const flush = () => new Promise(resolve => setImmediate(resolve));
function page() {
  const state = { member: null, rows: [], messages: [], prompts: 0, fail: false, cancelled: false };
  let receiver, login, logout, serial = 0;
  const authentication = {
    promptLogin: async () => { state.prompts++; if(state.cancelled) throw Error('cancel'); state.member = {_id:'member-a'}; login(); },
    onLogin: cb => login = cb, onLogout: cb => logout = cb
  };
  const wixData = {
    query: () => { const filters = []; const query = {eq:(k,v)=>{filters.push([k,v]);return query},limit:()=>query,find:async()=>{
      if(state.fail) throw Error('network');
      assert.ok(state.member, 'guests cannot query');
      assert.ok(filters.some(([k,v])=>k==='_owner'&&v===state.member._id));
      return {items:state.rows.filter(r=>filters.every(([k,v])=>r[k]===v)),hasNext:()=>false};
    }};return query; },
    insert: async (c,row) => { assert.ok(state.member);const added={...row,_id:String(++serial),_owner:state.member._id};state.rows.push(added);return added; },
    remove: async(c,id) => {const row=state.rows.find(r=>r._id===id);assert.equal(row._owner,state.member._id);state.rows=state.rows.filter(r=>r._id!==id)}
  };
  const $w = () => ({onMessage:cb=>receiver=cb,postMessage:m=>state.messages.push(m)}); $w.onReady=cb=>cb();
  vm.runInNewContext(fs.readFileSync('wix/agent-skills-page.js','utf8').replace(/^import .*;$/gm,''),{$w,wixData,authentication,currentMember:{getMember:async()=>state.member}});
  return {state, async request(action,fields={}){const requestId=String(++serial);receiver({data:{channel,requestId,action,...fields}});await flush();return state.messages.find(m=>m.requestId===requestId)},logout(){state.member=null;logout()}};
}
test('guest state is public; cancelled sign-up does not save',async()=>{
 const p=page();assert.equal((await p.request('state')).loggedIn,false);assert.equal(p.state.prompts,0);
 p.state.cancelled=true;assert.equal((await p.request('save',{skillId:'earnings',saved:true})).error,'cancelled');assert.equal(p.state.rows.length,0);
});
test('signup resumes save, reload reads own bookmarks, duplicate save is idempotent, unsave retains other member data',async()=>{
 const p=page();p.state.rows=[{_id:'other',_owner:'member-b',skillId:'earnings'}];
 let r=await p.request('save',{skillId:'earnings',saved:true});assert.equal(r.loggedIn,true);assert.deepEqual([...r.ids],['earnings']);assert.equal(p.state.prompts,1);
 await p.request('save',{skillId:'earnings',saved:true});assert.equal(p.state.rows.length,2);
 assert.deepEqual([...(await p.request('state')).ids],['earnings']);
 await p.request('save',{skillId:'earnings',saved:false});assert.equal(p.state.rows.length,1);assert.equal(p.state.rows[0]._owner,'member-b');
 p.logout();assert.equal(p.state.messages.at(-1).loggedIn,false);
});
test('invalid commands ignored and storage failure reports no success',async()=>{
 const p=page();assert.equal(await p.request('save',{skillId:'<script>',saved:true}),undefined);assert.equal(p.state.prompts,0);
 p.state.member={_id:'member-a'};p.state.fail=true;assert.equal((await p.request('save',{skillId:'earnings',saved:true})).ok,false);assert.equal(p.state.rows.length,0);
});
test('iframe ignores spoofed origin/source and clears on logout',async()=>{
 let receiver, sent;const parent={postMessage:(m,origin)=>sent={m,origin}};const window={parent,addEventListener:(name,cb)=>receiver=cb};
 vm.runInNewContext(fs.readFileSync('member-bookmarks.js','utf8'),{window,document:{referrer:'https://www.quant-corner.com/agent-skills'},URL,Date,Set,Map,Promise,Error,setTimeout,clearTimeout});
 const api=window.QCBookmarks;const promise=api.refresh();const data={channel,requestId:sent.m.requestId,ok:true,loggedIn:true,ids:['earnings']};
 receiver({source:parent,origin:'https://evil.example',data});assert.equal(api.snapshot.loggedIn,false);
 receiver({source:{},origin:'https://www.quant-corner.com',data});assert.equal(api.snapshot.loggedIn,false);
 receiver({source:parent,origin:'https://www.quant-corner.com',data});assert.equal((await promise).loggedIn,true);
 receiver({source:parent,origin:'https://www.quant-corner.com',data:{channel,event:'session',ok:true,loggedIn:false,ids:[]}});assert.equal(api.snapshot.ids.length,0);
});
test('bookmark adapter loads before app and local guest saves are no longer read',()=>{
 const html=fs.readFileSync('index.html','utf8');assert.ok(html.indexOf('member-bookmarks.js')<html.indexOf('app.js'));
 assert.ok(!fs.readFileSync('app.js','utf8').includes('localStorage'));
});
