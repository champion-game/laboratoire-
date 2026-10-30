"use strict";
/* Le Grimoire des Exilés — données de démo (36 cartes), puis code de l'interface. */
const seedCards = [
  [
    "Arbalétrier de l’Exil",
    0,
    "unit",
    "Les Exilés",
    "Rare",
    80,
    65,
    55,
    40,
    "Là où d’autres crient, il choisit le silence. Et dans le silence, la survie.",
    "Spécialiste du tir de précision et des attaques discrètes, l’arbalétrier élimine ses cibles sans attirer l’attention, soutenant son équipe depuis l’ombre.",
  ],
  [
    "Porteur de braises",
    1,
    "unit",
    "La Légion",
    "Épique",
    75,
    90,
    35,
    60,
    "Il ne reste que les cendres. Et ceux qui savent les traverser.",
    "Son réservoir rapiécé contient les dernières flammes de l’ancien monde. Il ouvre un passage aux siens, même au cœur des hordes.",
  ],
  [
    "Colosse des remparts",
    2,
    "unit",
    "Les Veilleurs",
    "Rare",
    100,
    80,
    20,
    95,
    "Tant qu’il tient debout, personne ne passe.",
    "Une force implacable et une loyauté sans faille. Sa mitrailleuse couvre les refuges quand leurs portes menacent de céder.",
  ],
  [
    "Insurgé des ruelles",
    3,
    "unit",
    "Les Exilés",
    "Commune",
    60,
    60,
    90,
    25,
    "La liberté ne se demande pas. Elle se reprend.",
    "Né dans les quartiers oubliés, il connaît chaque passage des cités mortes. Sa vitesse et son audace déjouent les patrouilles.",
  ],
  [
    "Traqueur des friches",
    4,
    "unit",
    "Les Veilleurs",
    "Commune",
    65,
    55,
    85,
    35,
    "Chaque empreinte raconte une histoire. La dernière sera la vôtre.",
    "Le traqueur lit la terre comme un livre ouvert. Il repère les dangers, suit les pistes et ramène les égarés jusqu’au camp.",
  ],
  [
    "Ombre du crépuscule",
    5,
    "unit",
    "Les Oubliés",
    "Légendaire",
    70,
    95,
    80,
    30,
    "Vous ne l’entendrez qu’une fois.",
    "Un manteau noir, un souffle retenu, puis plus rien. On ignore son nom, mais les survivants connaissent tous sa légende.",
  ],
  [
    "Artilleur des dunes",
    6,
    "unit",
    "La Légion",
    "Rare",
    75,
    85,
    30,
    50,
    "Le ciel aussi a ses colères.",
    "Il règle son mortier avec la patience d’un horloger. Ses tirs précis tiennent les hordes à distance des dernières caravanes.",
  ],
  [
    "Tourelle sentinelle",
    7,
    "defense",
    "Les Veilleurs",
    "Épique",
    90,
    80,
    0,
    85,
    "Même lorsque les hommes dorment, elle veille.",
    "Assemblage de fer et de pièces récupérées, cette sentinelle autonome protège les accès du camp sans jamais fermer l’œil.",
  ],
  [
    "Éclaireur des confins",
    8,
    "unit",
    "Les Exilés",
    "Commune",
    60,
    50,
    95,
    30,
    "Au-delà de l’horizon, il existe encore un chemin.",
    "Toujours le premier à partir et le dernier à revenir, l’éclaireur cartographie les territoires où personne n’ose encore s’aventurer.",
  ],
  ["Gardien du dernier pont", 2, "defense", "Les Veilleurs", "Rare"],
  ["Vigie des ruines", 8, "defense", "Les Veilleurs", "Commune"],
  ["Rempart de fer", 7, "defense", "La Légion", "Épique"],
  ["Guetteur nocturne", 5, "defense", "Les Oubliés", "Rare"],
  ["Bastion des cendres", 1, "defense", "La Légion", "Légendaire"],
  ["Protecteur du refuge", 2, "defense", "Les Exilés", "Commune"],
  ["Piège des friches", 4, "defense", "Les Veilleurs", "Commune"],
  ["Baliste de l’Exil", 0, "defense", "Les Exilés", "Épique"],
  ["Dernière barricade", 7, "defense", "Les Oubliés", "Rare"],
  ["Carquois du silence", 0, "item", "Les Exilés", "Rare"],
  ["Réserve de braises", 1, "item", "La Légion", "Épique"],
  ["Ceinture du colosse", 2, "item", "Les Veilleurs", "Commune"],
  ["Lame de l’insurgé", 3, "item", "Les Exilés", "Rare"],
  ["Boussole des friches", 4, "item", "Les Veilleurs", "Commune"],
  ["Manteau des ombres", 5, "item", "Les Oubliés", "Légendaire"],
  ["Obus du vieux monde", 6, "item", "La Légion", "Rare"],
  ["Cœur mécanique", 7, "item", "Les Veilleurs", "Épique"],
  ["Carte des confins", 8, "item", "Les Exilés", "Commune"],
  ["Le Silencieux", 0, "zombie", "Les Oubliés", "Rare"],
  ["Le Calciné", 1, "zombie", "Les Oubliés", "Épique"],
  ["Le Dévoreur", 2, "zombie", "Les Oubliés", "Légendaire"],
  ["Le Coureur", 3, "zombie", "Les Oubliés", "Commune"],
  ["Le Rôdeur", 4, "zombie", "Les Oubliés", "Commune"],
  ["Le Sans-visage", 5, "zombie", "Les Oubliés", "Légendaire"],
  ["Le Fossoyeur", 6, "zombie", "Les Oubliés", "Rare"],
  ["Le Briseur", 7, "zombie", "Les Oubliés", "Épique"],
  ["Le Vagabond", 8, "zombie", "Les Oubliés", "Commune"],
];
const descriptions = {
  defense:
    "Érigée avec les vestiges du vieux monde, cette défense offre un dernier abri aux voyageurs. Entre ses murs, la résistance s’organise et l’espoir demeure.",
  item: "Un vestige précieux sauvé des décombres. Entre de bonnes mains, cet objet peut faire la différence entre une dernière expédition et un retour au refuge.",
  zombie:
    "Il ne reste de son ancienne vie qu’une silhouette familière. Les survivants évitent son territoire et transmettent son histoire à voix basse autour du feu.",
};
const quotes = {
  defense: "Ce que nous protégeons vaut plus que ce que nous avons perdu.",
  item: "Les petites choses sauvent parfois de grandes vies.",
  zombie: "Le monde s’est tu. Quelque chose marche encore.",
};
// Démo : quelques cartes pas encore trouvées et quelques nouvelles.
const LOCKED_DEMO = [5, 13, 16, 22, 23, 29, 30, 33];
const NEW_DEMO = [1, 8, 19];
const DEFAULT_CARDS = seedCards.map((c, i) => ({
  id: `exil-${String(i + 1).padStart(3, "0")}`,
  name: c[0],
  art: c[1],
  category: c[2],
  faction: c[3],
  rarity: c[4],
  health: c[5] ?? 55 + ((i * 7) % 45),
  damage: c[6] ?? 35 + ((i * 11) % 60),
  mobility: c[7] ?? (c[2] === "defense" ? 10 : 25 + ((i * 13) % 70)),
  resistance: c[8] ?? 30 + ((i * 9) % 65),
  quote: c[9] ?? quotes[c[2]],
  description: c[10] ?? descriptions[c[2]],
  owned: !LOCKED_DEMO.includes(i), // carte trouvée par le joueur
  isNew: NEW_DEMO.includes(i), // badge « NOUVEAU » tant qu'elle n'a pas été regardée
}));

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
const icon = (name, cls = "") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const STORAGE_KEY = "grimoire:sauvegarde";
let saved = {};
try {
  saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
} catch {}
const defaults = DEFAULT_CARDS;
let cards = defaults.map((c) => ({ ...c, ...(saved.cards?.find((x) => x.id === c.id) || {}) }));
const state = {
  section: "album",
  category: null,
  faction: null,
  rarity: null,
  query: "",
  page: 0,
  selected: cards[0]?.id,
  flipping: false,
  sound: false,
  favorites: new Set(saved.favorites || []),
  seen: new Set(saved.seen || [cards[0]?.id].filter(Boolean)),
  turns: Number(saved.turns) || 0,
  edits: Number(saved.edits) || 0,
  warmth: saved.warmth ?? 50,
  patina: saved.patina ?? 70,
  speed: saved.speed ?? 1000,
  theme: saved.theme || "original",
  // Fonctions de démo, désactivables par le jeu via setData({ features })
  features: { workshop: true, challenges: true, rewards: true, sound: true },
};
const rarityColors = { Commune: "#847c64", Rare: "#8c9e9b", Épique: "#9f779c", Légendaire: "#c89736" };
const categoryNames = {
  unit: "UNITÉS",
  defense: "DÉFENSES",
  item: "OBJETS",
  zombie: "ZOMBIES",
  rare: "CARTES D’EXCEPTION",
};
function persist() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cards,
        favorites: [...state.favorites],
        seen: [...state.seen],
        turns: state.turns,
        edits: state.edits,
        warmth: state.warmth,
        patina: state.patina,
        speed: state.speed,
        theme: state.theme,
      }),
    );
  } catch {
    toast("Le stockage est indisponible. Exportez vos cartes pour les conserver.");
  }
}
function toast(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("visible");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $("#toast").classList.remove("visible"), 3200);
}
// Illustration : `img` (URL fournie par le jeu), sinon « carte-<art>-grand » (fiche) puis « carte-<art> » du manifest, sinon le placeholder.
const ART_PLACEHOLDER = "assets/placeholders/carte.svg";
function artSrc(card, hero = false) {
  if (card.img) return card.img;
  const n = Number(card.art) || 0;
  return (hero && asset(`carte-${n}-grand`)) || asset(`carte-${n}`) || ART_PLACEHOLDER;
}
function artMarkup(card, hero = false) {
  return `<img class="card-art" src="${esc(artSrc(card, hero))}" alt="" draggable="false" aria-hidden="true">`;
}
function filteredCards() {
  return cards.filter(
    (c) =>
      (!state.category ||
        (state.category === "rare" ? ["Épique", "Légendaire"].includes(c.rarity) : c.category === state.category)) &&
      (!state.faction || c.faction === state.faction) &&
      (!state.rarity || c.rarity === state.rarity) &&
      (!state.query || `${c.name} ${c.faction}`.toLocaleLowerCase("fr").includes(state.query.toLocaleLowerCase("fr"))),
  );
}
function pageTotal() {
  return Math.max(1, Math.ceil(filteredCards().length / 9));
}
function selectedCard() {
  return cards.find((c) => c.id === state.selected) || cards[0];
}
const rarityStyle = (c) => `--rarity:${rarityColors[c.rarity] || rarityColors.Commune}`;
const isOwned = (c) => c.owned !== false;
const LOCK = `<span class="card-lock">${icon("lock")}</span>`;
function renderDetail() {
  const c = selectedCard();
  if (!c) {
    $("#detail-page").innerHTML = '<p class="detail-empty">Aucune carte dans le grimoire.</p>';
    return;
  }
  const owned = isOwned(c);
  const fav = state.favorites.has(c.id);
  const stats = [
    ["heart", "SANTÉ", c.health],
    ["target", "DÉGÂTS", c.damage],
    ["boot", "MOBILITÉ", c.mobility],
    ["shield", "RÉSISTANCE", c.resistance],
  ]
    .map(([i, l, v]) => `<div class="stat-row">${icon(i)}<span>${l}</span><b>${owned ? esc(v) : "?"}</b></div>`)
    .join("");
  const factionIcon = { "Les Exilés": "mountain", "La Légion": "shield", "Les Oubliés": "bio" }[c.faction] || "target";
  const quote = owned ? `« ${esc(c.quote)} »` : "Cette carte n’a pas encore été trouvée.";
  const description = owned
    ? esc(c.description)
    : "Continuez à explorer les terres mortes pour l’ajouter à votre collection.";
  const number = `${String(cards.indexOf(c) + 1).padStart(3, "0")} / ${String(cards.length).padStart(3, "0")}`;
  $("#detail-page").innerHTML = `
    <div class="detail-ornament">✧</div>
    <div class="detail-main">
      <div class="hero-card ${owned ? "" : "locked"}">${artMarkup(c, true)}<span class="hero-plate">${esc(c.name)}</span>${owned ? "" : LOCK}</div>
      <div class="detail-copy">
        <h2 class="card-title ${c.name.length > 16 ? "long" : ""}">${esc(c.name)}</h2>
        <div class="red-stroke"></div>
        <p class="card-quote">${quote}</p>
        <div class="stats">${stats}</div>
        <div class="faction-emblem">${icon(factionIcon)}<div><span>FACTION</span><strong>${esc(c.faction)}</strong></div></div>
      </div>
    </div>
    <p class="card-description">${description}</p>
    <div class="detail-bottom">
      <span class="rarity-label" style="${rarityStyle(c)}">${esc(String(c.rarity).toLocaleUpperCase("fr"))} <span>· ${number}</span></span>
      <button class="favorite-button" id="favorite-card" ${owned ? "" : "disabled"} aria-pressed="${fav}" aria-label="${fav ? "Retirer des favoris" : "Ajouter aux favoris"}">${icon("star")}<span>${fav ? "FAVORI" : "FAVORIS"}</span></button>
    </div>`;
}
function cardMarkup(c) {
  const owned = isOwned(c);
  const selected = c.id === state.selected;
  const label = `${c.name}, ${c.rarity}${owned ? "" : ", pas encore trouvée"}${c.isNew ? ", nouvelle" : ""}`;
  return `<button class="card-button ${selected ? "selected" : ""} ${owned ? "" : "locked"}" data-id="${esc(c.id)}" aria-label="${esc(label)}" aria-pressed="${selected}">
    ${artMarkup(c)}<span class="card-plate">${esc(c.name)}</span>
    <span class="card-rarity" style="${rarityStyle(c)}"></span>
    ${owned ? "" : LOCK}${c.isNew && owned ? '<span class="card-new">NOUVEAU</span>' : ""}
  </button>`;
}
function renderGrid() {
  const list = filteredCards();
  state.page = Math.min(state.page, pageTotal() - 1);
  const visible = list.slice(state.page * 9, state.page * 9 + 9);
  const grid = $("#card-grid");
  grid.classList.toggle("empty", !visible.length);
  grid.innerHTML = visible.length
    ? visible.map(cardMarkup).join("")
    : cards.length
      ? "<p>Aucune carte sur cette page.<br>Essayez un autre filtre.</p>"
      : "<p>Votre grimoire est encore vide.</p>";
  $("#page-heading").textContent = state.category
    ? categoryNames[state.category]
    : state.section === "all"
      ? "TOUTES LES CARTES"
      : state.faction
        ? state.faction.toLocaleUpperCase("fr")
        : state.rarity
          ? state.rarity.toLocaleUpperCase("fr")
          : state.section === "factions"
            ? "TOUTES LES FACTIONS"
            : state.section === "rarities"
              ? "TOUTES LES RARETÉS"
              : ["LES SURVIVANTS", "LES REMPARTS", "LES VESTIGES", "LES OUBLIÉS"][state.page] || "LA COLLECTION";
  const owned = list.filter(isOwned).length;
  $("#page-count").textContent =
    `${owned} / ${list.length} CARTE${list.length === 1 ? "" : "S"} TROUVÉE${owned > 1 ? "S" : ""}`;
  $("#page-number").innerHTML =
    `${String(state.page + 1).padStart(2, "0")} <i>/</i> ${String(pageTotal()).padStart(2, "0")}`;
  $("#previous-page").disabled = state.page === 0;
  $("#next-page").disabled = state.page >= pageTotal() - 1;
}
function renderFilters() {
  const strip = $("#filter-strip");
  strip.hidden = !["all", "factions", "rarities"].includes(state.section);
  if (state.section === "all") {
    strip.innerHTML = `<input type="search" id="search-cards" placeholder="Rechercher une carte…" aria-label="Rechercher une carte" value="${esc(state.query)}">`;
  } else if (state.section === "factions") {
    strip.innerHTML = ["Toutes", "Les Exilés", "Les Veilleurs", "La Légion", "Les Oubliés"]
      .map(
        (x) =>
          `<button data-faction="${x === "Toutes" ? "" : x}" class="${(state.faction || "Toutes") === x ? "active" : ""}">${x}</button>`,
      )
      .join("");
  } else if (state.section === "rarities") {
    strip.innerHTML = ["Toutes", "Commune", "Rare", "Épique", "Légendaire"]
      .map(
        (x) =>
          `<button data-rarity="${x === "Toutes" ? "" : x}" class="${(state.rarity || "Toutes") === x ? "active" : ""}">${x}</button>`,
      )
      .join("");
  } else strip.innerHTML = "";
}
function challenges() {
  return [
    {
      title: "La curiosité du survivant",
      description: "Découvrir 9 cartes différentes",
      value: state.seen.size,
      max: 9,
      icon: "cards",
    },
    { title: "Au fil des pages", description: "Tourner 3 pages du grimoire", value: state.turns, max: 3, icon: "book" },
    {
      title: "L’encre de votre histoire",
      description: "Personnaliser une carte dans l’atelier",
      value: state.edits,
      max: 1,
      icon: "edit",
    },
  ];
}
function renderSpecial() {
  const special = $("#special-page");
  const isSpecial = ["challenges", "rewards"].includes(state.section);
  special.hidden = !isSpecial;
  $("#card-grid").hidden = isSpecial;
  $(".page-navigation").hidden = isSpecial;
  if (!isSpecial) return;
  $("#page-count").textContent = "VOTRE PROGRESSION";
  if (state.section === "challenges") {
    $("#page-heading").textContent = "DÉFIS DU CHRONIQUEUR";
    special.innerHTML = `<h2>Écrivez votre légende.</h2><p>Explorez le grimoire et débloquez de nouvelles patines pour votre album.</p>${challenges()
      .map(
        (c) =>
          `<div class="challenge-item">${icon(c.icon)}<div class="challenge-copy"><strong>${c.title}</strong><p>${c.description}</p><progress value="${Math.min(c.value, c.max)}" max="${c.max}" aria-label="${c.title}"></progress></div><span>${Math.min(c.value, c.max)} / ${c.max}</span></div>`,
      )
      .join("")}`;
  } else {
    $("#page-heading").textContent = "VOS RÉCOMPENSES";
    const amber = state.seen.size >= 9;
    const ash = state.turns >= 3;
    special.innerHTML = `<h2>Les marques du voyage.</h2><p>Une nouvelle patine pour chaque étape de votre histoire.</p>${[
      ["original", "Parchemin originel", "La patine des premières chroniques", true],
      [
        "amber",
        "L’ambre des anciens",
        amber ? "Débloquée · Découvrir 9 cartes" : "À débloquer · Découvrir 9 cartes",
        amber,
      ],
      ["ash", "Les cendres du temps", ash ? "Débloquée · Tourner 3 pages" : "À débloquer · Tourner 3 pages", ash],
    ]
      .map(
        ([id, title, desc, enabled]) =>
          `<button class="reward-button" data-theme="${id}" ${enabled ? "" : "disabled"} aria-pressed="${state.theme === id}">${icon("chest")}<span><strong>${title}</strong><small>${desc}</small></span><span class="reward-check">${state.theme === id ? "✓" : enabled ? "→" : "◇"}</span></button>`,
      )
      .join("")}`;
  }
}
function render() {
  renderFilters();
  renderGrid();
  renderSpecial();
  renderDetail();
  $$("[data-section]").forEach((b) => {
    b.classList.toggle("active", b.dataset.section === state.section);
    b.setAttribute("aria-current", b.dataset.section === state.section ? "page" : "false");
  });
  $$("[data-category]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.category === state.category)));
  applyFeatures();
}
// Masque les fonctions de démo que le jeu a désactivées.
function applyFeatures() {
  const f = state.features;
  $("#open-workshop").hidden = !f.workshop;
  $("#sound-toggle").hidden = !f.sound;
  $('[data-section="challenges"]').hidden = !f.challenges;
  $('[data-section="rewards"]').hidden = !f.rewards;
  if (!f.sound) state.sound = false;
}
function applyTextureSettings() {
  document.documentElement.style.setProperty("--warmth", 0.7 + (state.warmth / 100) * 0.6);
  document.documentElement.style.setProperty("--patina", state.patina / 100);
  document.documentElement.style.setProperty("--turn-duration", state.speed + "ms");
  $("#warmth").value = state.warmth;
  $("#patina").value = state.patina;
  $("#turn-speed").value = state.speed;
  $("#warmth-value").textContent = state.warmth + " %";
  $("#patina-value").textContent = state.patina + " %";
  $("#speed-value").textContent = state.speed < 800 ? "Rapide" : state.speed > 1200 ? "Contemplative" : "Naturelle";
  $("#book").classList.toggle("reward-amber", state.theme === "amber");
  $("#book").classList.toggle("reward-ash", state.theme === "ash");
}
let audioContext;
function pageSound() {
  if (!state.sound) return;
  try {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume();
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.65, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.sin((Math.PI * i) / data.length);
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    const filter = audioContext.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1200;
    filter.Q.value = 0.5;
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.06, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.65);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    source.start();
  } catch {}
}
// Téléphone tenu en hauteur : les pages sont empilées, pas de feuille 3D.
const portraitMQ = matchMedia("(orientation: portrait) and (max-width: 900px)");
const cleanClone = (el) => {
  const copy = el.cloneNode(true);
  copy.removeAttribute("id");
  copy.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id"));
  return copy;
};
function showPage(next) {
  state.page = next;
  const first = filteredCards()[next * 9];
  if (first) {
    state.selected = first.id;
    state.seen.add(first.id);
  }
  renderGrid();
  renderDetail();
  persist();
}
function turnPage(delta) {
  if (state.flipping || ["challenges", "rewards"].includes(state.section)) return;
  const next = state.page + delta;
  if (next < 0 || next >= pageTotal()) return;
  state.turns++;
  pageSound();
  const reduced = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const changed = () => emit("pageChanged", { page: state.page, section: state.section, category: state.category });
  if (portraitMQ.matches || reduced) {
    showPage(next);
    const grid = $("#card-grid");
    grid.classList.remove("slide-next", "slide-prev");
    void grid.offsetWidth; // relance l'animation
    if (!reduced) grid.classList.add(delta > 0 ? "slide-next" : "slide-prev");
    changed();
    return;
  }
  // Feuille 3D.
  // En avant : la page de droite se soulève (recto = ancienne droite) et retombe à gauche
  // (verso = nouvelle gauche). Dessous, la nouvelle droite est déjà là ; la gauche change à l'arrivée.
  // En arrière : la page de gauche se soulève (verso = ancienne gauche) et retombe à droite
  // (recto = nouvelle droite). Dessous, la nouvelle gauche est déjà là ; la droite change à l'arrivée.
  state.flipping = true;
  const leaf = $("#turning-page");
  const front = $(".turn-front", leaf);
  const back = $(".turn-back", leaf);
  const old = { page: state.page, selected: state.selected };
  const oldLeft = cleanClone($(".left-page"));
  const oldRight = cleanClone($(".right-page"));
  showPage(next); // les deux pages réelles passent à la nouvelle page…
  const newLeft = cleanClone($(".left-page"));
  const newRight = cleanClone($(".right-page"));
  const target = { page: state.page, selected: state.selected };
  Object.assign(state, old); // …puis on remet l'ancienne là où la feuille ne couvre pas encore
  if (delta > 0) renderGrid();
  else renderDetail();
  Object.assign(state, target);
  front.replaceChildren(delta > 0 ? oldRight : newRight);
  back.replaceChildren(delta > 0 ? newLeft : oldLeft);
  leaf.className = "turning-page " + (delta > 0 ? "forward" : "backward");
  setTimeout(() => {
    if (delta > 0) renderGrid();
    else renderDetail();
    leaf.className = "turning-page";
    front.replaceChildren();
    back.replaceChildren();
    state.flipping = false;
    changed();
  }, state.speed + 50);
}
function selectCard(id) {
  if (state.flipping) return;
  state.selected = id;
  state.seen.add(id);
  const card = cards.find((c) => c.id === id);
  if (card?.isNew) {
    card.isNew = false;
    emit("cardSeen", { id });
  }
  renderGrid();
  renderDetail();
  persist();
  emit("cardSelected", { id });
  if (!$("#workshop").hidden && selectedCard()) fillForm();
}
function changeSection(section) {
  if (state.flipping) return;
  state.section = section;
  state.page = 0;
  state.category = null;
  state.faction = null;
  state.rarity = null;
  state.query = "";
  render();
  emit("sectionChanged", { section });
}
$("#card-grid").addEventListener("click", (e) => {
  const button = e.target.closest("[data-id]");
  if (button) selectCard(button.dataset.id);
});
$$("[data-section]").forEach((b) => b.addEventListener("click", () => changeSection(b.dataset.section)));
$$("[data-category]").forEach((b) =>
  b.addEventListener("click", () => {
    if (state.flipping) return;
    state.category = state.category === b.dataset.category ? null : b.dataset.category;
    state.section = "album";
    state.faction = null;
    state.rarity = null;
    state.query = "";
    state.page = 0;
    const first = filteredCards()[0];
    if (first) {
      state.selected = first.id;
      state.seen.add(first.id);
    }
    render();
    persist();
    emit("categoryChanged", { category: state.category });
  }),
);
$("#filter-strip").addEventListener("click", (e) => {
  const faction = e.target.closest("[data-faction]");
  const rarity = e.target.closest("[data-rarity]");
  if (faction) state.faction = faction.dataset.faction || null;
  if (rarity) state.rarity = rarity.dataset.rarity || null;
  if (faction || rarity) {
    state.page = 0;
    renderFilters();
    renderGrid();
  }
});
$("#filter-strip").addEventListener("input", (e) => {
  if (e.target.id === "search-cards") {
    state.query = e.target.value;
    state.page = 0;
    renderGrid();
  }
});
$("#previous-page").addEventListener("click", () => turnPage(-1));
$("#next-page").addEventListener("click", () => turnPage(1));
$("#detail-page").addEventListener("click", (e) => {
  if (e.target.closest("#favorite-card")) {
    state.favorites.has(state.selected) ? state.favorites.delete(state.selected) : state.favorites.add(state.selected);
    renderDetail();
    persist();
    emit("favoriteToggled", { id: state.selected, favorite: state.favorites.has(state.selected) });
    toast(state.favorites.has(state.selected) ? "Carte ajoutée à vos favoris." : "Carte retirée des favoris.");
  }
});
$("#special-page").addEventListener("click", (e) => {
  const b = e.target.closest("[data-theme]");
  if (b && !b.disabled) {
    state.theme = b.dataset.theme;
    applyTextureSettings();
    renderSpecial();
    persist();
    toast("La patine de votre grimoire a été appliquée.");
  }
});
$("#sound-toggle").addEventListener("click", () => {
  state.sound = !state.sound;
  $("#sound-toggle").setAttribute("aria-pressed", String(state.sound));
  $("#sound-toggle").setAttribute(
    "aria-label",
    state.sound ? "Désactiver les sons de page" : "Activer les sons de page",
  );
  $("#sound-toggle span").textContent = state.sound ? "SON ACTIVÉ" : "SON COUPÉ";
  pageSound();
});
let touchX = 0,
  touchY = 0;
