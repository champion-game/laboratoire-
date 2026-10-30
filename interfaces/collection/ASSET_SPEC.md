# ASSET_SPEC — Collection

Visuels dont l'interface a besoin. **Codex** produit les lignes « à faire » puis passe leur statut à « livré ».
Les clés et les chemins sont ceux de `manifest.json` : ne pas les renommer.

Statuts : `à faire` → `livré` (par Codex) → `validé` (par le propriétaire).

## Cartes complètes illustrées

Une image par carte, **cadre compris**, utilisée telle quelle comme face de la carte.

- **Taille** : 768 × 1152 px (ratio 2:3) — **Format** : WebP, qualité ≈ 85 — **Transparence** : non (fond opaque).
- **Mise en page** : reprendre exactement celle de la référence `assets/cartes/carte-traqueur.webp`
  (cadre de métal riveté, illustration en haut, bandeau du nom et panneau de texte **laissés vides**,
  emplacements des 3 pastilles coût / attaque / PV **laissés vides**). Le code écrit le nom, le texte et les chiffres par-dessus.
- **Style** : voir « Direction artistique » dans `AGENTS.md` (encre noire, éclaboussure de couleur derrière le sujet, papier vieilli).
- **Si le fichier manque** : l'interface dessine la carte en SVG (rendu actuel). Rien à faire côté code quand le fichier arrive.

| Clé | Fichier | Sujet (nom, catégories — texte de la carte) | Statut |
|---|---|---|---|
| `carte-traqueur` | `assets/cartes/carte-traqueur.webp` | Le Traqueur (humains,tireurs) — Inflige +2 dégâts aux zombies isolés. | livré |
| `carte-partisane` | `assets/cartes/carte-partisane.webp` | La Partisane (humains,tireurs) — Quand elle entre en jeu, piochez une carte Munitions. | à faire |
| `carte-chien` | `assets/cartes/carte-chien.webp` | Molosse (speciaux) — Flair : révèle le prochain zombie de la horde. | à faire |
| `carte-bouclier` | `assets/cartes/carte-bouclier.webp` | Le Rempart (humains) — Les alliés adjacents subissent 1 dégât de moins. | à faire |
| `carte-tourelle` | `assets/cartes/carte-tourelle.webp` | Tourelle (armes) — Tire sur le premier zombie de la ligne à chaque fin de tour. | à faire |
| `carte-rodeur` | `assets/cartes/carte-rodeur.webp` | Rôdeur (zombies) — Rapide : attaque le tour où il apparaît. | à faire |
| `carte-colosse` | `assets/cartes/carte-colosse.webp` | Le Colosse (zombies) — Inflige le double de dégâts aux barricades. | à faire |
| `carte-sacs` | `assets/cartes/carte-sacs.webp` | Sacs de sable (murs) — Bloque une ligne. Les Tireurs derrière gagnent +1 PV. | à faire |
| `carte-jerrican` | `assets/cartes/carte-jerrican.webp` | Jerrican (ressources) — Gagnez 2 carburants, ou sacrifiez-le pour enflammer une ligne. | à faire |
| `carte-medikit` | `assets/cartes/carte-medikit.webp` | Trousse de soin (consommables) — Rend 4 PV à un humain. | à faire |
| `carte-fusee` | `assets/cartes/carte-fusee.webp` | Fusée éclairante (evenements) — Tous les zombies sont révélés jusqu'à la fin du tour. | à faire |
| `carte-barbeles` | `assets/cartes/carte-barbeles.webp` | Barbelés (murs) — Les zombies qui attaquent ce mur subissent 1 dégât. | à faire |
| `carte-pillard` | `assets/cartes/carte-pillard.webp` | Pillard (humains) — Quand il élimine un zombie, gagnez 1 ressource. | à faire |

## Placeholders

`assets/placeholders/` contient des images de substitution générées par le code (Claude). Codex n'y touche pas.
