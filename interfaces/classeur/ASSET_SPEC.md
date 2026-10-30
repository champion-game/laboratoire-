# ASSET_SPEC — Classeur

Visuels dont l'interface a besoin. **Codex** produit les lignes « à faire » puis passe leur statut à « livré ».
Les clés et les chemins sont ceux de `manifest.json` : ne pas les renommer.

Statuts : `à faire` → `livré` (par Codex) → `validé` (par le propriétaire).

## Illustrations existantes (partagées entre plusieurs cartes)

Aujourd'hui les 47 cartes réutilisent ces 9 illustrations. Elles restent la référence de style.

| Clé | Fichier | Carte d'origine | Statut |
|---|---|---|---|
| `tm-0` | `assets/tm-0.webp` | Spectre (combattants) | livré |
| `tm-1` | `assets/tm-1.webp` | Incendiaire (lourds) | livré |
| `tm-2` | `assets/tm-2.webp` | Bastion (lourds) | livré |
| `tm-3` | `assets/tm-3.webp` | Insurgé (combattants) | livré |
| `tm-4` | `assets/tm-4.webp` | Éclaireuse (survivants) | livré |
| `tm-5` | `assets/tm-5.webp` | Corbeau (combattants) | livré |
| `tm-6` | `assets/tm-6.webp` | Artilleur (lourds) | livré |
| `tm-7` | `assets/tm-7.webp` | Sentinelle (tourelles) | livré |
| `tm-8` | `assets/tm-8.webp` | Viaduc (evenements) | livré |

## Illustrations propres à chaque carte

Une illustration par carte, pour remplacer l'illustration partagée.

- **Taille** : 512 × 512 px — **Format** : WebP, qualité ≈ 85 — **Transparence** : non (fond papier opaque).
- **Contenu** : uniquement l'illustration (pas de cadre, pas de texte) : le code la place dans le cadre de la carte
  et la recadre en `cover` → garder le sujet centré avec une marge de ≈ 8 %.
- **Style** : identique à `assets/tm-0.webp` … `assets/tm-8.webp` (personnage ou objet à l'encre noire,
  grande éclaboussure de couleur derrière, fond papier crème). Voir « Direction artistique » dans `AGENTS.md`.
- **Si le fichier manque** : l'interface garde l'illustration partagée `tm-<n>` actuelle.

