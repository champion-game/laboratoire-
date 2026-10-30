/* =====================================================================
   PLATEAU ABRI — plateau de défense (jour / nuit / nuit rouge)
   Tout le rendu de secours est dessiné en CSS + SVG. Les visuels livrés par
   Codex (manifest.json) le remplacent automatiquement.
   ===================================================================== */

const $ = s => document.querySelector(s);
const stage = $('#stage');
// Grille de la cour : 11 × 9 cases sur la zone jouable de la cour (602 × 506 px).
// L'image de la cour est étirée sur toute la zone centrale ; sa grille peinte (9 × 9) ne correspond pas aux cases.
const COLS = 11, ROWS = 9;
// Positions et tailles en % de la zone jouable : tout suit quand la cour s'agrandit avec l'écran.
const PX = x => `${x / COLS * 100}%`, PY = y => `${y / ROWS * 100}%`;

/* ================= ICÔNES (rendu de secours) ================= */
// viewBox 0 0 48 48, trait = currentColor
const UI_ICONS = {
  son: '<path class="p" d="M8 18h8l11-9v30l-11-9H8Z"/><path class="s" d="M32 17q5 7 0 14M36 12q10 12 0 24"/>',
  'son-coupe': '<path class="p" d="M8 18h8l11-9v30l-11-9H8Z"/><path class="s" d="M32 18l10 12M42 18 32 30"/>',
  musique: '<path class="p" d="M18 10l20-5v26a6 6 0 1 1-4-5.6V13l-12 3v19a6 6 0 1 1-4-5.6Z"/>',
  'musique-coupee': '<path class="p" d="M18 10l20-5v26a6 6 0 1 1-4-5.6V13l-12 3v19a6 6 0 1 1-4-5.6Z" opacity=".45"/><path class="s" d="M8 8l32 32"/>',
  'plein-ecran': '<path class="s" style="stroke-width:4" d="M8 17V8h9M31 8h9v9M40 31v9h-9M17 40H8v-9"/>',
  stats: '<path class="p" d="M8 38h33v3H8ZM11 26h6v10h-6ZM21 18h6v18h-6ZM31 10h6v26h-6Z"/>',
  options: '<path class="p" fill-rule="evenodd" d="M21 4h6l1 5 4 2 4-3 4 4-3 4 2 4 5 1v6l-5 1-2 4 3 4-4 4-4-3-4 2-1 5h-6l-1-5-4-2-4 3-4-4 3-4-2-4-5-1v-6l5-1 2-4-3-4 4-4 4 3 4-2Zm3 13a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"/>',
  regles: '<path class="p" d="M4 12q10-3 19 2v26q-9-5-19-2ZM25 14q9-5 19-2v26q-10-3-19 2Z"/><path class="s" style="stroke:#1a1714;stroke-width:1.4" d="M8 18q6-1 11 1M8 23q6-1 11 1M8 28q6-1 11 1M29 19q5-2 11-1M29 24q5-2 11-1M29 29q5-2 11-1"/>',
  reserve: '<path class="p" d="M9 14l15-5 6 20-15 5Z" opacity=".55"/><path class="p" d="M15 12h16v24H15Z" opacity=".8"/><path class="p" d="M20 14h16v24H20Z"/><path class="s" style="stroke:#1a1714;stroke-width:1.2" d="M23 18h10M23 22h10"/>',
  defausse: '<path class="p" d="M12 12h24v3H12ZM19 8h10v4H19ZM14 17h20l-2 24H16Z"/><path class="s" style="stroke:#1a1714;stroke-width:2" d="M20 21v16M24 21v16M28 21v16"/>',
};
// viewBox 0 0 64 40, encre pleine
const LIST_ICONS = {
  barricade: '<g class="p"><path d="M4 30 54 10l3 6L7 36Z"/><path d="M8 14l50 16-3 6L5 20Z"/><path d="M6 24h52v6H6Z"/></g>',
  cloture: '<g class="p"><path d="M6 14l3-5 3 5v22H6ZM15 12l3-5 3 5v24h-6ZM24 14l3-5 3 5v22h-6ZM33 12l3-5 3 5v24h-6ZM42 14l3-5 3 5v22h-6ZM51 12l3-5 3 5v24h-6Z"/><path d="M3 18h58v3H3ZM3 28h58v3H3Z"/></g>',
  epave: '<g class="p"><path d="M4 28q0-6 8-8l8-8h20l10 8q9 1 10 8v4H4Z"/><circle cx="16" cy="32" r="5"/><circle cx="48" cy="32" r="5"/></g><path d="M22 14h7v6h-11ZM32 14h7l6 6H32Z" fill="#d8ccb0"/>',
  projecteur: '<g class="p"><path d="M18 6a14 14 0 0 1 18 18L22 26Z"/><path d="M26 22l-8 16h3l7-12 7 12h3l-8-16Z"/></g><path d="M38 8l22-6M40 14h22M38 20l22 6" stroke="currentColor" stroke-width="2" opacity=".6"/>',
  'lance-flammes': '<g class="p"><path d="M6 26l30-8 2 6-30 8Z"/><path d="M36 17h12l2 5H38Z"/><rect x="10" y="10" width="10" height="16" rx="5"/><path d="M14 30l4 8h-4Z"/></g><path d="M50 20q8-6 12 0-6 2-12 4Z" fill="#c43a1e"/>',
  tireur: '<g class="p"><circle cx="24" cy="9" r="5"/><path d="M18 15h12l4 10-4 2-2-4-2 15h-5l-1-10-4 10h-5l5-14Z"/><path d="M26 17l34-4v3l-34 6Z"/></g>',
  tourelle: '<g class="p"><path d="M18 10h22v12H18Z"/><path d="M40 13h22v4H40Z"/><path d="M28 22l-12 16h3l10-12 10 12h3L30 22Z"/><path d="M26 22h4v16h-4Z"/></g>',
};

