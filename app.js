/* QuantCorner Agent Library. Static source snapshot; no external APIs or analytics. */
(() => {
  'use strict';
  const catalog = window.CATALOG || [];
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${window.QC_ICONS?.[name] || ''}</svg>`;
  const knownIds = new Set(catalog.map(item => item.id));
  const bookmarks = window.QCBookmarks;
  let saved = new Set();
  let bookmarkBusy = false;
  const categories = ['all', ...new Set(catalog.map(item => item.category))];
  const kinds = ['all','Skill','claude','Skill collection','AI agent','Research framework','MCP server'];
  let state;
  let toastTimer;
  let detailTrigger;
  let detailId;
  let detailTriggerClass = 'card-title-button';

  function hydrateIcons(root = document) {
    root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  }
  function toast(message) {
    clearTimeout(toastTimer);
    $('#toast').textContent = message;
    $('#toast').hidden = false;
    const activeDialog = document.querySelector('dialog[open]');
    if (activeDialog) {
      let status = activeDialog.querySelector('.dialog-status');
      if (!status) { status = document.createElement('p'); status.className = 'dialog-status'; status.setAttribute('role','status'); status.setAttribute('aria-live','polite'); activeDialog.append(status); }
      status.textContent = message;
    }
    toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 4000);
  }
  function readState() {
    const params = new URLSearchParams(location.search);
    return {
      q: params.get('q') || '',
      category: categories.includes(params.get('category')) ? params.get('category') : 'all',
      kind: kinds.includes(params.get('kind')) ? params.get('kind') : 'all',
      sort: ['featured','name','type'].includes(params.get('sort')) ? params.get('sort') : 'featured',
      saved: params.get('saved') === '1',
      view: params.get('view') === 'list' ? 'list' : 'grid'
    };
  }
  function syncUrl() {
    const url = new URL(location.href);
    for (const [key, value, defaultValue] of [['q',state.q,''],['category',state.category,'all'],['kind',state.kind,'all'],['sort',state.sort,'featured'],['view',state.view,'grid'],['saved',state.saved ? '1':'','']]) {
      if (value === defaultValue) url.searchParams.delete(key); else url.searchParams.set(key,value);
    }
    try { history.replaceState(null,'',url); } catch { /* file:// can restrict history changes. */ }
  }
  function typeInfo(item) {
    if (item.kind === 'Skill') return { icon:'file-code', label:'Agent skill' };
    if (item.kind === 'Skill collection') return { icon:'book', label:'Skill collection' };
    if (item.kind === 'MCP server') return { icon:'database', label:'MCP server' };
    if (item.kind === 'AI agent') return { icon:'terminal-2', label:'AI agent' };
    return { icon:'stack-2', label:'Research framework' };
  }
  function cardCompatibility(item) {
    const values = [...new Set(item.compatibility.map(value => value === 'Claude Cowork' ? 'Cowork' : value))];
    const hosts = ['Claude Code','Cowork','Codex','Cursor','Claude.ai','AutoGen','OpenAI Agents SDK'];
    const supportedHosts = hosts.filter(host => values.includes(host));
    const visible = (supportedHosts.length ? supportedHosts : values).slice(0,3);
    const colors = {'Claude Code':'purple','Cowork':'blue','Codex':'teal','Cursor':'blue','Claude.ai':'purple','Python':'amber','Anthropic API':'purple','MCP':'teal'};
    return visible.map(value => `<span class="platform-label"><span class="platform-dot ${colors[value] || 'slate'}" aria-hidden="true"></span>${escape(value)}</span>`).join('');
  }
  function initials(title) {
    const words = title.match(/[A-Za-z0-9]+/g) || [];
    return (words.length > 1 ? words[0][0] + words[1][0] : (words[0] || 'SK').slice(0,2)).toUpperCase();
  }
  function card(item) {
    const type = typeInfo(item);
    const isSaved = saved.has(item.id);
    return `<article class="repo-card" data-id="${escape(item.id)}">
      <div class="card-heading"><div class="card-avatar"><span aria-hidden="true">${escape(initials(item.title))}</span></div><div class="card-heading-text"><h3><button class="card-title-button" data-detail="${escape(item.id)}">${escape(item.title)}</button></h3><div class="card-platforms" role="group" aria-label="Compatibility">${cardCompatibility(item)}</div></div></div>
      <div class="card-body"><p class="card-description">${escape(item.description)}</p><div class="card-source"><span class="card-type">${type.label}</span><p class="repo-owner">${escape(item.repo)}</p></div>
      <div class="card-bottom"><div class="card-tags">${item.tags.slice(0,3).map(tag => `<span>${escape(tag)}</span>`).join('')}</div><div class="card-actions"><button class="notes-button" data-detail="${escape(item.id)}" aria-label="Research notes for ${escape(item.title)}" title="Research notes">${icon('file-code')}</button><a class="repo-link" href="${escape(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escape(item.title)} on GitHub" title="Open on GitHub">${icon('brand-github')}</a><button class="save-button" data-save="${escape(item.id)}" aria-pressed="${isSaved}" aria-label="${isSaved ? 'Unsave':'Save'} ${escape(item.title)}" title="${isSaved ? 'Unsave':'Save for later'}">${icon('bookmark')}</button></div></div></div></article>`;
  }
  function render() {
    const terms = state.q.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    const matching = catalog.filter(item => {
      const searchable = [item.id,item.title,item.repo,item.skillPath || '',item.description,item.category,item.kind,...item.tags,...item.compatibility].join(' ').toLocaleLowerCase();
      return terms.every(term => searchable.includes(term)) && (state.kind === 'all' || (state.kind === 'claude' ? item.compatibility.includes('Claude Code') && item.kind === 'Skill' : item.kind === state.kind)) && (!state.saved || saved.has(item.id));
    });
    const visible = matching.filter(item => state.category === 'all' || item.category === state.category);
    $$('[data-category-count]').forEach(element => { element.textContent = element.dataset.categoryCount === 'all' ? matching.length : matching.filter(item => item.category === element.dataset.categoryCount).length; });
    if (state.sort === 'name') visible.sort((a,b) => a.title.localeCompare(b.title));
    if (state.sort === 'type') visible.sort((a,b) => a.kind.localeCompare(b.kind) || a.title.localeCompare(b.title));
    if (state.sort === 'featured') visible.sort((a,b) => Number(b.featured)-Number(a.featured) || Number(b.kind === 'Skill')-Number(a.kind === 'Skill'));
    $('#repo-grid').innerHTML = visible.map(card).join('');
    $('#repo-grid').classList.toggle('list-view',state.view === 'list');
    const noun = state.kind === 'Skill' || state.kind === 'claude' ? 'skill' : 'item';
    $('#result-count').innerHTML = `<strong>${visible.length} ${noun}${visible.length === 1 ? '' : 's'}</strong> <span class="count-muted">${visible.length === catalog.length ? 'to explore' : `of ${catalog.length} in the collection`}</span>`;
    $('#empty-state').hidden = visible.length > 0;
    $('#empty-message').textContent = state.saved && !bookmarks.snapshot.loggedIn ? 'Sign in or create an account to view your saved skills. Use the Saved button to continue.' : state.saved && saved.size === 0 ? 'Use the bookmark button to save skills and tools to your member collection.' : 'Try a broader topic or clear your filters.';
    $('#clear-filters').hidden = !(state.q || state.category !== 'all' || state.kind !== 'all' || state.saved);
    $('#saved-count').textContent = saved.size;
    $('#saved-filter').setAttribute('aria-pressed',String(state.saved));
    $('#search').value = state.q;
    $('#kind').value = state.kind;
    $('#sort').value = state.sort;
    $$('[data-category]').forEach(button => { const active = button.dataset.category === state.category; button.classList.toggle('active',active); button.setAttribute('aria-pressed',String(active)); });
    $$('[data-view]').forEach(button => { const active = button.dataset.view === state.view; button.classList.toggle('active',active); button.setAttribute('aria-pressed',String(active)); });
    const detailSave = $('#detail-dialog [data-save]');
    if (detailSave) { const isSaved = saved.has(detailSave.dataset.save); detailSave.setAttribute('aria-pressed',String(isSaved)); detailSave.innerHTML = `${icon('bookmark')} ${isSaved ? 'Saved':'Save for later'}`; }
    syncUrl();
  }
  function reset() { state = {...state,q:'',category:'all',kind:'all',saved:false}; render(); }
  function bookmarkError(error) {
    if (error.message === 'cancelled') { toast('Sign in or create an account to save bookmarks.'); return; }
    if (error.message === 'standalone' || !bookmarks.connected) {
      $('#detail-dialog').close();
      $('#member-dialog').showModal();
      return;
    }
    toast('Could not update bookmarks. Please try again.');
  }
  async function save(id,trigger) {
    if (!knownIds.has(id) || bookmarkBusy) return;
    bookmarkBusy = true;
    const desired = !saved.has(id);
    trigger.disabled = true;
    trigger.setAttribute('aria-busy','true');
    if (!bookmarks.snapshot.loggedIn) toast('Sign in or create an account to save this skill.');
    try {
      const result = await bookmarks.save(id,desired);
      if (!result.loggedIn) throw new Error('cancelled');
      toast(desired ? 'Saved to your member collection' : 'Removed from saved');
      const replacement = document.querySelector(`#repo-grid [data-save="${id}"]`);
      if (!trigger.isConnected) (replacement || $('#saved-filter')).focus({preventScroll:true});
    } catch (error) { bookmarkError(error); }
    finally { bookmarkBusy = false; trigger.disabled = false; trigger.removeAttribute('aria-busy'); }
  }
  async function showSaved(clearFilters = false) {
    if (bookmarkBusy) return;
    bookmarkBusy = true;
    try {
      const result = await bookmarks.login();
      if (!result.loggedIn) throw new Error('cancelled');
      state = clearFilters ? {...state,q:'',kind:'all',category:'all',saved:true} : {...state,saved:!state.saved};
      render();
      if (clearFilters) $('#library').scrollIntoView();
    } catch (error) { bookmarkError(error); }
    finally { bookmarkBusy = false; }
  }
  function openDetail(id,trigger) {
    const item = catalog.find(entry => entry.id === id);
    if (!item) return;
    detailTrigger = trigger;
    detailId = id;
    detailTriggerClass = trigger?.classList.contains('notes-button') ? 'notes-button' : 'card-title-button';
    $('#detail-dialog .dialog-status')?.remove();
    const type = typeInfo(item);
    $('#detail-content').innerHTML = `<span class="badge purple">${escape(type.label)}</span><h2 id="detail-title">${escape(item.title)}</h2><p class="detail-source">${escape(item.repo)}</p><p class="dialog-intro">${escape(item.description)}</p><div class="detail-badges">${item.tags.map(tag => `<span>${escape(tag)}</span>`).join('')}</div><div class="detail-section"><h3>Environment & setup</h3><p>${escape(item.compatibilityNote)}</p><div class="detail-badges">${item.compatibility.map(platform => `<span>${escape(platform)}</span>`).join('')}</div></div><div class="detail-section"><h3>What the source documents</h3><p>${escape(item.evidence)}</p><a href="${escape(item.evidenceUrl)}" target="_blank" rel="noopener noreferrer">Read source documentation ${icon('arrow-up-right')}</a></div><p class="dialog-note">Review the repository’s current requirements and license before installing. This catalog links to source code; inclusion does not mean the code has been executed or audited.</p><div class="detail-actions"><a class="button button-primary" href="${escape(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">${icon('brand-github')} ${item.kind === 'Skill' ? 'Open skill source' : 'Open repository'} ${icon('arrow-up-right')}</a><button class="button button-outline" data-save="${escape(item.id)}" aria-pressed="${saved.has(item.id)}">${icon('bookmark')} ${saved.has(item.id) ? 'Saved':'Save for later'}</button></div><p class="detail-reviewed">Source review: ${escape(item.verifiedAsOf)} · ${escape(item.category)}</p>`;
    $('#detail-dialog').showModal();
  }
  async function copyText(text,success) {
    try {
      await navigator.clipboard.writeText(text);
      toast(success);
      return true;
    } catch {
      const input = document.createElement('textarea');
      input.value = text; input.style.cssText = 'position:fixed;left:0;top:0;opacity:0';
      const container = document.querySelector('dialog[open]') || document.body;
      container.append(input); input.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch { /* Report the unsupported operation. */ }
      input.remove();
      toast(copied ? success : 'Clipboard unavailable. Select and copy the link or draft manually.');
      return copied;
    }
  }
  document.addEventListener('click',event => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.category) { state.category = button.dataset.category; render(); }
    if (button.dataset.view) { state.view = button.dataset.view; render(); }
    if (button.dataset.detail) openDetail(button.dataset.detail,button);
    if (button.dataset.save) save(button.dataset.save,button);
    if (button.hasAttribute('data-feature-detail')) openDetail('anthropic-financial-services',button);
    if (button.hasAttribute('data-close')) button.closest('dialog').close();
    if (button.hasAttribute('data-open-guide')) $('#guide-dialog').showModal();
  });
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('click',event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  });
  $('#detail-dialog').addEventListener('close',() => {
    const target = detailTrigger?.isConnected ? detailTrigger : document.querySelector(`#repo-grid .${detailTriggerClass}[data-detail="${detailId}"]`) || $('#saved-filter');
    target.focus({preventScroll:true});
  });
  $('#search').addEventListener('input',event => { state.q = event.target.value; render(); });
  $('#kind').addEventListener('change',event => { state.kind = event.target.value; render(); });
  $('#sort').addEventListener('change',event => { state.sort = event.target.value; render(); });
  $('#saved-filter').addEventListener('click',() => showSaved());
  $('#saved-nav').addEventListener('click',() => showSaved(true));
  $('#clear-filters').addEventListener('click',reset);
  $('#empty-reset').addEventListener('click',reset);
  document.addEventListener('keydown',event => {
    if (event.key === 'Escape' && $('.mobile-nav[open]')) { $('.mobile-nav').open = false; $('.mobile-nav summary').focus(); }
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input,textarea,select,[contenteditable=true]') && !document.querySelector('dialog[open]')) { event.preventDefault(); $('#search').focus(); }
  });
  $$('.mobile-nav a').forEach(link => link.addEventListener('click',() => { $('.mobile-nav').open = false; }));
  window.addEventListener('popstate',() => { state = readState(); render(); });
  hydrateIcons();
  state = readState();
  bookmarks.subscribe(data => { saved = new Set(data.ids.filter(id => knownIds.has(id))); render(); });
  // Retry only reads if the iframe loaded before the Wix page code.
  async function connect(attempt = 0) {
    try { await bookmarks.refresh(); }
    catch (_) { if (attempt < 2) setTimeout(() => connect(attempt + 1), 1500); }
  }
  connect();
  window.addEventListener('focus', () => { if (!bookmarkBusy) bookmarks.refresh().catch(() => {}); });
})();
