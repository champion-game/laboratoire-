/* ================= DATA ================= */
const CATEGORIES = [
  {id:'all',label:'Tous',owned:47,total:120,c:'#c99a3b',s:'✦'},
  {id:'survivants',label:'Survivants',owned:14,total:30,c:'#5f8a3a',s:'S'},
  {id:'combattants',label:'Combattants',owned:12,total:28,c:'#b3261e',s:'C'},
  {id:'lourds',label:'Lourds',owned:8,total:20,c:'#2f5f9a',s:'L'},
  {id:'soutien',label:'Soutien',owned:7,total:18,c:'#d9741f',s:'S'},
  {id:'tourelles',label:'Tourelles',owned:5,total:14,c:'#6b6b66',s:'T'},
  {id:'evenements',label:'Événements',owned:6,total:20,c:'#e0a12a',s:'É'},
];
const RARITY = {'Commune':'#8a8170','Rare':'#2f6fae','Épique':'#7a3f8f','Légendaire':'#d4691c'};
const CARDS = [
  ['spectre','Spectre',['combattants'],0,'Légendaire','Une silhouette dans les cendres. Ses carreaux trouvent leur cible avant que son manteau ne disparaisse dans la brume.',9,4,6],
  ['incendiaire','Incendiaire',['lourds'],1,'Épique','Il avance au rythme des bouteilles qui s’entrechoquent. Une étincelle suffit à dégager le passage.',8,5,5],
  ['bastion','Bastion',['lourds'],2,'Épique','Le dernier rempart de la caravane. Sous le poids de son arme, le sol tremble plus que ses mains.',8,9,7],
  ['insurge','Insurgé',['combattants'],3,'Rare','Un foulard rouge, une bouteille et aucune envie de reculer. Il transforme chaque barricade en ligne de départ.',6,3,3],
  ['eclaireuse','Éclaireuse',['survivants'],4,'Rare','Elle lit les traces que le vent a presque effacées et revient toujours avec une route de plus sur sa carte.',4,4,2],
  ['corbeau','Corbeau',['combattants'],5,'Épique','Perché au-dessus des ruines, il attend le moment exact. On ne voit de lui que le mouvement de son manteau.',9,3,5],
  ['artilleur','Artilleur',['lourds'],6,'Rare','Il connaît la distance jusqu’au prochain abri au bruit de l’écho. Son mortier ouvre la route aux autres.',7,4,4],
  ['sentinelle','Sentinelle',['tourelles'],7,'Rare','Assemblage de métal récupéré et de patience, elle garde le camp bien après que les feux se sont éteints.',6,7,4],
  ['viaduc','Viaduc',['evenements'],8,'Légendaire','Sous le soleil orange, les arches brisées dessinent encore la route du nord. Le passage ne restera pas libre longtemps.',0,8,5],
  ['nomade','Nomade',['survivants'],4,'Commune','Tout ce dont il a besoin tient dans son sac. Chaque halte lui apprend une nouvelle manière de repartir.',3,4,2],
  ['vagabonde','Vagabonde',['combattants'],0,'Rare','Elle ne porte les couleurs d’aucun refuge. Sa loyauté se gagne sur la route, jamais autour d’une table.',6,4,3],
  ['pyromane','Pyromane',['lourds'],1,'Rare','Ses réserves de carburant sont maigres, mais il sait faire durer chaque flamme jusqu’au prochain obstacle.',7,4,4],
  ['decontaminateur','Décontaminateur',['soutien'],1,'Rare','Derrière son masque rayé, il surveille les jauges et prépare une voie sûre à travers les quartiers condamnés.',3,6,3],
  ['veilleur','Veilleur',['combattants'],5,'Commune','Personne ne lui demande depuis combien de nuits il monte la garde. La lumière est toujours allumée à sa fenêtre.',5,5,3],
  ['caravane','Caravane',['evenements'],8,'Rare','Au bout de la piste, des moteurs fatigués annoncent l’arrivée de vivres, de nouvelles et de visages inconnus.',0,5,3],
  ['relais','Relais',['soutien'],7,'Rare','Une vieille antenne suffit parfois à réunir les refuges. Son signal traverse la poussière et réveille les radios.',2,6,3],
  ['boutefeu','Boutefeu',['combattants'],3,'Commune','Toujours le premier debout et le dernier à manquer d’idées. Sa témérité donne du courage à toute l’escouade.',5,3,2],
  ['zone-rouge','Zone rouge',['evenements'],8,'Épique','Les balises grésillent à l’entrée du secteur. Les anciens plans promettent des réserves, mais aucun chemin sans détour.',6,0,4],
  ['maraudeuse','Maraudeuse',['survivants'],4,'Commune','Les entrepôts vides n’ont pas encore livré tous leurs secrets. Elle trouve une dernière réserve là où chacun a renoncé.',3,3,1],
  ['recuperateur','Récupérateur',['survivants'],4,'Commune','Il reconnaît une pièce utile sous trois couches de rouille. Rien ne se perd quand il ferme la marche.',2,4,1],
  ['passeuse','Passeuse',['survivants'],0,'Rare','Elle connaît les tunnels oubliés et les gués silencieux. Ses voyageurs arrivent avant que l’aube les découvre.',4,3,2],
  ['pisteur','Pisteur',['survivants'],4,'Commune','Une empreinte, une branche déplacée, un feu trop récent : le désert lui raconte tout ce qu’il faut savoir.',4,3,2],
  ['medecin','Médecin de fortune',['survivants','soutien'],4,'Rare','Sa trousse tient avec une sangle usée. Au milieu du chaos, ses gestes restent précis et sa voix reste calme.',1,5,3],
  ['messagere','Messagère',['survivants'],3,'Commune','Les lettres des refuges ne pèsent presque rien. Elle sait pourtant combien une seule peut changer la route.',3,2,1],
  ['ferrailleur','Ferrailleur',['survivants','tourelles'],6,'Rare','Il emporte des boulons, des ressorts et quelques idées. Avant la nuit, un tas de débris devient un poste de garde.',4,5,3],
  ['archiviste','Archiviste',['survivants','evenements'],0,'Épique','Elle sauve les cartes, les carnets et les noms. Dans sa sacoche, le monde d’avant indique encore où chercher.',2,4,3],
  ['guetteuse','Guetteuse',['survivants'],4,'Commune','Installée sur un toit effondré, elle repère la poussière des convois bien avant que les moteurs ne se fassent entendre.',3,3,2],
  ['exile','Exilé',['survivants'],0,'Commune','Il ne parle jamais du refuge qu’il a quitté. Ses cartes portent des chemins que personne d’autre n’a empruntés.',4,4,2],
  ['chasseur-cendres','Chasseur de cendres',['survivants'],5,'Rare','Sous les dunes grises, il suit les traces d’un monde encore vivant et revient avec de quoi nourrir le camp.',5,3,3],
  ['mecanicienne','Mécanicienne',['survivants','soutien'],4,'Rare','Elle écoute les moteurs comme d’autres écoutent la pluie. Quelques tours de clé et la caravane peut reprendre sa marche.',2,5,3],
  ['lame-rouge','Lame rouge',['combattants'],3,'Rare','Les ruelles étroites sont son terrain. Un signe de la main suffit à guider son escouade entre deux barricades.',6,4,3],
  ['franc-tireur','Franc-tireur',['combattants'],5,'Rare','Il prend le temps de mesurer le vent. Depuis les hauteurs, il protège chaque pas de ceux qui traversent la place.',7,2,4],
  ['chasseur-primes','Chasseur de primes',['combattants'],0,'Épique','Il collectionne les contrats pliés dans la poche de son manteau. Une piste abandonnée est souvent celle qu’il préfère.',7,4,5],
  ['ecorcheur','Écorcheur',['combattants'],3,'Rare','Ses protections portent les marques de cent passages difficiles. Les portes fermées le ralentissent rarement.',6,5,4],
  ['rodeur','Rôdeur',['combattants'],0,'Commune','Il se déplace d’une ombre à l’autre, toujours à la lisière du camp. Ses avertissements arrivent sans un bruit.',5,3,2],
  ['porte-banniere','Porte-bannière',['combattants','evenements'],3,'Épique','Le tissu rouge se voit au-dessus de la poussière. Tant qu’il flotte, les survivants savent où se retrouver.',5,6,4],
  ['colosse','Colosse',['lourds'],2,'Épique','Ses plaques de métal grincent à chaque pas. Il se place entre le danger et le convoi avec une assurance tranquille.',7,9,6],
  ['brise-mur','Brise-mur',['lourds'],2,'Rare','Un ancien équipement de chantier devenu une armure. Il ouvre les passages que les cartes disent condamnés.',8,7,6],
  ['mortier-mobile','Mortier mobile',['lourds'],6,'Rare','Les roues grincent, le tube tient bon. Son équipe installe un poste de soutien en quelques gestes parfaitement rodés.',8,4,5],
  ['faucheur','Faucheur',['lourds'],2,'Légendaire','Sa vieille mitrailleuse est entretenue comme une relique. Quand il prend position, toute l’escouade gagne du terrain.',10,7,8],
  ['radio','Radio',['soutien'],7,'Commune','Au milieu des parasites, une voix répond enfin. Il relie les patrouilles et garde le refuge à portée de signal.',1,4,2],
  ['sapeur','Sapeur',['soutien'],6,'Rare','Il inspecte les ponts, consolide les abris et marque les passages sûrs. Sa craie blanche vaut toutes les boussoles.',4,6,3],
  ['ravitailleur','Ravitailleur',['soutien'],4,'Commune','Les gourdes sont pleines et les réserves comptées. Sa présence rappelle que chaque expédition doit aussi pouvoir rentrer.',2,4,2],
  ['tourelle-jumelee','Tourelle jumelée',['tourelles'],7,'Épique','Deux canons, un seul axe de surveillance. Ses engrenages récupérés tournent avec une précision inattendue.',8,6,5],
  ['nid-mitrailleuse','Nid de mitrailleuse',['tourelles'],7,'Commune','Quelques sacs de sable et un trépied bien calé. Ce petit poste protège la seule entrée encore praticable du refuge.',5,6,3],
  ['gardienne','Gardienne',['tourelles'],7,'Légendaire','Son voyant rouge veille depuis avant la chute. Personne ne sait qui l’a construite, mais elle reconnaît encore les siens.',8,10,7],
  ['tempete','Tempête de poussière',['evenements'],8,'Rare','L’horizon disparaît sous un ciel de cuivre. Il faut serrer les rangs, couvrir les réserves et attendre que le vent choisisse une autre route.',5,2,3],
].map(([id,name,tags,art,rarity,desc,atk,def,cost])=>({id,name,tags,art,rarity,desc,atk,def,cost}));

