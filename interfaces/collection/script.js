/* ================= SIDEBAR ICONS ================= */
const ICONS = {
  toutes:'<svg viewBox="0 0 24 24"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg>',
  humains:'<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="5"/><path d="M2 23c0-6 4.5-9 10-9s10 3 10 9Z"/></svg>',
  tireurs:'<svg viewBox="0 0 24 24"><path d="M11 1h2v4.1A7 7 0 0 1 18.9 11H23v2h-4.1A7 7 0 0 1 13 18.9V23h-2v-4.1A7 7 0 0 1 5.1 13H1v-2h4.1A7 7 0 0 1 11 5.1Zm1 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>',
  murs:'<svg viewBox="0 0 24 24"><path d="M1 3h10v5H1Zm12 0h10v5H13ZM1 10h5v5H1Zm7 0h8v5H8Zm10 0h5v5h-5ZM1 17h10v5H1Zm12 0h10v5H13Z"/></svg>',
  armes:'<svg viewBox="0 0 24 24"><path d="M12 0l2 7 6-4-3 6 7 1-6 3 5 6-7-2 1 7-5-6-4 6v-7l-7 2 5-6-6-3 7-1-3-6 6 4Z"/></svg>',
  speciaux:'<svg viewBox="0 0 24 24"><path d="M19.4 13a7.5 7.5 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1L15 3.3h-4l-.3 2.6a7.6 7.6 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.5 7.5 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1a7.6 7.6 0 0 0 1.7 1l.3 2.6h4l.3-2.6a7.6 7.6 0 0 0 1.7-1l2.5 1 2-3.5ZM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" transform="translate(-1 0)"/></svg>',
  zombies:'<svg viewBox="0 0 24 24"><path d="M12 1C6.5 1 3 5 3 10c0 3 1.3 5 3 6.3V20h3v-2h2v2h2v-2h2v2h3v-3.7c1.7-1.3 3-3.3 3-6.3 0-5-3.5-9-9-9Zm-4 8.5a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6Zm8 0a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6ZM12 14l1.3 2.5h-2.6Z"/></svg>',
  evenements:'<svg viewBox="0 0 24 24"><path d="M3.5 2 2 3.5l7 7-1.8 1.8 1.4 1.4L6 16.4 3 19.4 4.6 21l3-3 2.7-2.6 1.4 1.4 1.8-1.8 1.4 1.4 1.4-1.4L4.5 2.1ZM20.5 2 14 8.5l1.5 1.5L22 3.5ZM16.5 12l-1.5 1.5 3 3L15.5 19l1.5 1.5 2.5-2.5 1.5 1.5 1.5-1.5Z"/></svg>',
  ressources:'<svg viewBox="0 0 24 24"><path d="M12 1 2 6v12l10 5 10-5V6Zm0 2.2L19.5 7 12 10.8 4.5 7ZM4 8.6l7 3.5v8.3L4 16.9Zm9 11.8v-8.3l7-3.5v8.3Z"/></svg>',
  consommables:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11"/><path d="M10 6h4v4h4v4h-4v4h-4v-4H6v-4h4Z" fill="#1d1a17"/></svg>',
};
const CATEGORIES = [
  {id:'toutes',label:'Toutes'},{id:'humains',label:'Humains'},{id:'tireurs',label:'Tireurs'},
  {id:'murs',label:'Murs'},{id:'armes',label:'Armes spé'},{id:'speciaux',label:'Spéciaux'},
  {id:'zombies',label:'Zombies'},{id:'evenements',label:'Événements'},{id:'ressources',label:'Ressources'},
  {id:'consommables',label:'Consommables'},
];