$("#book").addEventListener(
  "touchstart",
  (e) => {
    touchX = e.changedTouches[0].clientX;
    touchY = e.changedTouches[0].clientY;
  },
  { passive: true },
);
$("#book").addEventListener(
  "touchend",
  (e) => {
    const dx = e.changedTouches[0].clientX - touchX,
      dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5) turnPage(dx < 0 ? 1 : -1);
  },
  { passive: true },
);
let previousFocus;
function fillForm() {
  const c = selectedCard();
  for (const key of ["name", "faction", "rarity", "quote", "description", "health", "damage", "mobility", "resistance"])
    $("#card-form").elements[key].value = c[key];
}
function openWorkshop() {
  if (!selectedCard()) {
    toast("Aucune carte à modifier.");
    return;
  }
  previousFocus = document.activeElement;
  fillForm();
  $("#workshop").hidden = false;
  $("#drawer-overlay").hidden = false;
  document.body.classList.add("modal-open");
  $("main").inert = true;
  $("#close-workshop").focus();
}
function closeWorkshop() {
  $("#workshop").hidden = true;
  $("#drawer-overlay").hidden = true;
  document.body.classList.remove("modal-open");
  $("main").inert = false;
  previousFocus?.focus();
}
$("#open-workshop").addEventListener("click", openWorkshop);
$("#close-workshop").addEventListener("click", closeWorkshop);
$("#drawer-overlay").addEventListener("click", closeWorkshop);
$$("[data-workshop-tab]").forEach((b) =>
  b.addEventListener("click", () => {
    $$("[data-workshop-tab]").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
    $("#panel-card").hidden = b.dataset.workshopTab !== "card";
    $("#panel-textures").hidden = b.dataset.workshopTab !== "textures";
  }),
);
$("#card-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const c = selectedCard();
  for (const key of ["name", "faction", "rarity", "quote", "description"]) c[key] = form.elements[key].value.trim();
  if (!c.name) {
    form.elements.name.focus();
    return;
  }
  for (const key of ["health", "damage", "mobility", "resistance"])
    c[key] = Math.max(0, Math.min(100, Number(form.elements[key].value) || 0));
  state.edits++;
  persist();
  render();
  emit("cardEdited", { card: { ...c } });
  toast("Votre carte a été enregistrée dans le grimoire.");
});
[
  ["warmth", "warmth"],
  ["patina", "patina"],
  ["turn-speed", "speed"],
].forEach(([id, key]) => {
  $("#" + id).addEventListener("input", (e) => {
    state[key] = Number(e.target.value);
    state.theme = "original";
    applyTextureSettings();
    persist();
  });
});
$("#texture-gallery").innerHTML = [
  ["book-texture.webp", "Le livre ouvert"],
  ["parchment.svg", "Parchemin"],
  ["leather.svg", "Cuir patiné"],
  ["wood.svg", "Bois sombre"],
  ["metal.svg", "Laiton vieilli"],
]
  .map(
    ([file, label]) =>
      `<a class="texture-swatch" href="assets/${file}" download><img src="assets/${file}" alt="Texture : ${label}" loading="lazy"><span>${label}${icon("download")}</span></a>`,
  )
  .join("");