/* ================= HELPERS ================= */
const $ = s => document.querySelector(s);
const PER_PAGE = 9;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobileMQ = matchMedia('(max-width:900px)');
const DEMO = { categories: CATEGORIES.map(c => ({...c})), cards: CARDS.map(c => ({...c})) };
const FAV_KEY = 'classeur:favoris';   // clé propre à cette interface
const state = { cat:'all', spread:0 };       // spread = index of what is shown (2 pages on desktop, 1 on mobile)
let favorites = new Set();
try { favorites = new Set(JSON.parse(localStorage.getItem(FAV_KEY)||'[]')); } catch {}

const listFor = cat => cat==='all' ? CARDS : CARDS.filter(c=>c.tags.includes(cat));
const pagesIn = list => Math.max(1, Math.ceil(list.length/PER_PAGE));
const perView = () => mobileMQ.matches ? 1 : 2;
const viewsIn = list => Math.ceil(pagesIn(list)/perView());
const catLabel = id => (CATEGORIES.find(c=>c.id===id) || {label:id}).label;

const RIVETS = [[4.4,2.9],[95.6,2.9],[4.4,55.4],[95.6,55.4],[4.4,96.8],[95.6,96.8]].map(([x,y])=>`<i class="rv" style="left:${x}%;top:${y}%"></i>`).join('');
// Illustration : `img` (URL fournie par le jeu), sinon « carte-<id> » du manifest,
// sinon l'illustration partagée « tm-<art> », sinon son placeholder.
const artSrc = c => c.img || asset('carte-' + c.id) || asset('tm-' + c.art, `assets/tm-${c.art}.webp`);
function cardHTML(c, withText=false){
  return `<div class="face"><div class="frame"></div>
      <div class="panel art-panel"><div class="inner"><img src="${artSrc(c)}" alt="" draggable="false"></div></div>
      <div class="panel text-panel"><div class="inner"></div></div>${RIVETS}</div>
    <div class="name">${c.name}</div>
    ${withText?`<div class="text">${c.desc}</div>`:''}
    <i class="rarity-dot" style="--rc:${RARITY[c.rarity]}"></i>
    <span class="gem cost">${c.cost}</span><span class="gem atk">${c.atk}</span><span class="gem hp">${c.def}</span>`;
}

