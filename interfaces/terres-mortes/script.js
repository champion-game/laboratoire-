const CATEGORIES = [
  { id: 'all', label: 'Tous', owned: 47, total: 120 },
  { id: 'survivants', label: 'Survivants', owned: 14, total: 30 },
  { id: 'combattants', label: 'Combattants', owned: 12, total: 28 },
  { id: 'lourds', label: 'Lourds', owned: 8, total: 20 },
  { id: 'soutien', label: 'Soutien', owned: 7, total: 18 },
  { id: 'tourelles', label: 'Tourelles', owned: 5, total: 14 },
  { id: 'evenements', label: 'Événements', owned: 6, total: 20 },
];

const ART = [
  { x: 345, y: 63, w: 150, h: 195 },
  { x: 503, y: 66, w: 137, h: 193 },
  { x: 648, y: 66, w: 135, h: 193 },
  { x: 345, y: 265, w: 150, h: 179 },
  { x: 503, y: 265, w: 137, h: 179 },
  { x: 648, y: 265, w: 135, h: 179 },
  { x: 345, y: 449, w: 150, h: 178 },
  { x: 503, y: 449, w: 137, h: 178 },
  { x: 648, y: 449, w: 135, h: 178 },
];

const CARDS = [
  { id: 'spectre', name: 'Spectre', tags: ['combattants'], art: 0, rarity: 'Légendaire', description: 'Une silhouette dans les cendres. Ses carreaux trouvent leur cible avant que son manteau ne disparaisse dans la brume.', power: 9, defense: 4, cost: 6 },
  { id: 'incendiaire', name: 'Incendiaire', tags: ['lourds'], art: 1, rarity: 'Épique', description: 'Il avance au rythme des bouteilles qui s’entrechoquent. Une étincelle suffit à dégager le passage.', power: 8, defense: 5, cost: 5 },
  { id: 'bastion', name: 'Bastion', tags: ['lourds'], art: 2, rarity: 'Épique', description: 'Le dernier rempart de la caravane. Sous le poids de son arme, le sol tremble plus que ses mains.', power: 8, defense: 9, cost: 7 },
  { id: 'insurge', name: 'Insurgé', tags: ['combattants'], art: 3, rarity: 'Rare', description: 'Un foulard rouge, une bouteille et aucune envie de reculer. Il transforme chaque barricade en ligne de départ.', power: 6, defense: 3, cost: 3 },
  { id: 'eclaireuse', name: 'Éclaireuse', tags: ['survivants'], art: 4, rarity: 'Rare', description: 'Elle lit les traces que le vent a presque effacées et revient toujours avec une route de plus sur sa carte.', power: 4, defense: 4, cost: 2 },
  { id: 'corbeau', name: 'Corbeau', tags: ['combattants'], art: 5, rarity: 'Épique', description: 'Perché au-dessus des ruines, il attend le moment exact. On ne voit de lui que le mouvement de son manteau.', power: 9, defense: 3, cost: 5 },
  { id: 'artilleur', name: 'Artilleur', tags: ['lourds'], art: 6, rarity: 'Rare', description: 'Il connaît la distance jusqu’au prochain abri au bruit de l’écho. Son mortier ouvre la route aux autres.', power: 7, defense: 4, cost: 4 },
  { id: 'sentinelle', name: 'Sentinelle', tags: ['tourelles'], art: 7, rarity: 'Rare', description: 'Assemblage de métal récupéré et de patience, elle garde le camp bien après que les feux se sont éteints.', power: 6, defense: 7, cost: 4 },
  { id: 'viaduc', name: 'Viaduc', tags: ['evenements'], art: 8, rarity: 'Légendaire', description: 'Sous le soleil orange, les arches brisées dessinent encore la route du nord. Le passage ne restera pas libre longtemps.', power: 0, defense: 8, cost: 5 },
  { id: 'nomade', name: 'Nomade', tags: ['survivants'], art: 4, rarity: 'Commune', description: 'Tout ce dont il a besoin tient dans son sac. Chaque halte lui apprend une nouvelle manière de repartir.', power: 3, defense: 4, cost: 2 },
  { id: 'vagabonde', name: 'Vagabonde', tags: ['combattants'], art: 0, rarity: 'Rare', description: 'Elle ne porte les couleurs d’aucun refuge. Sa loyauté se gagne sur la route, jamais autour d’une table.', power: 6, defense: 4, cost: 3 },
  { id: 'pyromane', name: 'Pyromane', tags: ['lourds'], art: 1, rarity: 'Rare', description: 'Ses réserves de carburant sont maigres, mais il sait faire durer chaque flamme jusqu’au prochain obstacle.', power: 7, defense: 4, cost: 4 },
  { id: 'decontaminateur', name: 'Décontaminateur', tags: ['soutien'], art: 1, rarity: 'Rare', description: 'Derrière son masque rayé, il surveille les jauges et prépare une voie sûre à travers les quartiers condamnés.', power: 3, defense: 6, cost: 3 },
  { id: 'veilleur', name: 'Veilleur', tags: ['combattants'], art: 5, rarity: 'Commune', description: 'Personne ne lui demande depuis combien de nuits il monte la garde. La lumière est toujours allumée à sa fenêtre.', power: 5, defense: 5, cost: 3 },
  { id: 'caravane', name: 'Caravane', tags: ['evenements'], art: 8, rarity: 'Rare', description: 'Au bout de la piste, des moteurs fatigués annoncent l’arrivée de vivres, de nouvelles et de visages inconnus.', power: 0, defense: 5, cost: 3 },
  { id: 'relais', name: 'Relais', tags: ['soutien'], art: 7, rarity: 'Rare', description: 'Une vieille antenne suffit parfois à réunir les refuges. Son signal traverse la poussière et réveille les radios.', power: 2, defense: 6, cost: 3 },
  { id: 'boutefeu', name: 'Boutefeu', tags: ['combattants'], art: 3, rarity: 'Commune', description: 'Toujours le premier debout et le dernier à manquer d’idées. Sa témérité donne du courage à toute l’escouade.', power: 5, defense: 3, cost: 2 },
  { id: 'zone-rouge', name: 'Zone rouge', tags: ['evenements'], art: 8, rarity: 'Épique', description: 'Les balises grésillent à l’entrée du secteur. Les anciens plans promettent des réserves, mais aucun chemin sans détour.', power: 6, defense: 0, cost: 4 },
  { id: 'maraudeuse', name: 'Maraudeuse', tags: ['survivants'], art: 4, rarity: 'Commune', description: 'Les entrepôts vides n’ont pas encore livré tous leurs secrets. Elle trouve une dernière réserve là où chacun a renoncé.', power: 3, defense: 3, cost: 1 },
  { id: 'recuperateur', name: 'Récupérateur', tags: ['survivants'], art: 4, rarity: 'Commune', description: 'Il reconnaît une pièce utile sous trois couches de rouille. Rien ne se perd quand il ferme la marche.', power: 2, defense: 4, cost: 1 },
  { id: 'passeuse', name: 'Passeuse', tags: ['survivants'], art: 0, rarity: 'Rare', description: 'Elle connaît les tunnels oubliés et les gués silencieux. Ses voyageurs arrivent avant que l’aube les découvre.', power: 4, defense: 3, cost: 2 },
  { id: 'pisteur', name: 'Pisteur', tags: ['survivants'], art: 4, rarity: 'Commune', description: 'Une empreinte, une branche déplacée, un feu trop récent : le désert lui raconte tout ce qu’il faut savoir.', power: 4, defense: 3, cost: 2 },
  { id: 'medecin-de-fortune', name: 'Médecin de fortune', tags: ['survivants', 'soutien'], art: 4, rarity: 'Rare', description: 'Sa trousse tient avec une sangle usée. Au milieu du chaos, ses gestes restent précis et sa voix reste calme.', power: 1, defense: 5, cost: 3 },
  { id: 'messagere', name: 'Messagère', tags: ['survivants'], art: 3, rarity: 'Commune', description: 'Les lettres des refuges ne pèsent presque rien. Elle sait pourtant combien une seule peut changer la route.', power: 3, defense: 2, cost: 1 },
  { id: 'ferrailleur', name: 'Ferrailleur', tags: ['survivants', 'tourelles'], art: 6, rarity: 'Rare', description: 'Il emporte des boulons, des ressorts et quelques idées. Avant la nuit, un tas de débris devient un poste de garde.', power: 4, defense: 5, cost: 3 },
  { id: 'archiviste', name: 'Archiviste', tags: ['survivants', 'evenements'], art: 0, rarity: 'Épique', description: 'Elle sauve les cartes, les carnets et les noms. Dans sa sacoche, le monde d’avant indique encore où chercher.', power: 2, defense: 4, cost: 3 },
  { id: 'guetteuse', name: 'Guetteuse', tags: ['survivants'], art: 4, rarity: 'Commune', description: 'Installée sur un toit effondré, elle repère la poussière des convois bien avant que les moteurs ne se fassent entendre.', power: 3, defense: 3, cost: 2 },
  { id: 'exile', name: 'Exilé', tags: ['survivants'], art: 0, rarity: 'Commune', description: 'Il ne parle jamais du refuge qu’il a quitté. Ses cartes portent des chemins que personne d’autre n’a empruntés.', power: 4, defense: 4, cost: 2 },
  { id: 'chasseur-de-cendres', name: 'Chasseur de cendres', tags: ['survivants'], art: 5, rarity: 'Rare', description: 'Sous les dunes grises, il suit les traces d’un monde encore vivant et revient avec de quoi nourrir le camp.', power: 5, defense: 3, cost: 3 },
  { id: 'mecanicienne', name: 'Mécanicienne', tags: ['survivants', 'soutien'], art: 4, rarity: 'Rare', description: 'Elle écoute les moteurs comme d’autres écoutent la pluie. Quelques tours de clé et la caravane peut reprendre sa marche.', power: 2, defense: 5, cost: 3 },
  { id: 'lame-rouge', name: 'Lame rouge', tags: ['combattants'], art: 3, rarity: 'Rare', description: 'Les ruelles étroites sont son terrain. Un signe de la main suffit à guider son escouade entre deux barricades.', power: 6, defense: 4, cost: 3 },
  { id: 'franc-tireur', name: 'Franc-tireur', tags: ['combattants'], art: 5, rarity: 'Rare', description: 'Il prend le temps de mesurer le vent. Depuis les hauteurs, il protège chaque pas de ceux qui traversent la place.', power: 7, defense: 2, cost: 4 },
  { id: 'chasseur-de-primes', name: 'Chasseur de primes', tags: ['combattants'], art: 0, rarity: 'Épique', description: 'Il collectionne les contrats pliés dans la poche de son manteau. Une piste abandonnée est souvent celle qu’il préfère.', power: 7, defense: 4, cost: 5 },
  { id: 'ecorcheur', name: 'Écorcheur', tags: ['combattants'], art: 3, rarity: 'Rare', description: 'Ses protections portent les marques de cent passages difficiles. Les portes fermées le ralentissent rarement.', power: 6, defense: 5, cost: 4 },
  { id: 'rodeur', name: 'Rôdeur', tags: ['combattants'], art: 0, rarity: 'Commune', description: 'Il se déplace d’une ombre à l’autre, toujours à la lisière du camp. Ses avertissements arrivent sans un bruit.', power: 5, defense: 3, cost: 2 },
  { id: 'porte-banniere', name: 'Porte-bannière', tags: ['combattants', 'evenements'], art: 3, rarity: 'Épique', description: 'Le tissu rouge se voit au-dessus de la poussière. Tant qu’il flotte, les survivants savent où se retrouver.', power: 5, defense: 6, cost: 4 },
  { id: 'colosse', name: 'Colosse', tags: ['lourds'], art: 2, rarity: 'Épique', description: 'Ses plaques de métal grincent à chaque pas. Il se place entre le danger et le convoi avec une assurance tranquille.', power: 7, defense: 9, cost: 6 },
  { id: 'brise-mur', name: 'Brise-mur', tags: ['lourds'], art: 2, rarity: 'Rare', description: 'Un ancien équipement de chantier devenu une armure. Il ouvre les passages que les cartes disent condamnés.', power: 8, defense: 7, cost: 6 },
  { id: 'mortier-mobile', name: 'Mortier mobile', tags: ['lourds'], art: 6, rarity: 'Rare', description: 'Les roues grincent, le tube tient bon. Son équipe installe un poste de soutien en quelques gestes parfaitement rodés.', power: 8, defense: 4, cost: 5 },
  { id: 'faucheur', name: 'Faucheur', tags: ['lourds'], art: 2, rarity: 'Légendaire', description: 'Sa vieille mitrailleuse est entretenue comme une relique. Quand il prend position, toute l’escouade gagne du terrain.', power: 10, defense: 7, cost: 8 },
  { id: 'radio', name: 'Radio', tags: ['soutien'], art: 7, rarity: 'Commune', description: 'Au milieu des parasites, une voix répond enfin. Il relie les patrouilles et garde le refuge à portée de signal.', power: 1, defense: 4, cost: 2 },
  { id: 'sapeur', name: 'Sapeur', tags: ['soutien'], art: 6, rarity: 'Rare', description: 'Il inspecte les ponts, consolide les abris et marque les passages sûrs. Sa craie blanche vaut toutes les boussoles.', power: 4, defense: 6, cost: 3 },
  { id: 'ravitailleur', name: 'Ravitailleur', tags: ['soutien'], art: 4, rarity: 'Commune', description: 'Les gourdes sont pleines et les réserves comptées. Sa présence rappelle que chaque expédition doit aussi pouvoir rentrer.', power: 2, defense: 4, cost: 2 },
  { id: 'tourelle-jumelee', name: 'Tourelle jumelée', tags: ['tourelles'], art: 7, rarity: 'Épique', description: 'Deux canons, un seul axe de surveillance. Ses engrenages récupérés tournent avec une précision inattendue.', power: 8, defense: 6, cost: 5 },
  { id: 'nid-de-mitrailleuse', name: 'Nid de mitrailleuse', tags: ['tourelles'], art: 7, rarity: 'Commune', description: 'Quelques sacs de sable et un trépied bien calé. Ce petit poste protège la seule entrée encore praticable du refuge.', power: 5, defense: 6, cost: 3 },
  { id: 'gardienne', name: 'Gardienne', tags: ['tourelles'], art: 7, rarity: 'Légendaire', description: 'Son voyant rouge veille depuis avant la chute. Personne ne sait qui l’a construite, mais elle reconnaît encore les siens.', power: 8, defense: 10, cost: 7 },
  { id: 'tempete-de-poussiere', name: 'Tempête de poussière', tags: ['evenements'], art: 8, rarity: 'Rare', description: 'L’horizon disparaît sous un ciel de cuivre. Il faut serrer les rangs, couvrir les réserves et attendre que le vent choisisse une autre route.', power: 5, defense: 2, cost: 3 },
];