$("#export-data").addEventListener("click", () => {
  const blob = new Blob(
    [
      JSON.stringify(
        {
          version: 1,
          cards,
          favorites: [...state.favorites],
          textures: { warmth: state.warmth, patina: state.patina, turnDuration: state.speed, theme: state.theme },
        },
        null,
        2,
      ),
    ],
    { type: "application/json" },
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mon-grimoire.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast("Votre collection a été exportée.");
});
document.addEventListener("keydown", (e) => {
  if (!$("#workshop").hidden) {
    if (e.key === "Escape") closeWorkshop();
    if (e.key === "Tab") {
      const focusable = $$("button,a,input,select,textarea", $("#workshop")).filter(
        (x) => x.getClientRects().length && !x.disabled,
      );
      const first = focusable[0],
        last = focusable.at(-1);
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    return;
  }
  if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
  if (e.key === "ArrowRight") {
    e.preventDefault();
    turnPage(1);
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    turnPage(-1);
  }
});

/* ================= VISUELS (manifest.json) =================
   manifest.json associe une clé à un fichier de assets/.
   Fichier absent → on affiche son placeholder (assets/placeholders/).
   placeholder = null → le code garde son rendu de secours (couleurs CSS). */
const ASSETS = { manifest: {}, ok: {}, forceMissing: false };
const probe = (src) =>
  new Promise((done) => {
    if (!src) return done(false);
    const i = new Image();
    i.onload = () => done(true);
    i.onerror = () => done(false);
    i.src = src;
  });
async function loadAssets() {
  try {
    ASSETS.manifest = (await (await fetch("manifest.json", { cache: "no-cache" })).json()).assets || {};
  } catch {
    ASSETS.manifest = {};
  }
  await Promise.all(
    Object.entries(ASSETS.manifest).map(async ([k, v]) => {
      ASSETS.ok[k] = await probe(v.file);
    }),
  );
}
// URL à utiliser pour une clé du manifest ; `fallback` si la clé n'y figure pas.
function asset(key, fallback) {
  const e = ASSETS.manifest[key];
  if (!e) return fallback;
  return ASSETS.ok[key] && !ASSETS.forceMissing ? e.file : e.placeholder || undefined;
}
// Textures de fond (livre, parchemin, cuir, bois) : variables CSS --tex-<clé>.
function applyTextures() {
  for (const key of ["livre", "parchemin", "cuir", "bois"]) {
    const src = asset(key);
    document.documentElement.style.setProperty(`--tex-${key}`, src ? `url('${src}')` : "none");
  }
  // Sans l'image du livre, le code dessine deux pages de parchemin de secours.
  $("#book").classList.toggle("no-book", !asset("livre"));
}

/* ================= INTÉGRATION AU JEU =================
   Entrée : window.GrimoireUI.setData({...})
            ou postMessage({ to:'grimoire', type:'setData', data:{...} })
   Sortie : événements « grimoire:<nom> » sur window
            (+ postMessage({ from:'grimoire', event, detail }) au parent si la page est dans une iframe).
   Détail des données et des événements : README.md. */
const UI_ID = "grimoire";
function emit(name, detail = {}) {
  window.dispatchEvent(new CustomEvent(`${UI_ID}:${name}`, { detail }));
  if (window.parent !== window) window.parent.postMessage({ from: UI_ID, event: name, detail }, "*");
}
window.addEventListener("message", (e) => {
  const m = e.data;
  if (m && m.to === UI_ID && m.type === "setData") setData(m.data);
});

// data : { cards?: [{ id, name, art, category, faction, rarity, health, damage, mobility, resistance,
//                      quote, description, owned?, isNew?, img? }],
//          favorites?: [id], selected?: id,
//          features?: { workshop?, challenges?, rewards?, sound? } }
function setData(data = {}) {
  if (state.flipping) return void setTimeout(() => setData(data), 100);
  if (!$("#workshop").hidden) closeWorkshop();
  if (Array.isArray(data.cards)) cards = data.cards.map((c) => ({ ...c }));
  if (Array.isArray(data.favorites)) state.favorites = new Set(data.favorites);
  if (data.features && typeof data.features === "object") Object.assign(state.features, data.features);
  if (data.selected && cards.some((c) => c.id === data.selected)) state.selected = data.selected;
  else if (!cards.some((c) => c.id === state.selected)) state.selected = cards[0]?.id;
  state.section = "album";
  state.category = null;
  state.faction = null;
  state.rarity = null;
  state.query = "";
  state.page = 0;
  render();
}
window.GrimoireUI = {
  setData,
  getState: () => ({
    section: state.section,
    category: state.category,
    page: state.page,
    selected: state.selected,
    cards: cards.length,
    owned: cards.filter(isOwned).length,
    favorites: [...state.favorites],
    features: { ...state.features },
  }),
};

/* ================= PANNEAU DE TEST (fausses données, hors jeu) ================= */
const DEMO = { cards: DEFAULT_CARDS, favorites: [] };
const TESTS = [
  ["Données de démo", () => setData({ ...DEMO, cards: DEFAULT_CARDS.map((c) => ({ ...c })) })],
  ["Grimoire vide", () => setData({ cards: [] })],
  ["Une seule page (5 cartes)", () => setData({ cards: DEFAULT_CARDS.slice(0, 5) })],
  ["Toutes favorites", () => setData({ favorites: cards.map((c) => c.id) })],
  ["Aucune favorite", () => setData({ favorites: [] })],
  ["Toutes trouvées", () => setData({ cards: cards.map((c) => ({ ...c, owned: true })) })],
  ["Aucune trouvée", () => setData({ cards: cards.map((c) => ({ ...c, owned: false, isNew: false })) })],
  ["Nouvelles cartes", () => setData({ cards: cards.map((c, i) => ({ ...c, owned: true, isNew: i % 4 === 0 })) })],
  [
    "Mode jeu (sans atelier, défis, récompenses, son)",
    () => setData({ features: { workshop: false, challenges: false, rewards: false, sound: false } }),
  ],
  [
    "Mode démo (tout activé)",
    () => setData({ features: { workshop: true, challenges: true, rewards: true, sound: true } }),
  ],
  [
    "Visuels manquants on/off",
    () => {
      ASSETS.forceMissing = !ASSETS.forceMissing;
      applyTextures();
      render();
    },
  ],
  [
    "Effacer la sauvegarde",
    () => {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      location.reload();
    },
  ],
];
for (const [label, run] of TESTS) {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = label;
  b.onclick = run;
  document.getElementById("ui-tests").append(b);
}

applyTextureSettings();
loadAssets().then(() => {
  applyTextures();
  render();
  emit("ready");
});