/* ================= ILLUSTRATIONS DES CARTES (secours) ================= */
const rng = seed => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
function splash(seed, cls = 'splash', n = 26){
  const r = rng(seed); let s = `<g class="${cls}" filter="url(#splat)"><circle cx="70" cy="66" r="34"/>`;
  for (let i = 0; i < n; i++){ const a = r()*6.28, d = 26 + r()*44, z = 2 + r()*7;
    s += `<circle cx="${70+Math.cos(a)*d}" cy="${66+Math.sin(a)*d}" r="${z}" opacity="${.5+r()*.5}"/>`; }
  return s + '</g>';
}
const ink = (seed) => splash(seed, 'gris', 14);
const CARD_ART = {
  barricade: () => ink(3) + `<g class="ink"><path d="M18 108 120 38l8 10L26 118Z"/><path d="M24 50l96 50-6 11-96-50Z"/><path d="M14 84h112v14H14Z"/><path d="M46 30h12v92H46Z"/></g><g class="clair"><path d="M30 100 112 46l2 3-82 54Z"/><path d="M18 88h104v3H18Z"/></g><path class="ink" d="M10 122q30-8 60-2t60-2v10H10Z"/>`,
  mitrailleuse: () => ink(7) + `<g class="ink"><path d="M30 60h60v16H30Z"/><path d="M90 64h40v6H90Z"/><path d="M40 52h30v8H40Z"/><path d="M60 76 34 124h7l23-40 22 40h7L66 76Z"/><path d="M58 76h8v48h-8Z"/></g><g class="ink-s"><path d="M44 76q-6 20 6 34t30 14" stroke-dasharray="4 3" stroke-width="7"/></g>`,
  molotov: () => splash(11) + `<g class="ink"><path d="M40 118q-10-6-4-16l34-40 12 10-34 42q-4 6-8 4Z"/><path d="M70 58l10-14 10 8-8 16Z"/></g><path class="feu" d="M90 44q-2-14 10-22-2 10 8 14 0 12-12 14-6-2-6-6Z"/><path class="clair" d="M48 104l26-32 4 3-26 32Z" opacity=".6"/>`,
  guetteur: () => ink(5) + `<g class="ink"><path d="M40 130q-4-40 10-58 10-12 26-10 18 2 24 20 8 26 2 48Z"/><path d="M54 44q4-22 24-22t22 22l-2 18H56Z"/></g><g class="clair"><path d="M62 46h30v10H62Z"/></g><g class="ink"><rect x="58" y="42" width="16" height="18" rx="4"/><rect x="78" y="42" width="16" height="18" rx="4"/></g><path class="gris" d="M44 90h52v6H44Z"/>`,
  tireur: () => splash(17) + `<g class="ink"><circle cx="58" cy="40" r="12"/><path d="M44 36q14-14 28 0Z"/><path d="M40 56q16-6 30 2l6 28-8 4-4-14-4 34H48l-2-22-8 22H28l10-28Z"/><path d="M58 60l70-14 2 7-70 14Z"/></g><path class="clair" d="M50 60h14v8H50Z" opacity=".5"/>`,
};
const genericArt = id => ink(id.length * 3) + `<g transform="translate(14 30) scale(1.75)" class="ink">${LIST_ICONS[id] || ''}</g>`;
const cardArt = id => `<svg viewBox="0 0 140 140" preserveAspectRatio="xMidYMid slice">${(CARD_ART[id] || (() => genericArt(id)))()}</svg>`;

