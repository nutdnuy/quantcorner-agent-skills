/* The Wix parent owns authentication and persistence; no member tokens enter this iframe. */
(() => {
  'use strict';
  const CHANNEL = 'quantcorner-bookmarks-v1';
  const SITE = 'https://www.quant-corner.com/agent-skills';
  const origins = new Set(['https://www.quant-corner.com', 'https://quant-corner.com', 'https://phatap8-quantcorner.editor.wix.com']);
  const pending = new Map();
  let sequence = 0;
  let connected = false;
  let parentOrigin = '';
  try { const origin = new URL(document.referrer).origin; if (origins.has(origin)) parentOrigin = origin; } catch (_) { /* Missing referrer: use production origin. */ }
  if (!parentOrigin) parentOrigin = 'https://www.quant-corner.com';
  let snapshot = { loggedIn: false, ids: [] };
  const listeners = new Set();

  function update(data) {
    snapshot = { loggedIn: data.loggedIn === true, ids: data.loggedIn === true && Array.isArray(data.ids) ? data.ids.filter(id => typeof id === 'string') : [] };
    listeners.forEach(listener => listener(snapshot));
  }
  window.addEventListener('message', event => {
    const data = event.data;
    if (event.source !== window.parent || !origins.has(event.origin) || !data || data.channel !== CHANNEL) return;
    connected = true;
    parentOrigin = event.origin;
    const entry = pending.get(data.requestId);
    // Ignore stale responses after cancellation/timeouts; session events can clear state.
    if (!entry && data.event !== 'session' && data.requestId !== 'session') return;
    if (data.ok && typeof data.loggedIn === 'boolean' && Array.isArray(data.ids)) update(data);
    if (!entry) return;
    clearTimeout(entry.timer);
    pending.delete(data.requestId);
    if (data.ok) entry.resolve(snapshot); else entry.reject(new Error(data.error || 'unavailable'));
  });
  function request(action, fields = {}) {
    if (window.parent === window) return Promise.reject(new Error('standalone'));
    const requestId = `qc-${Date.now()}-${++sequence}`;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => { pending.delete(requestId); reject(new Error('timeout')); }, action === 'state' ? 8000 : 180000);
      pending.set(requestId, {resolve, reject, timer});
      window.parent.postMessage({channel: CHANNEL, requestId, action, ...fields}, parentOrigin);
    });
  }
  window.QCBookmarks = {
    get snapshot() { return snapshot; },
    subscribe(listener) { listeners.add(listener); listener(snapshot); },
    refresh: () => request('state'),
    login: () => request('login'),
    save: (skillId, saved) => request('save', {skillId, saved}),
    siteUrl: SITE,
    get connected() { return connected; }
  };
})();
