// QuantCorner Agent Skills page code. CMS permissions enforce ownership.
import { authentication, currentMember } from 'wix-members-frontend';
import wixData from 'wix-data';

const COLLECTION = 'AgentSkillBookmarks';
const CHANNEL = 'quantcorner-bookmarks-v1';
let queue = Promise.resolve();
let generation = 0;

$w.onReady(function () {
  const embed = $w('#html1');
  const send = message => embed.postMessage({ channel: CHANNEL, ...message });

  async function rowsFor(memberId) {
    let result = await wixData.query(COLLECTION).eq('_owner', memberId).limit(1000).find({ consistentRead: true });
    const rows = [...result.items];
    while (result.hasNext()) {
      result = await result.next();
      rows.push(...result.items);
    }
    return rows;
  }

  async function handle(message) {
    const requestId = message.requestId;
    let epoch = generation;
    try {
      let member = await currentMember.getMember();
      if (!member && message.action !== 'state') {
        try {
          await authentication.promptLogin({ mode: 'signup', modal: true });
        } catch (_) {
          send({ requestId, ok: false, error: 'cancelled' });
          return;
        }
        member = await currentMember.getMember();
        epoch = generation;
      }
      if (!member) {
        send({ requestId, ok: true, loggedIn: false, ids: [] });
        return;
      }
      let rows = await rowsFor(member._id);
      if (epoch !== generation) throw new Error('Session changed');
      if (message.action === 'save') {
        const matches = rows.filter(row => row.skillId === message.skillId);
        if (message.saved && !matches.length) {
          const inserted = await wixData.insert(COLLECTION, { skillId: message.skillId });
          rows.push(inserted);
        } else if (!message.saved && matches.length) {
          for (const row of matches) await wixData.remove(COLLECTION, row._id);
          rows = rows.filter(row => row.skillId !== message.skillId);
        }
      }
      if (epoch !== generation) throw new Error('Session changed');
      send({ requestId, ok: true, loggedIn: true, ids: [...new Set(rows.map(row => row.skillId))] });
    } catch (_) {
      send({ requestId, ok: false, error: 'unavailable' });
    }
  }

  embed.onMessage(event => {
    const m = event.data;
    if (!m || m.channel !== CHANNEL || typeof m.requestId !== 'string' || m.requestId.length > 80) return;
    if (!['state', 'login', 'save'].includes(m.action)) return;
    if (m.action === 'save' && (typeof m.skillId !== 'string' || !/^[a-zA-Z0-9_.:/-]{1,200}$/.test(m.skillId) || typeof m.saved !== 'boolean')) return;
    queue = queue.then(() => handle(m)).catch(() => {});
  });
  authentication.onLogout(() => {
    generation += 1;
    send({ ok: true, loggedIn: false, ids: [], event: 'session' });
  });
  authentication.onLogin(() => {
    generation += 1;
    // Login requests resume themselves; refresh independently after other logins.
    queue = queue.then(() => handle({ action: 'state', requestId: 'session' })).catch(() => {});
  });
});