/* ================= UNITÉS / OBSTACLES (secours) ================= */
const UNIT_SVG = {
  survivant: `<svg viewBox="0 0 80 80"><ellipse cx="40" cy="50" rx="20" ry="10" fill="#0005"/>
    <rect x="22" y="36" width="12" height="16" rx="4" class="tenue"/><ellipse cx="38" cy="46" rx="15" ry="12" class="tenue"/>
    <path d="M44 42h32v4H44Z" class="arme"/><path d="M48 46h10v4H48Z" class="arme"/>
    <ellipse cx="50" cy="44" rx="5" ry="4" class="peau"/><circle cx="38" cy="44" r="9" class="casque"/><circle cx="38" cy="44" r="9" class="trait"/></svg>`,
  zombie: `<svg viewBox="0 0 80 80"><ellipse cx="40" cy="50" rx="18" ry="9" fill="#0005"/>
    <path d="M40 38l26-4v4l-24 6ZM40 52l26 2v4l-26-2Z" class="peau"/>
    <ellipse cx="38" cy="46" rx="14" ry="12" class="tenue"/><circle cx="34" cy="50" r="5" class="sang"/>
    <circle cx="40" cy="45" r="8" class="peau"/><circle cx="40" cy="45" r="8" class="trait"/><path d="M43 43l3 1M43 48l3-1" stroke="#8a120c" stroke-width="2"/></svg>`,
};
const EPAVE_SVG = `<svg viewBox="0 0 160 110"><g transform="rotate(-30 80 55)"><rect x="12" y="22" width="136" height="66" rx="18" fill="#7a4a2a"/>
  <rect x="12" y="22" width="136" height="66" rx="18" fill="none" stroke="#2a1a10" stroke-width="3"/>
  <rect x="44" y="30" width="58" height="50" rx="8" fill="#5a3a24"/><path d="M40 32h10v46H40ZM98 32h10v46H98Z" fill="#1a1612"/>
  <path d="M22 30q-6 25 0 50M138 30q6 25 0 50" stroke="#c9c2b0" stroke-width="5" fill="none"/>
  <circle cx="70" cy="50" r="10" fill="#4a2a18"/><circle cx="120" cy="70" r="7" fill="#3a2212"/></g></svg>`;