// A physical sheet turns around the binder spine. The page underneath remains
// visible until the new recto/verso has reached its final position.
function startPageTurn({ board, grid, direction, oldPage, oldPreview, nextPage, nextPreview, rects, makeArt, commit }) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = window.matchMedia('(max-width: 700px) and (orientation: portrait)').matches;
  let cancelled = false;
  let committed = false;
  let cleaned = false;
  let layer;
  let gridHeight;
  const animations = [];
  const restore = [];
  const applyPage = () => { if (!cancelled && !committed) { committed = true; commit(); } };
  const play = (element, frames, options) => {
    const animation = element.animate(frames, options);
    animations.push(animation);
    return animation.finished.catch(() => {});
  };
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    for (const animation of animations) animation.cancel();
    layer?.remove();
    if (gridHeight !== undefined) grid.style.minHeight = gridHeight;
    for (const reset of restore) reset();
    board.classList.remove('page-is-turning');
    board.removeAttribute('aria-busy');
    grid.removeAttribute('aria-busy');
  };
  const makePaper = (cards, side = 'left') => {
    const paper = document.createElement('div');
    paper.className = 'turn-paper';
    // Right page: drawn 500px wide, then squeezed to 392px by the leaf's scaleX(.784).
    const k = side === 'right' ? 500 / 392 : 1, ox = side === 'right' ? 830 : 330;
    if (side === 'right') paper.style.background = `var(--reference-image) ${-830*k}px -35px/${1280*k}px 720px no-repeat`;
    (side === 'right' ? rightRects : rects).forEach(([x,y,w,h],i) => {
      const card = document.createElement('div');
      card.className = 'turn-paper-card';
      Object.assign(card.style, { left:`${(x-ox)*k}px`, top:`${y-35}px`, width:`${w*k}px`, height:`${h}px` });
      if (cards[i]) card.append(makeArt(cards[i].art,w*k,h));
      else { card.classList.add('turn-paper-empty'); card.textContent='✦'; }
      paper.append(card);
    });
    return paper;
  };
  const finished = (async () => {
    try {
      if (reduceMotion || typeof board.animate !== 'function') { applyPage(); return; }
      board.setAttribute('aria-busy','true');
      board.classList.add('page-is-turning');
      layer = document.createElement('div');
      layer.setAttribute('aria-hidden','true');
      layer.inert = true;
      if (mobile) {
        // Animate the grid the reader is actually looking at, including on phones.
        grid.setAttribute('aria-busy','true');
        const bounds = grid.getBoundingClientRect();
        gridHeight = grid.style.minHeight;
        grid.style.minHeight = `${bounds.height}px`;
        layer.className = 'mobile-turn-stage';
        layer.style.left = `${grid.offsetLeft}px`;
        layer.style.top = `${grid.offsetTop}px`;
        layer.style.width = `${bounds.width}px`;
        layer.style.height = `${bounds.height}px`;
        const old = grid.cloneNode(true);
        old.removeAttribute('id');
        old.removeAttribute('aria-busy');
        old.className = 'mobile-grid mobile-turn-sheet';
        old.style.transformOrigin = direction > 0 ? 'left center' : 'right center';
        old.querySelectorAll('button').forEach(button => button.tabIndex=-1);
        layer.append(old);
        grid.parentElement.append(layer);
        applyPage();
        const previousOrigin = grid.style.transformOrigin;
        grid.style.transformOrigin = direction > 0 ? 'right center' : 'left center';
        restore.push(() => { grid.style.transformOrigin = previousOrigin; });
        await Promise.all([
          play(old,[{transform:'rotateY(0deg)',opacity:1},{transform:`rotateY(${-direction*52}deg)`,opacity:1,offset:.55},{transform:`rotateY(${-direction*105}deg)`,opacity:0}],{duration:700,easing:'cubic-bezier(.32,.02,.18,1)',fill:'forwards'}),
          play(grid,[{transform:`perspective(1400px) rotateY(${direction*17}deg)`,opacity:.15},{transform:'perspective(1400px) rotateY(0deg)',opacity:1}],{duration:700,easing:'ease-out',fill:'both'})
        ]);
      } else {
        layer.className = 'page-turn-stage';
        const underneath=document.createElement('div');
        underneath.className=`turn-underneath ${direction>0?'underneath-right':'underneath-left'}`;
        underneath.append(direction>0?makePaper(nextPreview,'right'):makePaper(nextPage));
        const leaf=document.createElement('div');
        leaf.className='turn-leaf';
        const front=document.createElement('div');
        front.className='turn-face turn-front';
        front.append(makePaper(direction>0?oldPreview:nextPreview,'right'));
        const back=document.createElement('div');
        back.className='turn-face turn-back';
        back.append(makePaper(direction>0?nextPage:oldPage));
        const frontShade=document.createElement('div');
        frontShade.className='turn-face-shade';
        const backShade=frontShade.cloneNode();
        front.append(frontShade);back.append(backShade);
        leaf.append(front,back);
        const shadow=document.createElement('div');
        shadow.className='turn-cast-shadow';
        layer.append(underneath,shadow,leaf);
        board.append(layer);
        const right='rotateY(0deg) scaleX(.784)';
        const left='rotateY(-180deg) scaleX(1)';
        leaf.style.transform=direction>0?right:left;
        const options={duration:880,easing:'cubic-bezier(.32,.02,.18,1)',fill:'forwards'};
        play(frontShade,[{opacity:direction>0?0:.5},{opacity:.58,offset:.5},{opacity:direction>0?.6:0}],options);
        play(backShade,[{opacity:direction>0?.6:0},{opacity:.58,offset:.5},{opacity:direction>0?0:.6}],options);
        play(shadow,[{opacity:0,transform:'scaleX(.2)'},{opacity:.75,transform:'scaleX(1)',offset:.48},{opacity:0,transform:'scaleX(.2)'}],options);
        await play(leaf,[{transform:direction>0?right:left},{transform:'rotateY(-90deg) scaleX(.9)',offset:.5},{transform:direction>0?left:right}],options);
        if(cancelled)return;
        applyPage();
        await play(layer,[{opacity:1},{opacity:0}],{duration:100,fill:'forwards'});
      }
    } finally { cleanup(); }
  })();
  return {
    finished,
    cancel() { cancelled=true; cleanup(); }
  };
}