/* ================= PROCEDURAL ART ================= */
const INK='#1f1914', SHADE='#5a4a3a', CLOTH='#efe7d6';
// seeded random so each card always gets the same splatter
const rng = seed => () => (seed = (seed*16807) % 2147483647) / 2147483647;
function splat(seed, color){
  const r = rng(seed); let out = '';
  for (const cx of [26, 74]) {
    const cy = 42 + r()*10;
    out += `<circle cx="${cx}" cy="${cy}" r="${13+r()*6}" fill="${color}" opacity=".9"/>`;
    for (let i=0;i<18;i++){
      const a=r()*Math.PI*2, d=10+r()*30, s=1+r()*5;
      out += `<circle cx="${cx+Math.cos(a)*d}" cy="${cy+Math.sin(a)*d*1.2}" r="${s}" fill="${color}" opacity="${.5+r()*.5}"/>`;
    }
    for (let i=0;i<7;i++){
      const a=r()*Math.PI*2, d=34+r()*16;
      out += `<path d="M${cx} ${cy}L${cx+Math.cos(a)*d} ${cy+Math.sin(a)*d}" stroke="${color}" stroke-width="${.6+r()*1.4}" stroke-linecap="round" opacity=".8"/>`;
    }
  }
  return `<g filter="url(#splatter)">${out}</g>`;
}
const ground = `<path d="M0 90q14-4 26-1t24-2 26 1 24-1v13H0Z" fill="${INK}" opacity=".85"/>
  <g stroke="${INK}" stroke-width="1" stroke-linecap="round">${Array.from({length:22},(_,i)=>`<path d="M${i*4.8+1} 90l${(i%3)-1} -${2+(i*7%5)}"/>`).join('')}</g>`;
const wrap = (inner, seed, color) =>
  `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">${splat(seed,color)}<g filter="url(#rough)">${ground}${inner}</g></svg>`;