const SANG_SVG = seed => { const r = rng(seed); let s = '<svg viewBox="0 0 100 100"><g filter="url(#splat)"><ellipse cx="50" cy="50" rx="20" ry="14"/>';
  for (let i = 0; i < 16; i++){ const a=r()*6.28, d=14+r()*32; s += `<circle cx="${50+Math.cos(a)*d}" cy="${50+Math.sin(a)*d}" r="${2+r()*6}"/>`; }
  return s + '</g></svg>'; };

/* ================= DONNÉES DE DÉMO ================= */
const DEMO = {
  phase: 'jour',                         // 'jour' | 'nuit' | 'nuit-rouge'
  jour: 9,
  progression: 4.5, etapes: 12,          // losanges du bandeau (4,5 = 4 pleins + 1 moitié)
  deck: 15, reserve: 2, defausse: 2,
  disponibles: [
    { id:'barricade',     nom:'Barricade',     nb:3 },
    { id:'cloture',       nom:'Clôture',       nb:1 },
    { id:'epave',         nom:'Épave',         nb:1 },
    { id:'projecteur',    nom:'Projecteur',    nb:0 },
    { id:'lance-flammes', nom:'Lance-flammes', nb:0 },
    { id:'tireur',        nom:'Tireur',        nb:2 },
    { id:'tourelle',      nom:'Tourelle',      nb:1 },
  ],
  main: [
    { id:'barricade',    nom:'Barricade',    cout:3 },
    { id:'mitrailleuse', nom:'Mitrailleuse', cout:1 },
    { id:'molotov',      nom:'Molotov',      cout:3 },
    { id:'guetteur',     nom:'Guetteur',     cout:2 },
    { id:'tireur',       nom:'Tireur',       cout:1 },
  ],
  abri: { pv:190, max:200 },
  zombiesDehors: 7, vagues: { faites:2, total:3 },
  vitesse: 1,
  // Positions en cases (colonne, ligne) depuis le coin haut-gauche de la grille (9 × 9) ; décimales permises.
  // Les décors (sacs, caisses, sang…) sont déjà peints dans l'image de la cour : la démo n'en ajoute pas.
  unites: [
    { type:'survivant', x:3.3, y:1.7, pv:1,  dir:0 },
    { type:'survivant', x:3.2, y:4.6, pv:1,  dir:-6 },
    { type:'survivant', x:5.1, y:7.2, pv:.8, dir:-4 },
    { type:'zombie',    x:5.7, y:1.0, pv:.7, dir:120 },
    { type:'zombie',    x:7.3, y:1.8, pv:1,  dir:150 },
    { type:'zombie',    x:8.3, y:2.6, pv:.6, dir:170 },
    { type:'zombie',    x:9.3, y:5.2, pv:.5, dir:190 },
    { type:'zombie',    x:8.4, y:6.6, pv:.7, dir:200 },
    { type:'zombie',    x:2.1, y:6.9, pv:.8, dir:-60 },
  ],
  obstacles: [],
  taches: [],
  // Lampadaires peints dans l'image de la cour (halos visibles la nuit)
  lampes: [ {x:-2.05,y:.49},{x:13.0,y:.48},{x:-1.6,y:10.12},{x:12.55,y:10.13} ],
};
const clone = o => JSON.parse(JSON.stringify(o));
let S = clone(DEMO);                        // état affiché
const DEMO_SELECTION = { source:'liste', id:'barricade', index:0 };
let selection = { ...DEMO_SELECTION };      // { source:'liste'|'main', id, index } ou null
let sonOn = true, musiqueOn = true;