/* builds one page element; side = 'left' | 'right'; kind 'verso' = blank back of a sheet */
function pageEl(list, index, side, kind){
  const p = document.createElement('div');
  p.className = `page ${side}`;
  if (kind === 'verso'){ p.innerHTML = Array.from({length:9},()=>'<div class="slot empty"></div>').join(''); return p; }
  const pages = pagesIn(list);
  if (index >= pages){
    p.innerHTML = '<div class="end">Fin du classeur<small>Continuez à fouiller les ruines</small></div>';
    return p;
  }
  const cards = list.slice(index*PER_PAGE, index*PER_PAGE+PER_PAGE);
  let html = '';
  for (let i=0;i<PER_PAGE;i++){
    const c = cards[i];
    html += c ? `<div class="slot"><div class="card ${favorites.has(c.id)?'fav':''}" data-id="${c.id}" role="button" tabindex="0" aria-label="${c.name}">${cardHTML(c)}</div></div>`
              : '<div class="slot empty">✦</div>';
  }
  p.innerHTML = html + `<span class="folio">${index+1}</span>`;
  return p;
}

/* ================= STATIC RENDER ================= */
const spread = $('#spread');
function ringsHTML(){
  const n = 4; let h = '<div class="spine-shadow"></div><div class="rings">';
  for (let i=0;i<n;i++) h += `<i class="ring" style="top:calc(${(i+.5)/n*100}% - 11px)"></i>`;
  return h + '</div>';
}
// show given pages (null = nothing on that side)
function showPages(left, right){
  spread.replaceChildren();
  if (left) spread.append(left);
  if (right) spread.append(right);
  spread.insertAdjacentHTML('beforeend', ringsHTML());
}
function render(){
  const list = listFor(state.cat);
  state.spread = Math.min(state.spread, viewsIn(list)-1);
  if (mobileMQ.matches) showPages(null, pageEl(list, state.spread, 'right'));
  else showPages(pageEl(list, state.spread*2, 'left'), pageEl(list, state.spread*2+1, 'right'));
  addPeels();
  updateChrome();
}
function updateChrome(){
  const list = listFor(state.cat), pages = pagesIn(list), views = viewsIn(list);
  $('#pnum').value = mobileMQ.matches ? `Page ${state.spread+1} / ${pages}`
    : `Pages ${state.spread*2+1}–${Math.min(state.spread*2+2, pages)} / ${pages}`;
  document.querySelectorAll('[data-go=first],[data-go=prev]').forEach(b=>b.disabled = state.spread===0);
  document.querySelectorAll('[data-go=next],[data-go=last]').forEach(b=>b.disabled = state.spread>=views-1);
  document.querySelectorAll('[data-cat]').forEach(b=>b.classList.toggle('active', b.dataset.cat===state.cat));
}
function addPeels(){
  const list = listFor(state.cat);
  if (state.spread < viewsIn(list)-1) spread.insertAdjacentHTML('beforeend','<div class="peel r" data-dir="1"></div>');
  if (state.spread > 0 && !mobileMQ.matches) spread.insertAdjacentHTML('beforeend','<div class="peel l" data-dir="-1"></div>');
}