const ART = {
  partisane: `
    <path d="M32 100q0-30 6-40 6-8 12-8t12 8q6 10 6 40Z" fill="#6b6455" stroke="${INK}" stroke-width="1.5"/>
    <circle cx="50" cy="34" r="10" fill="#d9b48a" stroke="${INK}" stroke-width="1.5"/>
    <path d="M38 30q2-10 12-10t12 8l4 2-30 1Z" fill="#4a4338" stroke="${INK}" stroke-width="1.2"/>
    <circle cx="50" cy="25" r="1.5" fill="#b3261e"/>
    <path d="M40 34q-4 8-2 16" stroke="#5a3d22" stroke-width="3" fill="none"/>
    <path d="M46 36h2M53 36h2M48 41h5" stroke="${INK}" stroke-width="1"/>
    <path d="M22 66l56-12 2 4-12 4 2 8-6 1-2-7-38 8Z" fill="#3a2f22" stroke="${INK}" stroke-width="1"/>
    <path d="M40 64q4 6 10 2M58 58q4 0 6 4" stroke="#d9b48a" stroke-width="4" stroke-linecap="round"/>
    <path d="M42 70v18M58 72v16" stroke="${INK}" stroke-width=".8"/>`,
  chien: `
    <path d="M24 56q4-10 16-12l24-2q10 0 12 10l2 14-4 22h-5l1-18-8 4-16 0-4 14h-5l2-16q-8-2-12-8l-6 18h-5l4-20q-4-2-4-6Z" fill="#a88a62" stroke="${INK}" stroke-width="1.5"/>
    <path d="M62 42l2-16 5 10 3-12 4 14q8 4 8 10l-6 4-10-2Z" fill="#8b6f4a" stroke="${INK}" stroke-width="1.5"/>
    <path d="M78 52l8 2-2 4-8-1Z" fill="${INK}"/><circle cx="72" cy="44" r="1.4" fill="${INK}"/>
    <path d="M24 54q-10-6-8-18" stroke="${INK}" stroke-width="3" fill="none"/>
    <path d="M42 46h22v14H42Z" fill="#4a4338" stroke="${INK}" stroke-width="1.2"/>
    <path d="M42 50h22M48 46v14" stroke="${INK}" stroke-width=".7"/>`,
  bouclier: `
    <path d="M28 100q-2-30 4-44 6-10 18-10t16 10q4 12 2 44Z" fill="#3e3c38" stroke="${INK}" stroke-width="1.5"/>
    <path d="M36 32q0-14 14-14t14 14v8H36Z" fill="#2c2b28" stroke="${INK}" stroke-width="1.5"/>
    <path d="M38 32h24v5H38Z" fill="#7a7a74" stroke="${INK}" stroke-width="1"/>
    <path d="M56 40q14-4 26 0l-2 52q-12 4-24 0Z" fill="#9c9c94" stroke="${INK}" stroke-width="1.8"/>
    <path d="M58 46q11-3 22 0v8q-11-3-22 0Z" fill="#c9c9c0" stroke="${INK}" stroke-width=".8"/>
    <path d="M60 60h18M60 70h18M60 80h18" stroke="${INK}" stroke-width=".5" opacity=".6"/>
    <path d="M30 62q-6 10-2 22" stroke="${INK}" stroke-width="5" stroke-linecap="round" fill="none"/>`,
  tourelle: `
    <path d="M50 64l-24 26M50 64l24 26M50 64v26" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="44" y="56" width="12" height="10" fill="#3a3732" stroke="${INK}" stroke-width="1.2"/>
    <rect x="28" y="34" width="34" height="24" rx="2" fill="#5b5850" stroke="${INK}" stroke-width="1.6"/>
    <rect x="32" y="38" width="12" height="7" fill="#2c2a26"/>
    <path d="M62 40l30-6v5l-30 6Z" fill="#46433d" stroke="${INK}" stroke-width="1.4"/>
    <rect x="86" y="32" width="6" height="9" fill="#2c2a26" stroke="${INK}" stroke-width="1"/>
    <path d="M30 34l4-6h20l4 6" fill="#46433d" stroke="${INK}" stroke-width="1.2"/>`,
  rodeur: `
    <path d="M38 50q4-8 14-8 10 2 12 12l4 18-6 2-4-14-2 18 8 14h-7l-8-12-6 12h-7l6-18q-6-8-4-26Z" fill="#8a3a2e" stroke="${INK}" stroke-width="1.5"/>
    <circle cx="56" cy="32" r="10" fill="#b7aa8e" stroke="${INK}" stroke-width="1.5"/>
    <path d="M51 30h3M58 29h3" stroke="${INK}" stroke-width="1.6"/>
    <path d="M53 37q4 3 7 0l-1 3h-5Z" fill="${INK}"/>
    <path d="M40 52l-14 6-2 4M62 54l18 4 4-2" stroke="#b7aa8e" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M44 60l4 4M54 50l-2 8M42 70l6-2" stroke="${INK}" stroke-width=".8"/>`,
  colosse: `
    <path d="M22 92q-4-26 6-40 8-10 22-10t22 10q10 14 6 40Z" fill="#6f6658" stroke="${INK}" stroke-width="1.8"/>
    <circle cx="50" cy="32" r="12" fill="#9a8f7a" stroke="${INK}" stroke-width="1.6"/>
    <path d="M43 30h4M53 30h4" stroke="${INK}" stroke-width="2"/>
    <path d="M44 38q6 4 12 0v4h-12Z" fill="${INK}"/>
    <path d="M24 56q-8 14-4 30M76 56q8 14 4 30" stroke="#8f8574" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M24 56q-8 14-4 30M76 56q8 14 4 30" stroke="${INK}" stroke-width="1.4" fill="none"/>
    <path d="M30 52l40 28M70 52l-40 28" stroke="#3a3228" stroke-width="3"/>
    <path d="M40 64l2 6M56 70l4-4M46 80l6 2" stroke="#7a2a1a" stroke-width="1.5"/>`,
  sacs: [0,1,2,3].map(r=>Array.from({length:5-(r%2)},(_,i)=>{
      const x=10+i*17+(r%2)*8.5, y=77-r*12;
      return `<rect x="${x}" y="${y}" width="16" height="11" rx="5" fill="#b9a57e" stroke="${INK}" stroke-width="1.2"/><path d="M${x+3} ${y+5}h10" stroke="${SHADE}" stroke-width=".6"/>`;}).join('')).join(''),
  jerrican: `
    <path d="M30 32h40q4 0 4 4v50q0 4-4 4H30q-4 0-4-4V36q0-4 4-4Z" fill="#b3261e" stroke="${INK}" stroke-width="1.8"/>
    <path d="M34 24h12l4 8H34Z" fill="#8c1c15" stroke="${INK}" stroke-width="1.4"/>
    <rect x="56" y="24" width="10" height="8" fill="#5e120c" stroke="${INK}" stroke-width="1.2"/>
    <path d="M34 40l32 44M66 40L34 84" stroke="#7d1711" stroke-width="3"/>
    <path d="M32 38h36v48H32Z" fill="none" stroke="#7d1711" stroke-width="1.5"/>`,
  medikit: `
    <rect x="22" y="40" width="56" height="44" rx="4" fill="#e9e2d0" stroke="${INK}" stroke-width="1.8"/>
    <path d="M40 40v-8h20v8" fill="none" stroke="${INK}" stroke-width="2.5"/>
    <path d="M45 50h10v8h8v10h-8v8H45v-8h-8V58h8Z" fill="#b3261e" stroke="${INK}" stroke-width="1.2"/>`,
  fusee: `
    <path d="M50 18q-18 20-6 70" stroke="#e0402f" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
    <circle cx="50" cy="18" r="9" fill="#ff7a2a"/><circle cx="50" cy="18" r="4" fill="#fff2b8"/>
    <rect x="40" y="66" width="10" height="24" rx="2" fill="#b3261e" stroke="${INK}" stroke-width="1.4" transform="rotate(-12 45 78)"/>`,
  barbeles: `
    <path d="M14 90l10-40M86 90l-10-40" stroke="#5a3d22" stroke-width="4"/>
    ${[0,1,2].map(i=>`<path d="M10 ${56+i*10}q10-6 20 0t20 0 20 0 20 0" stroke="${INK}" stroke-width="1.3" fill="none"/>`).join('')}
    ${Array.from({length:12},(_,i)=>`<path d="M${14+i*6.5} ${56+(i%3)*10}l-2-3m2 3 2-3m-2 3-2 3m2-3 2 3" stroke="${INK}" stroke-width=".9"/>`).join('')}`,
  pillard: `
    <path d="M34 100q0-30 4-42 4-8 12-8t12 8q4 12 4 42Z" fill="#584b3b" stroke="${INK}" stroke-width="1.5"/>
    <circle cx="50" cy="36" r="10" fill="#d0a982" stroke="${INK}" stroke-width="1.5"/>
    <path d="M40 38h20v6q-10 6-20 0Z" fill="#7a2a1a" stroke="${INK}" stroke-width="1"/>
    <path d="M40 32q0-10 10-10t10 10Z" fill="#2c2620"/>
    <path d="M62 56l14-24" stroke="#5a3d22" stroke-width="3"/>
    <path d="M70 30l10 4-4 6-8-4Z" fill="#8f8f88" stroke="${INK}" stroke-width="1"/>`,
};
const SPLAT_COLOR = {humains:'#f06a1e',tireurs:'#f06a1e',zombies:'#a3271a',murs:'#c9902e',armes:'#e2581c',
  speciaux:'#d98a2b',evenements:'#f4a52c',ressources:'#c9612e',consommables:'#c43a2c'};