/* ================= RENDU ================= */
const icon = (set, id) => `<svg viewBox="${set === UI_ICONS ? '0 0 48 48' : '0 0 64 40'}" aria-hidden="true">${set[id] || ''}</svg>`;
function fillIcons(root = document){
  root.querySelectorAll('.ico[data-icon]').forEach(el => { el.innerHTML = icon(UI_ICONS, el.dataset.icon); });
}
const pct = v => `${Math.max(0, Math.min(1, v)) * 100}%`;
const at = (el, x, y) => { el.style.left = PX(x); el.style.top = PY(y); };

function renderHud(){
  stage.dataset.phase = S.phase;
  $('#viewport').dataset.phase = S.phase;   // le fond couvre tout l'écran, autour de la scène
  $('#phase-label').textContent = S.phase === 'jour' ? 'JOUR' : 'NIGHT';
  $('#jour-num').textContent = S.jour;
  $('#losanges').innerHTML = Array.from({ length: S.etapes }, (_, i) =>
    `<i class="${i + 1 <= S.progression ? 'fait' : i < S.progression ? 'demi' : ''}"></i>`).join('');
  $('#losanges').setAttribute('aria-label', `Progression : ${S.progression} sur ${S.etapes}`);
  $('#deck-num').textContent = S.deck;
  $('#reserve-num').textContent = S.reserve;
  $('#defausse-num').textContent = S.defausse;
  $('#abri-pv').textContent = `${S.abri.pv} / ${S.abri.max}`;
  $('#abri-barre').style.width = pct(S.abri.pv / S.abri.max);
  $('#zombies-num').textContent = S.zombiesDehors;
  $('#vagues').innerHTML = Array.from({ length: S.vagues.total }, (_, i) => `<i class="${i < S.vagues.faites ? 'faite' : ''}"></i>`).join('');
  document.querySelectorAll('[data-speed]').forEach(b => b.setAttribute('aria-checked', String(+b.dataset.speed === S.vitesse)));
}

function renderListe(){
  $('#liste').innerHTML = S.disponibles.map((c, i) => {
    const sel = selection && selection.source === 'liste' && selection.id === c.id;
    return `<li><button class="ligne${sel ? ' actif' : ''}" role="option" data-i="${i}" data-asset="bouton-ligne"
      aria-selected="${sel}" aria-disabled="${c.nb <= 0}" aria-label="${c.nom}, ${c.nb} disponible${c.nb > 1 ? 's' : ''}">
      <i class="ico" data-asset="liste-${c.id}">${icon(LIST_ICONS, c.id)}</i><span class="nom">${c.nom}</span><span class="nb">${c.nb}</span></button></li>`;
  }).join('');
}

function renderMain(){
  const n = S.main.length, rot = i => n < 2 ? 0 : (-4 + 8 * i / (n - 1)) * .6;
  $('#main').innerHTML = S.main.map((c, i) => {
    const sel = selection && selection.source === 'main' && selection.index === i;
    return `<button class="carte" data-i="${i}" aria-pressed="${sel}" aria-label="${c.nom}, coût ${c.cout}" style="--r:${rot(i).toFixed(1)}deg">
      <span class="cadre" data-asset="carte-modele"></span>
      <span class="art" data-asset="carte-${c.id}"><span class="fx">${cardArt(c.id)}</span></span>
      <span class="nom">${c.nom}</span><span class="cout" data-asset="pastille-cout">${c.cout}</span></button>`;
  }).join('') || '';
}