const $ = (selector) => document.querySelector(selector);
const board = $('#board');
const PAGE_SIZE = 9;
const state = { category: 'all', page: 0, detail: null };
const DEMO_CARDS = CARDS.map(c => ({...c}));
const FAV_KEY = 'terres-mortes:favoris';   // clé propre à cette interface
let favorites = new Set();
try { const saved=JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); if(Array.isArray(saved)) favorites = new Set(saved.filter(id => CARDS.some(c=>c.id===id))); } catch {}
const leftRects = [[345,63,150,195],[503,66,137,193],[648,66,135,193],[345,265,150,179],[503,265,137,179],[648,265,135,179],[345,449,150,178],[503,449,137,178],[648,449,135,178]];
// The right page is a flat mirror of the left page, narrowed to fit between the rings and the tabs.
const RIGHT_X = 846, RIGHT_SCALE = 376 / 480;
const rightRects = [0,1,2,3,4,5,6,7,8].map(i => {
  const [x,y,w,h] = leftRects[Math.floor(i/3)*3 + 2 - i%3];
  return [Math.round(RIGHT_X + (790 - x - w) * RIGHT_SCALE), y, Math.round(w * RIGHT_SCALE), h];
});
rightRects[2] = [rightRects[2][0], 50, rightRects[2][2], 204];
const navRects=[[26,128,248,50],[27,181,244,48],[27,232,244,49],[27,284,244,50],[27,337,244,50],[27,390,244,51],[27,444,244,57]];
const edgeRects=[[1225,95,47,61],[1225,162,47,64],[1225,230,47,64],[1225,300,47,64],[1225,370,47,65],[1225,443,47,65],[1225,513,47,70]];
function position(el, rect) { const [x,y,w,h,clip]=rect; Object.assign(el.style,{left:`${x}px`,top:`${y}px`,width:`${w}px`,height:`${h}px`}); if(clip)el.style.clipPath=clip; }
function filtered() { return state.category === 'all' ? CARDS : CARDS.filter(c => c.tags.includes(state.category)); }
function pageCount() { return Math.max(1,Math.ceil(filtered().length/PAGE_SIZE)); }
function categoryLabel(id) { return CATEGORIES.find(c=>c.id===id)?.label || id; }
function resize() { document.documentElement.style.setProperty('--scale',Math.min(innerWidth/1280,innerHeight/720)); document.querySelectorAll('.mobile-art,.detail-art').forEach(el=>{const art=el.querySelector('.card-face');if(art) scaleArt(art,el.clientWidth,el.clientHeight);}); }
function scaleArt(face,width,height){const art=ART[Number(face.dataset.art)];face.style.transform=`scale(${width/art.w},${height/art.h})`;}
function makeArt(index,width,height){const art=ART[index]; const el=document.createElement('span');el.className='card-face';el.dataset.art=index;Object.assign(el.style,{width:`${art.w}px`,height:`${art.h}px`,backgroundPosition:`-${art.x}px -${art.y}px`});scaleArt(el,width,height);return el;}
function announce(message){$('#announcement').textContent=message;}

