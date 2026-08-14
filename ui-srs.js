/* =====================================================================
   UI-SRS · Connector entre la interfície i el mòdul SRS (Sumes/Restes)
   ===================================================================== */
const UI = (() => {
  'use strict';
  const $ = s => document.querySelector(s);
  let pid = null, sess = null, modeActiu = null;
  let cfg = { rang: 20, tipusOp: 'les dues' }; // ← nous paràmetres

  function actualitza() {
    if (!pid) return;
    const st = SRS.stats(pid);

    const badge = $('#srs-badge');
    if (badge) { badge.hidden = st.degudes === 0; badge.textContent = `${st.degudes} a punt`; }

    const resum = $('#repas-resum');
    if (resum) resum.innerHTML = st.degudes
      ? `🔁 <b>${st.degudes}</b> repassos a punt · <b>${st.per.lenta}</b> de lentes`
      : `🎉 Cap repàs pendent. Bona feina!`;

    const ret = $('#srs-retencio');
    if (ret) ret.textContent = st.retencio == null ? '—' : st.retencio + '%';
  }

  const classeEstat = (a, b, tipus) => 'est-' + SRS.estat(pid, a, b, tipus);

  function setPerfil(id) { pid = id; actualitza(); }

  /** m: 'lliure'|'rellotge'|'repas'|'seq'|'presentacio'
      opcions: { rang: 10|20|100, tipusOp: 'suma'|'resta'|'les dues' } */
  function setMode(m, opcions = {}) {
    modeActiu = m;
    cfg.rang = opcions.rang || 20;
    cfg.tipusOp = opcions.tipusOp || 'les dues';
    if (pid && m !== 'presentacio') sess = SRS.novaSessio(pid);
  }

  function primeraPregunta() {
    if (modeActiu !== 'repas') return null;
    const cua = SRS.queue(pid, 999);
    const f = cua.filter(c => c.state === 'review').sort((a, b) => b.interval - a.interval)[0];
    return f ? { a: f.a, b: f.b, tipus: f.tipus } : null;
  }

  function properaPregunta() {
    if (modeActiu === 'presentacio') return null;
    const re = sess && sess.seguent();
    if (re) return re;
    if (modeActiu === 'repas') {
      const q = SRS.queue(pid, 1)[0];
      if (q) return { a: q.a, b: q.b, tipus: q.tipus };
      const nv = SRS.noves(pid, cfg.rang, cfg.tipusOp, 1)[0];
      if (nv) return nv;
    }
    return null;
  }

  function resposta(p, r) {
    if (modeActiu === 'presentacio') return;
    if (sess) sess.resultat(p, r);
    actualitza();
  }

  const fetsFitxa = () => SRS.queue(pid, 40);
  const csvProgres = () => SRS.csv(pid);

  return { setPerfil, setMode, actualitza, classeEstat, primeraPregunta,
           properaPregunta, resposta, fetsFitxa, csvProgres };
})();