/* ================= PAGE TURN ENGINE =================
   The turning sheet is cut into vertical strips. Each strip is nested in the
   previous one and rotated a little more, so the sheet bends like paper:
   the free edge leads, the part near the rings follows. */
let turn = null;   // active turn
const ease = t => t<.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2;

function beginTurn(dir, target, fromCat = state.cat, toCat = state.cat){
  const mobile = mobileMQ.matches;
  const A = listFor(fromCat), B = listFor(toCat), s = state.spread, t = target;
  // what lies under the sheet, and what is printed on both sides of the sheet
  let left, right, front, back;
  if (mobile){
    if (dir > 0){ right = pageEl(B, t, 'right'); front = () => pageEl(A, s, 'right'); }
    else        { right = pageEl(A, s, 'right'); front = () => pageEl(B, t, 'right'); }
    back = () => pageEl(A, 0, 'left', 'verso');
    left = null;
  } else if (dir > 0){
    left  = pageEl(A, 2*s, 'left');      right = pageEl(B, 2*t+1, 'right');
    front = () => pageEl(A, 2*s+1, 'right'); back = () => pageEl(B, 2*t, 'left');
  } else {
    left  = pageEl(B, 2*t, 'left');      right = pageEl(A, 2*s+1, 'right');
    front = () => pageEl(B, 2*t+1, 'right'); back = () => pageEl(A, 2*s, 'left');
  }
  showPages(left, right);

  const W = spread.querySelector('.page').getBoundingClientRect().width;
  const N = mobile ? 8 : 12, sw = W / N;
  const stage = document.createElement('div'); stage.className = 'stage';
  const castR = document.createElement('div'); castR.className = 'cast r';
  const castL = document.createElement('div'); castL.className = 'cast l';
  const leaf = document.createElement('div'); leaf.className = 'leaf';
  const strips = [];
  let parent = leaf;
  for (let i=0;i<N;i++){
    const strip = document.createElement('div');
    strip.className = 'strip';
    Object.assign(strip.style, { left: i ? `${sw}px` : '0', width: `${sw}px` });
    const f = document.createElement('div'); f.className = 'sface front'; f.style.width = `${sw+1}px`;
    const fp = front(); fp.style.left = `${-i*sw}px`; f.append(fp);
    const fs = document.createElement('div'); fs.className = 'shade'; f.append(fs);
    const b = document.createElement('div'); b.className = 'sface back'; b.style.width = `${sw+1}px`;
    const bp = back(); bp.style.left = `${-(W-(i+1)*sw)-1}px`; b.append(bp);
    const bs = document.createElement('div'); bs.className = 'shade'; b.append(bs);
    strip.append(f, b); parent.append(strip); parent = strip;
    strips.push({ el:strip, fs, bs });
  }
  stage.append(castR, castL, leaf);
  spread.append(stage);
  spread.querySelectorAll('.peel').forEach(p=>p.remove());
  turn = { dir, target, toCat, stage, strips, castR, castL, W, sw, N, p: dir>0 ? 0 : 1, raf:0 };
  setProgress(turn.p);
  return turn;
}