| Clé | Fichier | Sujet (nom, catégories, rareté — description) | Statut |
|---|---|---|---|
| `carte-nomade` | `assets/cartes/carte-nomade.webp` | **Nomade** (survivants, Commune) — Tout ce dont il a besoin tient dans son sac. Chaque halte lui apprend une nouvelle manière de repartir. | à faire |
| `carte-vagabonde` | `assets/cartes/carte-vagabonde.webp` | **Vagabonde** (combattants, Rare) — Elle ne porte les couleurs d’aucun refuge. Sa loyauté se gagne sur la route, jamais autour d’une table. | à faire |
| `carte-pyromane` | `assets/cartes/carte-pyromane.webp` | **Pyromane** (lourds, Rare) — Ses réserves de carburant sont maigres, mais il sait faire durer chaque flamme jusqu’au prochain obstacle. | à faire |
| `carte-decontaminateur` | `assets/cartes/carte-decontaminateur.webp` | **Décontaminateur** (soutien, Rare) — Derrière son masque rayé, il surveille les jauges et prépare une voie sûre à travers les quartiers condamnés. | à faire |
| `carte-veilleur` | `assets/cartes/carte-veilleur.webp` | **Veilleur** (combattants, Commune) — Personne ne lui demande depuis combien de nuits il monte la garde. La lumière est toujours allumée à sa fenêtre. | à faire |
| `carte-caravane` | `assets/cartes/carte-caravane.webp` | **Caravane** (evenements, Rare) — Au bout de la piste, des moteurs fatigués annoncent l’arrivée de vivres, de nouvelles et de visages inconnus. | à faire |
| `carte-relais` | `assets/cartes/carte-relais.webp` | **Relais** (soutien, Rare) — Une vieille antenne suffit parfois à réunir les refuges. Son signal traverse la poussière et réveille les radios. | à faire |
| `carte-boutefeu` | `assets/cartes/carte-boutefeu.webp` | **Boutefeu** (combattants, Commune) — Toujours le premier debout et le dernier à manquer d’idées. Sa témérité donne du courage à toute l’escouade. | à faire |
| `carte-zone-rouge` | `assets/cartes/carte-zone-rouge.webp` | **Zone rouge** (evenements, Épique) — Les balises grésillent à l’entrée du secteur. Les anciens plans promettent des réserves, mais aucun chemin sans détour. | à faire |
| `carte-maraudeuse` | `assets/cartes/carte-maraudeuse.webp` | **Maraudeuse** (survivants, Commune) — Les entrepôts vides n’ont pas encore livré tous leurs secrets. Elle trouve une dernière réserve là où chacun a renoncé. | à faire |
| `carte-recuperateur` | `assets/cartes/carte-recuperateur.webp` | **Récupérateur** (survivants, Commune) — Il reconnaît une pièce utile sous trois couches de rouille. Rien ne se perd quand il ferme la marche. | à faire |
| `carte-passeuse` | `assets/cartes/carte-passeuse.webp` | **Passeuse** (survivants, Rare) — Elle connaît les tunnels oubliés et les gués silencieux. Ses voyageurs arrivent avant que l’aube les découvre. | à faire |
| `carte-pisteur` | `assets/cartes/carte-pisteur.webp` | **Pisteur** (survivants, Commune) — Une empreinte, une branche déplacée, un feu trop récent : le désert lui raconte tout ce qu’il faut savoir. | à faire |
| `carte-medecin` | `assets/cartes/carte-medecin.webp` | **Médecin de fortune** (survivants,soutien, Rare) — Sa trousse tient avec une sangle usée. Au milieu du chaos, ses gestes restent précis et sa voix reste calme. | à faire |
| `carte-messagere` | `assets/cartes/carte-messagere.webp` | **Messagère** (survivants, Commune) — Les lettres des refuges ne pèsent presque rien. Elle sait pourtant combien une seule peut changer la route. | à faire |
| `carte-ferrailleur` | `assets/cartes/carte-ferrailleur.webp` | **Ferrailleur** (survivants,tourelles, Rare) — Il emporte des boulons, des ressorts et quelques idées. Avant la nuit, un tas de débris devient un poste de garde. | à faire |
| `carte-archiviste` | `assets/cartes/carte-archiviste.webp` | **Archiviste** (survivants,evenements, Épique) — Elle sauve les cartes, les carnets et les noms. Dans sa sacoche, le monde d’avant indique encore où chercher. | à faire |
| `carte-guetteuse` | `assets/cartes/carte-guetteuse.webp` | **Guetteuse** (survivants, Commune) — Installée sur un toit effondré, elle repère la poussière des convois bien avant que les moteurs ne se fassent entendre. | à faire |
| `carte-exile` | `assets/cartes/carte-exile.webp` | **Exilé** (survivants, Commune) — Il ne parle jamais du refuge qu’il a quitté. Ses cartes portent des chemins que personne d’autre n’a empruntés. | à faire |
| `carte-chasseur-cendres` | `assets/cartes/carte-chasseur-cendres.webp` | **Chasseur de cendres** (survivants, Rare) — Sous les dunes grises, il suit les traces d’un monde encore vivant et revient avec de quoi nourrir le camp. | à faire |
| `carte-mecanicienne` | `assets/cartes/carte-mecanicienne.webp` | **Mécanicienne** (survivants,soutien, Rare) — Elle écoute les moteurs comme d’autres écoutent la pluie. Quelques tours de clé et la caravane peut reprendre sa marche. | à faire |
| `carte-lame-rouge` | `assets/cartes/carte-lame-rouge.webp` | **Lame rouge** (combattants, Rare) — Les ruelles étroites sont son terrain. Un signe de la main suffit à guider son escouade entre deux barricades. | à faire |
| `carte-franc-tireur` | `assets/cartes/carte-franc-tireur.webp` | **Franc-tireur** (combattants, Rare) — Il prend le temps de mesurer le vent. Depuis les hauteurs, il protège chaque pas de ceux qui traversent la place. | à faire |
| `carte-chasseur-primes` | `assets/cartes/carte-chasseur-primes.webp` | **Chasseur de primes** (combattants, Épique) — Il collectionne les contrats pliés dans la poche de son manteau. Une piste abandonnée est souvent celle qu’il préfère. | à faire |
| `carte-ecorcheur` | `assets/cartes/carte-ecorcheur.webp` | **Écorcheur** (combattants, Rare) — Ses protections portent les marques de cent passages difficiles. Les portes fermées le ralentissent rarement. | à faire |
| `carte-rodeur` | `assets/cartes/carte-rodeur.webp` | **Rôdeur** (combattants, Commune) — Il se déplace d’une ombre à l’autre, toujours à la lisière du camp. Ses avertissements arrivent sans un bruit. | à faire |
| `carte-porte-banniere` | `assets/cartes/carte-porte-banniere.webp` | **Porte-bannière** (combattants,evenements, Épique) — Le tissu rouge se voit au-dessus de la poussière. Tant qu’il flotte, les survivants savent où se retrouver. | à faire |
| `carte-colosse` | `assets/cartes/carte-colosse.webp` | **Colosse** (lourds, Épique) — Ses plaques de métal grincent à chaque pas. Il se place entre le danger et le convoi avec une assurance tranquille. | à faire |
| `carte-brise-mur` | `assets/cartes/carte-brise-mur.webp` | **Brise-mur** (lourds, Rare) — Un ancien équipement de chantier devenu une armure. Il ouvre les passages que les cartes disent condamnés. | à faire |
| `carte-mortier-mobile` | `assets/cartes/carte-mortier-mobile.webp` | **Mortier mobile** (lourds, Rare) — Les roues grincent, le tube tient bon. Son équipe installe un poste de soutien en quelques gestes parfaitement rodés. | à faire |
| `carte-faucheur` | `assets/cartes/carte-faucheur.webp` | **Faucheur** (lourds, Légendaire) — Sa vieille mitrailleuse est entretenue comme une relique. Quand il prend position, toute l’escouade gagne du terrain. | à faire |
| `carte-radio` | `assets/cartes/carte-radio.webp` | **Radio** (soutien, Commune) — Au milieu des parasites, une voix répond enfin. Il relie les patrouilles et garde le refuge à portée de signal. | à faire |
| `carte-sapeur` | `assets/cartes/carte-sapeur.webp` | **Sapeur** (soutien, Rare) — Il inspecte les ponts, consolide les abris et marque les passages sûrs. Sa craie blanche vaut toutes les boussoles. | à faire |
| `carte-ravitailleur` | `assets/cartes/carte-ravitailleur.webp` | **Ravitailleur** (soutien, Commune) — Les gourdes sont pleines et les réserves comptées. Sa présence rappelle que chaque expédition doit aussi pouvoir rentrer. | à faire |
| `carte-tourelle-jumelee` | `assets/cartes/carte-tourelle-jumelee.webp` | **Tourelle jumelée** (tourelles, Épique) — Deux canons, un seul axe de surveillance. Ses engrenages récupérés tournent avec une précision inattendue. | à faire |
| `carte-nid-mitrailleuse` | `assets/cartes/carte-nid-mitrailleuse.webp` | **Nid de mitrailleuse** (tourelles, Commune) — Quelques sacs de sable et un trépied bien calé. Ce petit poste protège la seule entrée encore praticable du refuge. | à faire |
| `carte-gardienne` | `assets/cartes/carte-gardienne.webp` | **Gardienne** (tourelles, Légendaire) — Son voyant rouge veille depuis avant la chute. Personne ne sait qui l’a construite, mais elle reconnaît encore les siens. | à faire |
| `carte-tempete` | `assets/cartes/carte-tempete.webp` | **Tempête de poussière** (evenements, Rare) — L’horizon disparaît sous un ciel de cuivre. Il faut serrer les rangs, couvrir les réserves et attendre que le vent choisisse une autre route. | à faire |

## Placeholders

`assets/placeholders/` contient des images de substitution générées par le code (Claude). Codex n'y touche pas.