function renderPlateau(){
  $('#decals').innerHTML = '';
  for (const [k, t] of S.taches.entries()){
    const d = document.createElement('div'); d.className = 'decal'; d.dataset.asset = 'decal-sang';
    const s = t.s || 1; Object.assign(d.style, { width:PX(s), height:PY(s), transform:'translate(-50%,-50%)' });
    d.innerHTML = `<span class="fx">${SANG_SVG(k * 31 + 7)}</span>`; at(d, t.x, t.y); $('#decals').append(d);
  }
  $('#lampes').innerHTML = S.lampes.map(l => `<i style="left:${PX(l.x)};top:${PY(l.y)}"></i>`).join('');
  const pieces = $('#pieces'); pieces.innerHTML = '';
  for (const o of S.obstacles){
    const el = document.createElement('div');
    el.className = `piece obstacle ${o.type}`; el.dataset.asset = `obstacle-${o.type}`;
    at(el, o.x, o.y); el.style.width = PX(o.w); el.style.height = PY(o.h);
    if (o.type === 'epave') el.innerHTML = `<span class="fx">${EPAVE_SVG}</span>`;
    if (o.type === 'pose') { el.classList.add('pose-carte'); el.innerHTML = `<i class="ico">${icon(LIST_ICONS, o.carte)}</i>`; }
    pieces.append(el);
  }
  for (const u of S.unites){
    const el = document.createElement('div'); el.className = `piece unite ${u.type}`; at(el, u.x, u.y);
    el.innerHTML = `<i class="anneau"></i><i class="faisceau" style="transform:rotate(${(u.dir || 0) - 14}deg)"></i>
      <div class="corps" data-asset="unite-${u.type}" style="transform:rotate(${u.dir || 0}deg)"><span class="fx">${UNIT_SVG[u.type] || ''}</span></div>
      <span class="pv"><i style="width:${pct(u.pv ?? 1)}"></i></span>`;
    pieces.append(el);
  }
  $('#cases').innerHTML = Array.from({ length: COLS * ROWS }, (_, i) =>
    `<button class="case" role="gridcell" data-c="${i % COLS}" data-r="${Math.floor(i / COLS)}" aria-label="Case ${i % COLS + 1}, ${Math.floor(i / COLS) + 1}" tabindex="-1"></button>`).join('');
}

function renderSelection(){
  stage.classList.toggle('pose', !!selection);
  $('#cases').querySelectorAll('.case').forEach(c => { c.tabIndex = selection ? 0 : -1; });
}

function renderAll(){
  renderHud(); renderListe(); renderMain(); renderPlateau(); renderSelection();
  fillIcons(); applyAssets();
}

/* ================= INTERACTIONS ================= */
function annonce(t){ $('#annonce').textContent = t; }
function select(next){
  const same = selection && next && selection.source === next.source && selection.id === next.id && selection.index === next.index;
  selection = same ? null : next;
  renderListe(); renderMain(); renderSelection(); fillIcons(); applyAssets();
  if (selection){ emit('cardSelected', { ...selection }); annonce(`Carte choisie : ${selection.id}. Choisissez une case.`); }
}

$('#liste').addEventListener('click', e => {
  const b = e.target.closest('.ligne'); if (!b || b.getAttribute('aria-disabled') === 'true') return;
  const c = S.disponibles[+b.dataset.i]; select({ source:'liste', id:c.id, index:+b.dataset.i });
});
$('#main').addEventListener('click', e => {
  const b = e.target.closest('.carte'); if (!b) return;
  const c = S.main[+b.dataset.i]; select({ source:'main', id:c.id, index:+b.dataset.i });
});
$('#cases').addEventListener('click', e => {
  const b = e.target.closest('.case'); if (!b || !selection) return;
  const col = +b.dataset.c, row = +b.dataset.r, played = { ...selection, col, row };
  // Retour visuel immédiat ; le jeu peut corriger avec setData().
  S.obstacles.push({ type:'pose', carte: LIST_ICONS[played.id] ? played.id : 'barricade', x:col + .1, y:row + .1, w:.8, h:.8 });
  if (played.source === 'liste'){ const c = S.disponibles[played.index]; if (c) c.nb = Math.max(0, c.nb - 1); }
  else { S.main.splice(played.index, 1); S.defausse++; }
  selection = null; renderAll();
  emit('cardPlayed', played); annonce(`${played.id} posé en case ${col + 1}, ${row + 1}.`);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && selection){ selection = null; renderAll(); emit('selectionCancelled'); } });