// p = 0: sheet lies on the right. p = 1: sheet lies on the left.
function setProgress(p){
  const T = turn; T.p = p;
  const spine = -180 * Math.pow(p, 1.5);                 // part held by the rings lags behind
  const edge  = -180 * (1 - Math.pow(1 - p, 1.5));       // free edge leads
  let prev = 0, x = 0;
  for (let i=0;i<T.N;i++){
    const k = Math.pow(i/(T.N-1), 1.35);
    const a = spine + (edge - spine) * k;                // absolute angle of this strip
    const s = T.strips[i];
    s.el.style.transform = `rotateY(${(a - prev).toFixed(3)}deg)`;
    prev = a;
    const r = a * Math.PI / 180, c = Math.cos(r);
    s.fs.style.opacity = (0.5 * (1 - c) * 0.9).toFixed(3);   // darker as it turns away from the light
    s.bs.style.opacity = (0.5 * (1 + c) * 0.9).toFixed(3);
    x += T.sw * c;                                        // projected position of the free edge
  }
  // soft shadow the sheet casts on the page beneath it
  const strength = Math.sin(Math.PI * p) * 0.55;
  if (x > 0){
    const e = (x / T.W) * 100;
    T.castR.style.opacity = 1; T.castL.style.opacity = 0;
    T.castR.style.background = `linear-gradient(90deg, rgba(20,10,2,${strength}) 0%, rgba(20,10,2,${strength*.8}) ${e}%, transparent ${Math.min(100,e+18)}%)`;
  } else {
    const e = 100 + (x / T.W) * 100;
    T.castL.style.opacity = 1; T.castR.style.opacity = 0;
    T.castL.style.background = `linear-gradient(90deg, transparent ${Math.max(0,e-18)}%, rgba(20,10,2,${strength*.8}) ${e}%, rgba(20,10,2,${strength}) 100%)`;
  }
}

