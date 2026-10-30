# Laboratoire — bibliothèque d'interfaces de jeu

## Rôles

- **Claude Code (toi)** : tout le **code** des interfaces (HTML, CSS, JS, manifest, docs).
  Tu ne crées **aucune image finale**, à l'exception des images de substitution dans
  `interfaces/<nom>/assets/placeholders/`.
- **Codex** (voir `AGENTS.md`) : tous les **visuels** (textures, fonds, icônes, cadres, illustrations),
  dans `interfaces/<nom>/assets/` uniquement.
- Le propriétaire travaille en ligne sur GitHub, sans environnement local ni PowerShell.

## Structure

```
index.html                 menu : uniquement une liste de liens vers interfaces/*/index.html
interfaces/<nom>/
  index.html               page autonome de l'interface
  style.css                styles de cette interface uniquement
  script.js                code de cette interface uniquement
  assets/                  ses visuels à elle (+ fonts/, placeholders/)
  ASSET_SPEC.md            visuels dont elle a besoin (avec statut)
  manifest.json            clé → fichier, avec placeholder si le fichier manque
  README.md                description, statut, données attendues, événements émis
AGENTS.md                  consignes de Codex (visuels)
INTEGRATION.md             copier une interface validée dans le jeu
```

## Règle absolue : chaque interface est 100 % autonome

Modifier, casser ou supprimer une interface ne doit avoir **aucun** impact sur les autres ni sur le menu.

- **Aucun fichier partagé** : pas de dossier commun, pas de CSS ni de JS global. Si deux interfaces ont
  besoin du même visuel, de la même police ou du même code, chacune a **sa propre copie**.
- **Une page par interface** : aucune variable, aucun style ni aucun script ne peut passer d'une interface à l'autre.
  Les clés `localStorage` sont préfixées par le nom de l'interface (`<nom>:...`).
- **Chemins relatifs au dossier de l'interface** (`assets/...`). Aucun chemin vers un autre dossier
  d'interface. Aucune ressource externe (CDN, Google Fonts…) : tout est copié dans `assets/`.
- **Aucune interface n'appelle, n'importe ni ne fait de lien vers une autre.** Seul le menu fait des liens.
  Chaque interface a un seul lien sortant : « ← Retour au menu » (`../../index.html`).
- **Le menu ne dépend d'aucune interface** : c'est du HTML statique. Si un dossier manque ou est cassé, le menu fonctionne.
- **Fausses données intégrées** : chaque interface fonctionne seule avec des données de démo et propose
  un panneau « Tester » (en bas à gauche) avec des boutons pour passer d'un état à l'autre (vide, une seule page,
  visuels manquants…).
- **Prête pour le jeu** : l'interface reçoit ses données de l'extérieur (`window.<Nom>UI.setData(data)` ou
  `postMessage({ to: '<nom>', type: 'setData', data })`). Elle renvoie des événements (`<nom>:<événement>`
  sur `window` et `postMessage` au parent). Elle ne dépend jamais du code du jeu.

## Comment travailler

- Quand tu travailles sur une interface, tu ne modifies **que son dossier** `interfaces/<nom>/`.
  Si une demande t'oblige à toucher un autre dossier (une autre interface, le menu, `AGENTS.md`…),
  **tu demandes d'abord** au propriétaire. Seule exception : l'ajout du `<li>` d'une nouvelle interface dans `index.html`.
- **Besoin d'un visuel** : ajoute une ligne `à faire` dans l'`ASSET_SPEC.md` de l'interface (clé, fichier, taille,
  format, transparence, description). Ajoute la clé dans `manifest.json` et prévois un placeholder dans
  `assets/placeholders/` (ou un rendu de secours dessiné par le code, avec `"placeholder": null`).
- **Nouvelle interface** : crée le dossier complet (les 7 éléments ci-dessus), avec données de démo, panneau Tester,
  API `setData` et événements, puis ajoute son lien dans `index.html`.
- **Vérification** après chaque modification : l'interface s'ouvre seule sans erreur, ses boutons de test
  fonctionnent et le menu fonctionne toujours.
- Ne modifie jamais `interfaces/*/assets/` en dehors de `placeholders/` et `fonts/` : c'est le domaine de Codex.

## Git

- Une fois le travail poussé, ouvrir la pull request et la fusionner dans la branche principale directement,
  sans demander confirmation.
