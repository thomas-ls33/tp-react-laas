<!-- Instructions concises pour les agents IA travaillant sur ce dépôt -->
# Guide rapide pour l'agent Copilot

Ce dépôt est une application React (Vite) minimale qui consomme l'API TheMovieDB.
Ci-dessous les points essentiels pour devenir productif rapidement et respecter les conventions du projet.

- **Démarrage / commandes**:
  - `npm install` — installer les dépendances.
  - `npm run dev` — lance le serveur de dev Vite (HMR).
  - `npm run build` — build de production.
  - `npm run preview` — prévisualiser le build produit.
  - `npm run lint` — lancer ESLint.

- **Architecture haute-niveau**:
  - Entrée : `src/main.jsx` -> `src/App.jsx` (Routes).
  - Routes principales définies dans `src/App.jsx` : `/` (accueil) et `/focus/:id` (page de focus).
  - Logique d'accès aux données centralisée dans `src/api/api.js` (fonctions exportées : `getTrendingMovies`, `getPopularSeries`, `getMovieDetails`, `getSeriesDetails`, `getMovieCredits`, `getSeriesCredits`, `getImageUrl`).
  - Composants UI organisés par dossier : `src/components/<Component>/<Component>.jsx` et `<Component>.scss`.

- **Conventions de composant**:
  - Chaque composant est dans un dossier dédié (par ex. `src/components/NavBar/NavBar.jsx`).
  - Styles SCSS per-component (fichiers `.scss` avec import local, p.ex. `import "./NavBar.scss"`).
  - Composants exportés par défaut (`export default`).

- **Patterns observés**:
  - Présentation + récupération d'API clairement séparées : UI dans `components/*`, appels réseau dans `src/api/api.js`.
  - Usage de `react-router-dom` (version 7) : routes déclarées avec `<Routes>` et `<Route path="..." element={...} />`.
  - Images servies via `getImageUrl` / `getBackdropUrl` helpers.

- **Points d'attention spécifiques au dépôt**:
  - L'API key TMDB est présente en clair dans `src/api/api.js`. Ne la dupliquez pas dans les commits. Proposer de la migrer vers des variables d'environnement (`import.meta.env.VITE_TMDB_KEY`) si vous modifiez l'API.
  - Quelques imports montrent des variations de casse (`NavBar` vs `Navbar`) — Windows tolère, mais Linux/CI peuvent casser : veillez à utiliser la casse exacte des dossiers/fichiers.
  - Pas de suite de tests incluse ; n'ajoutez pas de dépendances de test sans validation préalable.

- **Exemples pratiques pour l'agent**:
  - Pour afficher les détails d'une série : appeler `const data = await getSeriesDetails(id)` (depuis un effet React) puis utiliser `getImageUrl(data.poster_path)`.
  - Pour ajouter une nouvelle route : modifier `src/App.jsx` en ajoutant une entrée `<Route path="/nouvelle" element={<MonComposant />} />` et créer `src/components/MonComposant/MonComposant.jsx` + `.scss`.

- **Fichiers à consulter en priorité**:
  - `src/api/api.js` — logique réseau et helpers d'URL d'images.
  - `src/App.jsx`, `src/main.jsx` — routes et bootstrap.
  - Un ou deux composants représentatifs : `src/components/NavBar/NavBar.jsx`, `src/components/FocusPage/FocusPage.jsx`, `src/components/TrendingDisplay/TrendingDisplay.jsx`.
  - `package.json`, `vite.config.js` — scripts et configuration Vite.

- **Règles pour les contributions automatiques**:
  - Respecter la structure `src/components/<Name>/<Name>.jsx` + `<Name>.scss`.
  - Ne **pas** committer de clés/API en clair : si vous introduisez des variables d'environnement, documentez l'usage dans `README.md`.
  - Éviter les changements breaking dans les routes existantes (`/` et `/focus/:id`) sans mise à jour d'`App.jsx`.

Si une section manque de contexte ou si vous voulez que j'ajoute des snippets précis (ex. modèle de composant, migration d'API key vers `import.meta.env`), dites-le et j'adapte ce fichier. Merci de me dire si vous préférez que je corrige aussi les imports dont la casse est inconsistante.