$('#btn-affronter').addEventListener('click', () => {
  emit('startNight', { jour: S.jour });
  if (S.phase === 'jour'){ S.phase = 'nuit'; renderAll(); annonce('La nuit tombe.'); }
});
document.querySelectorAll('[data-speed]').forEach(b => b.addEventListener('click', () => {
  S.vitesse = +b.dataset.speed; renderHud(); applyAssets(); emit('speedChanged', { vitesse: S.vitesse });
}));
$('#btn-deck').addEventListener('click', () => emit('pileClicked', { pile:'deck' }));
$('#btn-reserve').addEventListener('click', () => emit('pileClicked', { pile:'reserve' }));
$('#btn-defausse').addEventListener('click', () => emit('pileClicked', { pile:'defausse' }));
document.querySelectorAll('.btn-menu').forEach(b => b.addEventListener('click', () => emit('menu', { action: b.dataset.action })));
document.querySelector('[data-action=son]').addEventListener('click', e => {
  sonOn = !sonOn; const b = e.currentTarget, i = b.querySelector('.ico');
  b.setAttribute('aria-pressed', String(sonOn)); i.dataset.icon = sonOn ? 'son' : 'son-coupe'; i.dataset.asset = 'icone-' + i.dataset.icon;
  fillIcons(b); applyAssets(); emit('soundToggled', { on: sonOn });
});
document.querySelector('[data-action=musique]').addEventListener('click', e => {
  musiqueOn = !musiqueOn; const b = e.currentTarget, i = b.querySelector('.ico');
  b.setAttribute('aria-pressed', String(musiqueOn)); i.dataset.icon = musiqueOn ? 'musique' : 'musique-coupee'; i.dataset.asset = 'icone-' + i.dataset.icon;
  fillIcons(b); applyAssets(); emit('musicToggled', { on: musiqueOn });
});
document.querySelector('[data-action=plein-ecran]').addEventListener('click', () => {
  const d = document, el = d.documentElement;
  try {
    if (d.fullscreenElement || d.webkitFullscreenElement) (d.exitFullscreen || d.webkitExitFullscreen).call(d);
    else { const p = (el.requestFullscreen || el.webkitRequestFullscreen).call(el); if (p && p.catch) p.catch(() => {}); }
  } catch {}
  emit('fullscreenToggled');
});
document.querySelector('[data-action=stats]').addEventListener('click', () => emit('menu', { action:'stats' }));

/* ================= MISE À L'ÉCHELLE ================= */
// Échelle pour que 1536 × 1024 tienne, puis la scène s'élargit (ou s'allonge) jusqu'aux bords de l'écran.
function fit(){
  const k = Math.min(innerWidth / 1536, innerHeight / 1024);
  stage.style.setProperty('--k', k);
  stage.style.setProperty('--W', `${innerWidth / k}px`);
  stage.style.setProperty('--H', `${innerHeight / k}px`);
}
addEventListener('resize', fit); fit();

/* ================= VISUELS (manifest.json) =================
   Chaque élément porte data-asset="clé" (ou data-asset-base="base" → clé « base-<phase> »).
   Si le fichier de la clé existe, il remplace le rendu de secours (.fx) selon son type :
   fond / illustration / icone → image étirée ; texture → répétée ; cadre-9 → border-image ;
   bouton → une image par état (normal, survol, appui, desactive, actif). */