/* ================= DATA ================= */
// Visuel de la carte : `img` (URL fournie par le jeu) ou, à défaut, la clé « carte-<art> » de manifest.json
// (carte complète illustrée, cadre compris). Sans fichier, le cadre est peint en CSS et `art` dessiné en SVG.
const CARDS = [
  {id:1, name:'Le Traqueur',    cats:['humains','tireurs'], cost:4, atk:3, hp:5, art:'traqueur',  text:'Inflige +2 dégâts aux zombies isolés.'},
  {id:2, name:'La Partisane',   cats:['humains','tireurs'], cost:3, atk:2, hp:4, art:'partisane', text:'Quand elle entre en jeu, piochez une carte Munitions.'},
  {id:3, name:'Molosse',        cats:['speciaux'],          cost:2, atk:3, hp:3, art:'chien',     text:'Flair : révèle le prochain zombie de la horde.'},
  {id:4, name:'Le Rempart',     cats:['humains'],           cost:5, atk:4, hp:6, art:'bouclier',  text:'Les alliés adjacents subissent 1 dégât de moins.'},
  {id:5, name:'Tourelle',       cats:['armes'],             cost:4, atk:5, hp:5, art:'tourelle',  text:'Tire sur le premier zombie de la ligne à chaque fin de tour.'},
  {id:6, name:'Rôdeur',         cats:['zombies'],           cost:3, atk:4, hp:3, art:'rodeur',    text:'Rapide : attaque le tour où il apparaît.'},
  {id:7, name:'Le Colosse',     cats:['zombies'],           cost:6, atk:6, hp:8, art:'colosse',   text:'Inflige le double de dégâts aux barricades.'},
  {id:8, name:'Sacs de sable',  cats:['murs'],              cost:2, atk:0, hp:6, art:'sacs',      text:'Bloque une ligne. Les Tireurs derrière gagnent +1 PV.'},
  {id:9, name:'Jerrican',       cats:['ressources'],        cost:1, atk:0, hp:0, art:'jerrican',  text:'Gagnez 2 carburants, ou sacrifiez-le pour enflammer une ligne.'},
  {id:10,name:'Trousse de soin',cats:['consommables'],      cost:2, atk:0, hp:0, art:'medikit',   text:'Rend 4 PV à un humain.'},
  {id:11,name:'Fusée éclairante',cats:['evenements'],       cost:1, atk:0, hp:0, art:'fusee',     text:'Tous les zombies sont révélés jusqu\'à la fin du tour.'},
  {id:12,name:'Barbelés',       cats:['murs'],              cost:3, atk:1, hp:4, art:'barbeles',  text:'Les zombies qui attaquent ce mur subissent 1 dégât.'},
  {id:13,name:'Pillard',        cats:['humains'],           cost:2, atk:2, hp:2, art:'pillard',   text:'Quand il élimine un zombie, gagnez 1 ressource.'},
];