CATEGORIES.forEach((category,i)=>{
  const nav=document.createElement('button'); nav.className='hotspot nav-filter';nav.dataset.category=category.id;nav.setAttribute('aria-label',`${category.label}, ${category.owned} cartes découvertes sur ${category.total}`);position(nav,navRects[i]);
  if(i===0) nav.innerHTML='<span class="filter-label" aria-hidden="true"><span class="filter-icon">✦</span> TOUS <span class="filter-count">47/120</span></span>';
  nav.addEventListener('click',()=>setCategory(category.id));$('#categories').append(nav);
  const edge=document.createElement('button');edge.className='hotspot edge-tab';edge.dataset.category=category.id;edge.setAttribute('aria-label',`Onglet ${category.label}`);position(edge,edgeRects[i]);edge.addEventListener('click',()=>setCategory(category.id));$('#edge-tabs').append(edge);
  const option=document.createElement('option');option.value=category.id;option.textContent=`${category.label} — ${category.owned}/${category.total}`;$('#mobile-category').append(option);
  if(i>0){const row=document.createElement('button');row.className='progress-row';row.innerHTML=`<span>${category.label}</span><span>${category.owned} / ${category.total}</span>`;row.addEventListener('click',()=>{$('#progress-dialog').close();setCategory(category.id);});$('#progress-categories').append(row);}
});