const ASSETS = { manifest:{}, ok:{}, forceMissing:false };
const probe = src => new Promise(done => {
  if (!src) return done(false);
  const i = new Image(); i.onload = () => done(true); i.onerror = () => done(false); i.src = src;
});
const mainFile = e => e.file || (e.files && e.files.normal);
async function loadAssets(){
  try { ASSETS.manifest = (await (await fetch('manifest.json', { cache:'no-cache' })).json()).assets || {}; }
  catch { ASSETS.manifest = {}; }
  await Promise.all(Object.entries(ASSETS.manifest).map(async ([k, e]) => { ASSETS.ok[k] = await probe(mainFile(e)); }));
}
function applyAsset(el, key){
  const e = ASSETS.manifest[key], on = !!e && ASSETS.ok[key] && !ASSETS.forceMissing;
  el.classList.toggle('asset-on', on);
  el.classList.toggle('is-texture', on && e.type === 'texture');
  el.classList.toggle('is-cadre', on && e.type === 'cadre-9');
  el.classList.toggle('is-bouton', on && e.type === 'bouton');
  if (!on) return;
  if (e.type === 'bouton') for (const [etat, f] of Object.entries(e.files || {})) el.style.setProperty(`--etat-${etat}`, `url('${f}')`);
  else el.style.setProperty('--asset', `url('${e.file}')`);
  if (e.type === 'cadre-9'){ el.style.setProperty('--slice', e.bord); el.style.setProperty('--slice-px', `${e.bord}px`); }
}
function applyAssets(){
  document.querySelectorAll('[data-asset]').forEach(el => applyAsset(el, el.dataset.asset));
  document.querySelectorAll('[data-asset-base]').forEach(el => applyAsset(el, `${el.dataset.assetBase}-${S.phase}`));
}

/* ================= INTÉGRATION AU JEU =================
   Entrée : window.PlateauAbriUI.setData({...})
            ou postMessage({ to:'plateau-abri', type:'setData', data:{...} })
   Sortie : événements « plateau-abri:<nom> » sur window
            (+ postMessage({ from:'plateau-abri', event, detail }) au parent si la page est dans une iframe).
   Détail des données et des événements : README.md. */
const UI_ID = 'plateau-abri';
function emit(name, detail = {}){
  window.dispatchEvent(new CustomEvent(`${UI_ID}:${name}`, { detail }));
  if (window.parent !== window) window.parent.postMessage({ from: UI_ID, event: name, detail }, '*');
}
window.addEventListener('message', e => {
  const m = e.data;
  if (m && m.to === UI_ID && m.type === 'setData') setData(m.data);
});
// Les champs absents gardent leur valeur actuelle.
function setData(data = {}){
  S = { ...S, ...clone(data) };
  selection = data.selection !== undefined ? data.selection : null;
  renderAll();
}
window.PlateauAbriUI = { setData, getState: () => clone(S) };

/* ================= PANNEAU DE TEST (fausses données, hors jeu) ================= */
const TESTS = [
  ['Jour (démo)', () => setData({ ...clone(DEMO), selection: DEMO_SELECTION })],
  ['Nuit', () => setData({ ...clone(DEMO), phase:'nuit', selection: DEMO_SELECTION })],
  ['Nuit rouge', () => setData({ ...clone(DEMO), phase:'nuit-rouge', selection: DEMO_SELECTION })],
  ['Main vide', () => setData({ main: [] })],
  ['Plus aucune carte', () => setData({ deck:0, reserve:0, main:[], disponibles: DEMO.disponibles.map(c => ({ ...c, nb:0 })) })],
  ['Abri presque détruit', () => setData({ abri:{ pv:18, max:200 } })],
  ['Grosse horde', () => setData({ zombiesDehors:42, vagues:{ faites:0, total:5 },
    unites: [...DEMO.unites, ...Array.from({ length:10 }, (_, i) => ({ type:'zombie', x:.6 + (i * 37 % 98) / 10, y:.6 + (i * 53 % 78) / 10, pv:1, dir:i * 40 }))] })],
  ['Visuels manquants on/off', () => { ASSETS.forceMissing = !ASSETS.forceMissing; applyAssets(); }],
];
for (const [label, run] of TESTS){
  const b = document.createElement('button');
  b.type = 'button'; b.textContent = label; b.onclick = run;
  document.getElementById('ui-tests').append(b);
}

renderAll();
loadAssets().then(() => { applyAssets(); emit('ready'); });