function animateTo(to, duration){
  return new Promise(res=>{
    const T = turn, from = T.p, t0 = performance.now();
    cancelAnimationFrame(T.raf);
    if (reduced) duration = 1;
    const tick = now => {
      const k = Math.min(1, (now - t0) / duration);
      setProgress(from + (to - from) * ease(k));
      if (k < 1) T.raf = requestAnimationFrame(tick); else res();
    };
    T.raf = requestAnimationFrame(tick);
  });
}

async function finishTurn(commit){
  const T = turn; if (!T) return;
  const goal = commit ? (T.dir>0 ? 1 : 0) : (T.dir>0 ? 0 : 1);
  await animateTo(goal, 260 + 620 * Math.abs(goal - T.p));
  const changed = commit && (state.spread !== T.target || state.cat !== T.toCat);
  if (commit){ state.spread = T.target; state.cat = T.toCat; }
  turn = null;
  render();
  if (changed) emit('pageChanged', { page: state.spread, category: state.cat });
}

async function goTo(target, toCat = state.cat){
  if (turn) return;
  const dir = (toCat !== state.cat) ? 1 : Math.sign(target - state.spread);
  if (!dir) return;
  beginTurn(dir, target, state.cat, toCat);
  await finishTurn(true);
}

/* ================= DRAG TO TURN ================= */
let drag = null, swallowClick = false;
spread.addEventListener('pointerdown', e=>{
  if (e.button !== 0) return;
  if (turn && !turn.peek) return;
  drag = { x:e.clientX, y:e.clientY, t:performance.now(), id:e.pointerId, side: e.target.closest('.page.left') || e.target.closest('.peel.l') ? -1 : 1, started:false, vx:0, lx:e.clientX, lt:performance.now() };
});
window.addEventListener('pointermove', e=>{
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  const now = performance.now();
  drag.vx = (e.clientX - drag.lx) / Math.max(1, now - drag.lt); drag.lx = e.clientX; drag.lt = now;
  if (!drag.started){
    if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy)) { if (Math.abs(dy) > 12) drag = null; return; }
    const list = listFor(state.cat), mobile = mobileMQ.matches;
    let dir = 0;
    if (mobile) dir = dx < 0 ? 1 : -1;
    else if (drag.side > 0 && dx < 0) dir = 1;
    else if (drag.side < 0 && dx > 0) dir = -1;
    const target = state.spread + dir;
    if (!dir || target < 0 || target >= viewsIn(list)) { drag = null; return; }
    if (turn && turn.peek && turn.dir === dir){ cancelAnimationFrame(turn.raf); turn.peek = false; }
    else { if (turn) { turn = null; render(); } beginTurn(dir, target); }
    drag.started = true; drag.p0 = turn.p; drag.dir = dir;
    try { spread.setPointerCapture(e.pointerId); } catch {}
  }
  const dist = mobileMQ.matches ? turn.W * 0.95 : turn.W * 1.6;
  const p = drag.dir > 0 ? drag.p0 - dx / dist : drag.p0 - dx / dist;
  setProgress(Math.min(1, Math.max(0, p)));
});
function endDrag(e){
  if (!drag || e.pointerId !== drag.id) return;
  const d = drag; drag = null;
  if (!d.started) return;
  swallowClick = true; setTimeout(()=>swallowClick=false, 50);
  const p = turn.p, fling = d.vx * (d.dir > 0 ? -1 : 1) > 0.45;
  const commit = d.dir > 0 ? (p > .35 || fling) : (p < .65 || fling);
  finishTurn(commit);
}
window.addEventListener('pointerup', endDrag);
window.addEventListener('pointercancel', endDrag);

/* lift the corner a little when the mouse hovers it */
spread.addEventListener('pointerover', e=>{
  const peel = e.target.closest('.peel');
  if (!peel || turn || drag || e.pointerType !== 'mouse') return;
  const dir = +peel.dataset.dir;
  beginTurn(dir, state.spread + dir);
  turn.peek = true;
  animateTo(dir > 0 ? .07 : .93, 350);
});
spread.addEventListener('pointerout', e=>{
  if (!turn || !turn.peek || drag) return;
  if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.peel')) return;
  const T = turn;
  animateTo(T.dir > 0 ? 0 : 1, 300).then(()=>{ if (turn === T && T.peek){ turn = null; render(); } });
});
spread.addEventListener('click', e=>{
  if (swallowClick) { e.stopPropagation(); return; }
  if (turn && turn.peek){ turn.peek = false; finishTurn(true); return; }
  const card = e.target.closest('.card'); if (card) openCard(card.dataset.id, card);
}, true);