function makeSlot(card, rect, preview=false){
  if(!card){const slot=document.createElement('div');slot.className='card-slot empty';slot.setAttribute('aria-hidden','true');slot.textContent='✦';position(slot,rect);return slot;}
  const button=document.createElement('button');button.className='card-slot';button.dataset.cardId=card.id;button.dataset.name=card.name;button.setAttribute('aria-label',`${preview?'Aperçu : ':''}${card.name}, ${card.tags.map(categoryLabel).join(', ')}. Consulter la carte`);button.classList.toggle('is-favorite',favorites.has(card.id));position(button,rect);
  const clip=document.createElement('span');clip.className='card-clip';clip.append(makeArt(card.art,rect[2],rect[3]));button.append(clip);button.addEventListener('click',()=>openCard(card.id));return button;
}
function render(){
  const cards=filtered(); const pages=pageCount(); state.page=Math.min(state.page,pages-1);
  const pageCards=cards.slice(state.page*PAGE_SIZE,(state.page+1)*PAGE_SIZE);
  const nextPage=(state.page+1)%pages;const nextCards=cards.slice(nextPage*PAGE_SIZE,(nextPage+1)*PAGE_SIZE);
  board.classList.toggle('pristine',state.category==='all'&&state.page===0);board.dataset.filter=state.category;
  document.querySelectorAll('[data-category]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.category===state.category)));
  $('#mobile-category').value=state.category;
  $('#left-cards').replaceChildren(...leftRects.map((rect,i)=>makeSlot(pageCards[i],rect)));
  $('#right-cards').replaceChildren(...rightRects.map((rect,i)=>makeSlot(nextCards[i],rect,true)));
  $('#right-cards').setAttribute('aria-label',`Aperçu de la page ${nextPage+1}`);
  $('#page-number').value=`${state.page+1} / ${pages}`;$('#mobile-page').value=`${state.page+1} / ${pages}`;
  document.querySelectorAll('[data-page]').forEach(button=>{button.disabled=['first','prev'].includes(button.dataset.page)?state.page===0:state.page===pages-1;});
  $('#mobile-grid').replaceChildren(...pageCards.map(card=>{const button=document.createElement('button');button.className='mobile-card';button.setAttribute('aria-label',`Consulter ${card.name}`);const art=document.createElement('span');art.className='mobile-art';art.append(makeArt(card.art,140,190));const name=document.createElement('span');name.className='mobile-name';name.textContent=card.name;const type=document.createElement('span');type.className='mobile-type';type.textContent=card.tags.map(categoryLabel).join(' · ');button.append(art,name,type);button.addEventListener('click',()=>openCard(card.id));return button;}));
  requestAnimationFrame(resize);
}
let activeTurn = null;
let navigationVersion = 0;
function cancelTurn() {
  navigationVersion++;
  activeTurn?.cancel();
  activeTurn = null;
}
function setCategory(id) {
  cancelTurn(); state.category=id; state.page=0; render();
  emit('categoryChanged', { category: id });
  announce(`${categoryLabel(id)} : ${filtered().length} cartes. Page 1 sur ${pageCount()}.`);
}
async function changePage(action) {
  if (activeTurn) return;
  const before=state.page, pages=pageCount();
  const target=action==='first'?0:action==='last'?pages-1:Math.max(0,Math.min(pages-1,before+(action==='next'?1:-1)));
  if(target===before)return;
  const cards=filtered();
  const pageCards=page=>cards.slice(page*PAGE_SIZE,(page+1)*PAGE_SIZE);
  const version=++navigationVersion;
  const turn=startPageTurn({
    board, grid:$('#mobile-grid'), direction:Math.sign(target-before),
    oldPage:pageCards(before),oldPreview:pageCards((before+1)%pages),
    nextPage:pageCards(target),nextPreview:pageCards((target+1)%pages),
    rects:leftRects, makeArt,
    commit(){state.page=target;render();emit('pageChanged',{page:state.page,category:state.category});announce(`Page ${state.page+1} sur ${pages}. ${categoryLabel(state.category)}.`);}
  });
  activeTurn=turn;
  try { await turn.finished; }
  catch { if(version===navigationVersion){state.page=target;render();} }
  finally { if(version===navigationVersion) activeTurn=null; }
}
document.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>changePage(button.dataset.page)));
$('#mobile-category').addEventListener('change',event=>setCategory(event.target.value));