/* ================= RENDER ================= */
const state = { cat:'toutes', q:'', selected:1 };
const DEMO_CARDS = CARDS.map(c => ({...c}));
const $ = s => document.querySelector(s);
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const byId = id => CARDS.find(c=>c.id===id);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const RIVETS = [[4.4,2.9],[95.6,2.9],[4.4,55.4],[95.6,55.4],[4.4,96.8],[95.6,96.8]]
  .map(([x,y])=>`<i class="rv" style="left:${x}%;top:${y}%"></i>`).join('');

const cardImage = c => c.img || asset('carte-' + c.art);
function face(c){
  const img = cardImage(c);
  if (img) return `<div class="face img" style="background-image:url('${img}')"></div>`;
  return `<div class="face"><div class="frame"></div>
    <div class="panel art-panel"><div class="inner art">${wrap(ART[c.art] || '', c.id*977, SPLAT_COLOR[c.cats[0]])}</div></div>
    <div class="panel text-panel"><div class="inner"></div></div>${RIVETS}</div>`;
}
function overlays(c, pop=''){
  const tags = c.cats.map(id=>`<span class="tag">${CATEGORIES.find(k=>k.id===id).label}</span>`).join('');
  return `<div class="name ${pop}">${c.name}</div>
    <div class="text ${pop}"><span>${c.text}</span><span class="tags">${tags}</span></div>
    <span class="gem cost ${pop}" style="--d:0ms">${c.cost}</span>
    <span class="gem atk ${pop}" style="--d:120ms">${c.atk}</span>
    <span class="gem hp ${pop}" style="--d:200ms">${c.hp}</span>`;
}

function renderFilters(){
  $('#filters').innerHTML = CATEGORIES.map(c=>{
    const n = c.id==='toutes' ? CARDS.length : CARDS.filter(k=>k.cats.includes(c.id)).length;
    return `<button class="filter ${state.cat===c.id?'active':''}" data-cat="${c.id}">${ICONS[c.id]}<span>${c.label}</span><span class="count">${n}</span></button>`;
  }).join('');
}