/* ================= DETAIL (card flies out of its pocket) ================= */
const modal = $('#modal'), big = $('#big'), info = $('#info');
let current = null, originEl = null;
function fillDetail(c){
  current = c;
  big.innerHTML = cardHTML(c, true);
  big.classList.toggle('fav', favorites.has(c.id));
  $('#d-cat').textContent = c.tags.map(catLabel).join(' / ');
  $('#d-name').textContent = c.name;
  $('#d-rar').textContent = c.rarity; $('#d-rar').style.setProperty('--rc', RARITY[c.rarity]);
  $('#d-desc').textContent = c.desc;
  $('#d-atk').textContent = c.atk; $('#d-def').textContent = c.def; $('#d-cost').textContent = c.cost;
  const fav = favorites.has(c.id);
  $('#fav').setAttribute('aria-pressed', fav); $('#fav').textContent = fav ? '★ Carte favorite' : '☆ Marquer comme favorite';
  const list = listFor(state.cat), i = list.indexOf(c);
  $('#d-idx').textContent = `${i+1} / ${list.length}`;
  $('#d-prev').disabled = i <= 0; $('#d-next').disabled = i >= list.length-1;
}
function flyFrom(el, reverse=false){
  if (reduced || !el) return Promise.resolve();
  const a = el.getBoundingClientRect(), b = big.getBoundingClientRect();
  const from = `translate(${a.left-b.left}px,${a.top-b.top}px) scale(${a.width/b.width}) rotate(-4deg)`;
  const frames = [{transform:from},{transform:'translate(0,-30px) scale(1.04) rotate(2deg)',offset:.6},{transform:'none'}];
  return big.animate(reverse ? frames.reverse() : frames, {duration: reverse ? 380 : 620, easing:'cubic-bezier(.2,.8,.2,1)'}).finished;
}
function openCard(id, el){
  const c = CARDS.find(k=>k.id===id);
  fillDetail(c); originEl = el;
  modal.classList.add('open');
  info.classList.remove('in'); void info.offsetWidth; info.classList.add('in');
  if (el) el.style.visibility = 'hidden';
  flyFrom(el);
  $('#close').focus({preventScroll:true});
  emit('cardOpened', { id });
}
async function closeCard(){
  if (!modal.classList.contains('open')) return;
  const el = originEl && document.contains(originEl) && current && originEl.dataset.id === current.id ? originEl : null;
  info.classList.remove('in');
  await flyFrom(el, true).catch(()=>{});
  modal.classList.remove('open');
  if (originEl) originEl.style.visibility = '';
  originEl = null;
  emit('cardClosed');
}
function step(o){
  const list = listFor(state.cat), i = list.indexOf(current), c = list[i+o]; if (!c) return;
  if (originEl) originEl.style.visibility = '';
  originEl = spread.querySelector(`.card[data-id="${c.id}"]`);
  if (originEl) originEl.style.visibility = 'hidden';
  fillDetail(c);
  emit('cardOpened', { id: c.id });
  if (!reduced) big.animate([{transform:`translateX(${o*40}px) rotateY(${o*-25}deg)`,opacity:0},{transform:'none',opacity:1}],{duration:320,easing:'ease-out'});
}
$('#close').onclick = closeCard;
modal.addEventListener('click', e=>{ if (e.target === modal) closeCard(); });
$('#d-prev').onclick = ()=>step(-1); $('#d-next').onclick = ()=>step(1);
$('#fav').onclick = ()=>{
  favorites.has(current.id) ? favorites.delete(current.id) : favorites.add(current.id);
  try { localStorage.setItem(FAV_KEY, JSON.stringify([...favorites])); } catch {}
  fillDetail(current);
  emit('favoriteToggled', { id: current.id, favorite: favorites.has(current.id) });
  spread.querySelectorAll(`.card[data-id="${current.id}"]`).forEach(k=>k.classList.toggle('fav', favorites.has(current.id)));
};