const dialog=$('#card-dialog');
function openCard(id){state.detail=id;renderDetail();if(!dialog.open)dialog.showModal();requestAnimationFrame(resize);emit('cardOpened',{id});}
function renderDetail(){const card=CARDS.find(c=>c.id===state.detail);if(!card)return;const list=filtered();const index=list.findIndex(c=>c.id===card.id);$('#card-name').textContent=card.name;$('#card-category').textContent=card.tags.map(categoryLabel).join(' / ');$('#card-rarity').textContent=card.rarity;$('#card-rarity').dataset.rarity=card.rarity;$('#card-description').textContent=card.description;$('#card-power').textContent=card.power;$('#card-defense').textContent=card.defense;$('#card-cost').textContent=card.cost;$('#card-id').textContent=`N° ${String(CARDS.findIndex(c=>c.id===card.id)+1).padStart(3,'0')}`;$('#detail-art').replaceChildren(makeArt(card.art,255,344));$('#detail-index').textContent=`${index+1} / ${list.length}`;$('#detail-prev').disabled=index<=0;$('#detail-next').disabled=index>=list.length-1;updateFavorite();requestAnimationFrame(resize);}
function updateFavorite(){const active=favorites.has(state.detail);$('#favorite-button').setAttribute('aria-pressed',String(active));$('#favorite-button').textContent=active?'★ Carte favorite':'☆ Marquer comme favorite';}
function stepDetail(offset){const list=filtered();const index=list.findIndex(c=>c.id===state.detail);if(list[index+offset])openCard(list[index+offset].id);}
$('#detail-prev').addEventListener('click',()=>stepDetail(-1));$('#detail-next').addEventListener('click',()=>stepDetail(1));
$('#favorite-button').addEventListener('click',()=>{if(favorites.has(state.detail))favorites.delete(state.detail);else favorites.add(state.detail);try{localStorage.setItem(FAV_KEY,JSON.stringify([...favorites]));}catch{}updateFavorite();emit('favoriteToggled',{id:state.detail,favorite:favorites.has(state.detail)});document.querySelectorAll('[data-card-id]').forEach(button=>button.classList.toggle('is-favorite',favorites.has(button.dataset.cardId)));});
document.querySelectorAll('dialog').forEach(modal=>{modal.querySelector('.close-dialog').addEventListener('click',()=>modal.close());modal.addEventListener('click',event=>{if(event.target!==modal)return;const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();});});
$('#progress-button').addEventListener('click',()=>{$('#progress-dialog').showModal();emit('progressOpened');});
document.addEventListener('keydown',event=>{if(event.altKey||event.ctrlKey||event.metaKey||['INPUT','SELECT','TEXTAREA'].includes(event.target.tagName))return;if($('#progress-dialog').open)return;if(event.key==='ArrowRight'){event.preventDefault();dialog.open?stepDetail(1):changePage('next');}if(event.key==='ArrowLeft'){event.preventDefault();dialog.open?stepDetail(-1):changePage('prev');}});
let touchStart=null;board.addEventListener('touchstart',event=>{touchStart={x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY};},{passive:true});board.addEventListener('touchend',event=>{if(!touchStart)return;const dx=event.changedTouches[0].clientX-touchStart.x,dy=event.changedTouches[0].clientY-touchStart.y;if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*2)changePage(dx<0?'next':'prev');touchStart=null;},{passive:true});
window.addEventListener('resize',()=>{if(activeTurn){cancelTurn();render();}resize();});

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
   Entrée : window.TerresMortesUI.setData({...})
            ou postMessage({ to:'terres-mortes', type:'setData', data:{...} })
   Sortie : événements « terres-mortes:<nom> » sur window
            (+ postMessage({ from:'terres-mortes', event, detail }) au parent si la page est dans une iframe).
   Détail des données et des événements : README.md. */