function renderGrid(){
  const q = norm(state.q.trim());
  const list = CARDS.filter(c => (state.cat==='toutes'||c.cats.includes(state.cat)) && (!q||norm(c.name+' '+c.text).includes(q)));
  $('#grid').innerHTML = list.length ? list.map((c,i)=>
    `<div class="card mini deal ${state.selected===c.id?'selected':''}" data-id="${c.id}" role="button" tabindex="0" aria-label="${c.name}"
      style="--i:${i};--dx:${(i%3-1)*-60};--rot:${(i%2?1:-1)*(8+i%4*4)}">
      <div class="tilt">${face(c)}${overlays(c)}<div class="glare"></div></div></div>`).join('')
    : '<div class="empty">Aucune carte trouvée</div>';
}

function renderDetail(){
  const c = byId(state.selected);
  if (!c){ $('#detail').innerHTML = '<div class="empty">Aucune carte</div>'; return; }
  $('#detail').innerHTML = `<article class="card detail" aria-live="polite">
    <div class="float"><div class="flipper">
      <div class="tilt"><div class="front">${face(c)}${overlays(c,'pop')}</div><div class="glare"></div></div>
      <div class="back"><div class="frame"></div><div class="panel"><div class="inner"></div></div>
        <div class="sun"></div><div class="emblem">BARRI<b>CARD</b></div>${RIVETS}</div>
    </div></div></article>`;
}

/* ---- flip the big card to show a new one ---- */
let flipping = false, queued = null;
async function showCard(id){
  if (id === state.selected && !queued) return;
  const flipper = $('.flipper');
  if (reduced || !flipper.animate){ state.selected=id; renderDetail(); return; }
  if (flipping){ queued = id; return; }
  flipping = true;
  await flipper.animate(
    [{transform:'rotateY(0) translateZ(0)'},{transform:'rotateY(180deg) translateZ(60px)'}],
    {duration:300,easing:'cubic-bezier(.55,0,.8,.3)',fill:'forwards'}).finished;
  state.selected = id;
  const c = byId(id);
  flipper.querySelector('.front').innerHTML = face(c) + overlays(c,'pop');
  const anim = flipper.animate(
    [{transform:'rotateY(180deg) translateZ(60px)'},{transform:'rotateY(360deg) translateZ(0)'}],
    {duration:520,easing:'cubic-bezier(.15,.9,.3,1.15)',fill:'forwards'});
  await anim.finished; flipper.getAnimations().forEach(a=>a.cancel());
  flipping = false;
  if (queued !== null){ const n = queued; queued = null; if (n !== state.selected) showCard(n); }
}

function select(id, el){
  if (id === state.selected) return;
  document.querySelectorAll('.grid .card.selected').forEach(x=>x.classList.remove('selected'));
  el.classList.add('selected','picked');
  el.addEventListener('animationend', ()=>el.classList.remove('picked'), {once:true});
  showCard(id);
  emit('cardSelected', { id });
  if (matchMedia('(max-width:900px)').matches) $('#detail').scrollIntoView({behavior:'smooth',block:'start'});
}

/* ---- 3D tilt + glare following the mouse ---- */
let hovered = null;
function resetTilt(card){ if(!card) return; card.classList.remove('hovering'); card.style.removeProperty('--rx'); card.style.removeProperty('--ry'); }
document.addEventListener('pointermove', e=>{
  if (e.pointerType !== 'mouse') return;
  const card = e.target.closest('.card');
  if (card !== hovered){ resetTilt(hovered); hovered = card; }
  if (!card) return;
  const r = card.getBoundingClientRect(), px = (e.clientX-r.left)/r.width, py = (e.clientY-r.top)/r.height;
  const max = card.classList.contains('detail') ? 10 : 16;
  card.classList.add('hovering');
  card.style.setProperty('--ry', `${(px-.5)*max}deg`);
  card.style.setProperty('--rx', `${(.5-py)*max}deg`);
  card.style.setProperty('--gx', `${px*100}%`);
  card.style.setProperty('--gy', `${py*100}%`);
});
document.addEventListener('pointerleave', ()=>{ resetTilt(hovered); hovered=null; });