/* ================= CONTROLS ================= */
function buildCategories(){
  $('#filters').innerHTML = CATEGORIES.map(c=>`<button class="filter" data-cat="${c.id}" style="--c:${c.c}"><i></i><span>${c.label}</span><span class="count">${c.owned}/${c.total}</span></button>`).join('');
  $('#edge-tabs').innerHTML = CATEGORIES.map(c=>`<button class="edge-tab" data-cat="${c.id}" style="--c:${c.c}" aria-label="${c.label}"><span>${c.s}</span></button>`).join('');
  document.querySelectorAll('[data-cat]').forEach(b=>b.addEventListener('click', ()=>{
    if (b.dataset.cat === state.cat || turn) return;
    goTo(0, b.dataset.cat);
  }));
  const all = CATEGORIES.find(c=>c.id==='all');
  if (all){
    $('#progress strong').textContent = `${all.owned} / ${all.total}`;
    $('#progress .bar b').style.width = `${all.total ? Math.round(all.owned/all.total*100) : 0}%`;
  }
}
buildCategories();
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click', ()=>{
  const views = viewsIn(listFor(state.cat));
  const t = {first:0, prev:state.spread-1, next:state.spread+1, last:views-1}[b.dataset.go];
  if (t >= 0 && t < views) goTo(t);
}));
document.addEventListener('keydown', e=>{
  if (modal.classList.contains('open')){
    if (e.key === 'Escape') closeCard();
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
    return;
  }
  if (e.key === 'ArrowRight') $('[data-go=next]').click();
  if (e.key === 'ArrowLeft') $('[data-go=prev]').click();
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')){ e.preventDefault(); openCard(e.target.dataset.id, e.target); }
});
mobileMQ.addEventListener('change', ()=>{ if (turn){ cancelAnimationFrame(turn.raf); turn = null; } state.spread = 0; render(); });
if (mobileMQ.matches) $('#hint').textContent = 'Fais glisser la page pour la tourner';

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
   Entrée : window.ClasseurUI.setData({...})
            ou postMessage({ to:'classeur', type:'setData', data:{...} })
   Sortie : événements « classeur:<nom> » sur window
            (+ postMessage({ from:'classeur', event, detail }) au parent si la page est dans une iframe).
   Détail des données et des événements : README.md. */
const UI_ID = 'classeur';
function emit(name, detail = {}){
  window.dispatchEvent(new CustomEvent(`${UI_ID}:${name}`, { detail }));
  if (window.parent !== window) window.parent.postMessage({ from: UI_ID, event: name, detail }, '*');
}
window.addEventListener('message', e => {
  const m = e.data;
  if (m && m.to === UI_ID && m.type === 'setData') setData(m.data);
});

// data : { cards: [{ id, name, tags, art, rarity, desc, atk, def, cost, img? }],
//          categories?: [{ id, label, owned, total, c, s }], favorites?: [id] }
function setData(data = {}){
  if (turn){ cancelAnimationFrame(turn.raf); turn = null; }
  if (modal.classList.contains('open')){ modal.classList.remove('open'); originEl = null; }
  if (Array.isArray(data.categories)){ CATEGORIES.splice(0, CATEGORIES.length, ...data.categories); buildCategories(); }
  if (Array.isArray(data.cards)) CARDS.splice(0, CARDS.length, ...data.cards);
  if (Array.isArray(data.favorites)) favorites = new Set(data.favorites);
  if (!CATEGORIES.some(c => c.id === state.cat)) state.cat = 'all';
  state.spread = 0;
  render();
}
window.ClasseurUI = { setData, getState: () => ({ ...state, cards: CARDS.length, favorites: [...favorites] }) };

/* ================= PANNEAU DE TEST (fausses données, hors jeu) ================= */
const TESTS = [
  ['Données de démo', () => setData(DEMO)],
  ['Classeur vide', () => setData({ cards: [], categories: DEMO.categories.map(c => ({ ...c, owned: 0 })) })],
  ['Une seule page (5 cartes)', () => setData({ cards: DEMO.cards.slice(0, 5) })],
  ['Toutes favorites', () => setData({ favorites: CARDS.map(c => c.id) })],
  ['Aucune favorite', () => setData({ favorites: [] })],
  ['Visuels manquants on/off', () => { ASSETS.forceMissing = !ASSETS.forceMissing; render(); }],
];
for (const [label, run] of TESTS){
  const b = document.createElement('button');
  b.type = 'button'; b.textContent = label; b.onclick = run;
  document.getElementById('ui-tests').append(b);
}

loadAssets().then(() => { render(); emit('ready'); });