const UI_ID = 'terres-mortes';
function emit(name, detail = {}){
  window.dispatchEvent(new CustomEvent(`${UI_ID}:${name}`, { detail }));
  if (window.parent !== window) window.parent.postMessage({ from: UI_ID, event: name, detail }, '*');
}
window.addEventListener('message', e => {
  const m = e.data;
  if (m && m.to === UI_ID && m.type === 'setData') setData(m.data);
});

// data : { cards: [{ id, name, tags, art (0-8), rarity, description, power, defense, cost }], favorites?: [id] }
// Les catégories et les compteurs sont peints dans l'image de référence : ils ne changent pas.
function setData(data = {}){
  cancelTurn();
  if (dialog.open) dialog.close();
  if (Array.isArray(data.cards)) CARDS.splice(0, CARDS.length, ...data.cards);
  if (Array.isArray(data.favorites)) favorites = new Set(data.favorites);
  state.page = 0;
  render();
}
function applyAssets(){
  const ref = asset('reference', 'assets/reference.jpg');
  document.documentElement.style.setProperty('--reference-image', `url('${ref}')`);
}
window.TerresMortesUI = { setData, getState: () => ({ ...state, cards: CARDS.length, favorites: [...favorites] }) };

/* ================= PANNEAU DE TEST (fausses données, hors jeu) ================= */
const TESTS = [
  ['Données de démo', () => setData({ cards: DEMO_CARDS })],
  ['Classeur vide', () => setData({ cards: [] })],
  ['Une seule page (4 cartes)', () => setData({ cards: DEMO_CARDS.slice(0, 4) })],
  ['Toutes favorites', () => setData({ favorites: CARDS.map(c => c.id) })],
  ['Aucune favorite', () => setData({ favorites: [] })],
  ['Visuel manquant on/off', () => { ASSETS.forceMissing = !ASSETS.forceMissing; applyAssets(); }],
];
for (const [label, run] of TESTS){
  const b = document.createElement('button');
  b.type = 'button'; b.textContent = label; b.onclick = run;
  document.getElementById('ui-tests').append(b);
}

render();
loadAssets().then(() => { applyAssets(); emit('ready'); });