/* ---- events ---- */
$('#filters').addEventListener('click', e=>{
  const b = e.target.closest('.filter'); if(!b || b.dataset.cat===state.cat) return;
  state.cat = b.dataset.cat; renderFilters(); renderGrid();
  emit('filterChanged', { category: state.cat });
});
$('#grid').addEventListener('click', e=>{ const el=e.target.closest('.card'); if(el) select(+el.dataset.id, el); });
$('#grid').addEventListener('keydown', e=>{
  if ((e.key==='Enter'||e.key===' ') && e.target.classList.contains('card')){ e.preventDefault(); e.target.click(); }
});
$('#q').addEventListener('input', e=>{ state.q = e.target.value; renderGrid(); emit('search', { query: state.q }); });
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===t));
  emit('tabChanged', { tab: t.textContent });
}));

/* ================= VISUELS (manifest.json) =================
   manifest.json associe une clé à un fichier de assets/.
   Fichier absent → on affiche son placeholder (assets/placeholders/).
   placeholder = null → le code garde son rendu de secours (dessin actuel). */
const ASSETS = { manifest:{}, ok:{}, forceMissing:false };
const probe = src => new Promise(done => {
  if (!src) return done(false);
  const i = new Image(); i.onload = () => done(true); i.onerror = () => done(false); i.src = src;
});
async function loadAssets(){
  try { ASSETS.manifest = (await (await fetch('manifest.json', {cache:'no-cache'})).json()).assets || {}; }
  catch { ASSETS.manifest = {}; }
  await Promise.all(Object.entries(ASSETS.manifest).map(async ([k, v]) => { ASSETS.ok[k] = await probe(v.file); }));
}
// URL à utiliser pour une clé du manifest ; `fallback` si la clé n'y figure pas.
function asset(key, fallback){
  const e = ASSETS.manifest[key];
  if (!e) return fallback;
  return ASSETS.ok[key] && !ASSETS.forceMissing ? e.file : (e.placeholder || undefined);
}

/* ================= INTÉGRATION AU JEU =================
   Entrée : window.CollectionUI.setData({...})
            ou postMessage({ to:'collection', type:'setData', data:{...} })
   Sortie : événements « collection:<nom> » sur window
            (+ postMessage({ from:'collection', event, detail }) au parent si la page est dans une iframe).
   Détail des données et des événements : README.md. */
const UI_ID = 'collection';
function emit(name, detail = {}){
  window.dispatchEvent(new CustomEvent(`${UI_ID}:${name}`, { detail }));
  if (window.parent !== window) window.parent.postMessage({ from: UI_ID, event: name, detail }, '*');
}
window.addEventListener('message', e => {
  const m = e.data;
  if (m && m.to === UI_ID && m.type === 'setData') setData(m.data);
});

function renderAll(){ renderFilters(); renderGrid(); renderDetail(); }
// data : { cards: [{ id, name, cats, cost, atk, hp, text, art?, img? }] }
function setData(data = {}){
  if (Array.isArray(data.cards)) CARDS.splice(0, CARDS.length, ...data.cards);
  if (!byId(state.selected)) state.selected = CARDS[0] ? CARDS[0].id : null;
  renderAll();
}
window.CollectionUI = { setData, getState: () => ({ ...state, cards: CARDS.length }) };

/* ================= PANNEAU DE TEST (fausses données, hors jeu) ================= */
const TESTS = [
  ['Données de démo', () => setData({ cards: DEMO_CARDS })],
  ['Collection vide', () => setData({ cards: [] })],
  ['Une seule carte', () => setData({ cards: DEMO_CARDS.slice(0, 1) })],
  ['Beaucoup de cartes (39)', () => setData({ cards: [0,1,2].flatMap(n => DEMO_CARDS.map(c => ({ ...c, id: c.id + n*100 }))) })],
  ['Visuels manquants on/off', () => { ASSETS.forceMissing = !ASSETS.forceMissing; renderAll(); }],
];
for (const [label, run] of TESTS){
  const b = document.createElement('button');
  b.type = 'button'; b.textContent = label; b.onclick = run;
  document.getElementById('ui-tests').append(b);
}

loadAssets().then(() => { renderAll(); emit('ready'); });
