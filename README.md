# Tests E2E – kevinauchoybur.me

Suite de tests end-to-end (E2E) écrite avec [Cypress](https://www.cypress.io/) pour mon site [kevinauchoybur.me](https://kevinauchoybur.me/).

## Scénarios automatisés

**26 tests** répartis dans `cypress/e2e/`.

Les fichiers sont préfixés (`01-`, `02-`, …) pour fixer l'ordre d'exécution, qui suit la lecture des sections du site : accueil → à propos → compétences → expériences → projets.

| Fichier | Scénario | Vérification |
|---|---|---|
| `cypress/e2e/01-home.cy.js` | Chargement de la page d'accueil | La page se charge et le `<body>` est visible |
| `cypress/e2e/01-home.cy.js` | Titre de l'onglet | Le `<title>` de la page vaut `Kevin Auchoybur – Analyste QA` |
| `cypress/e2e/01-home.cy.js` | Bouton « Télécharger mon CV » | Le lien pointe vers `cv-fr-KevinAuchoybur.pdf` |
| `cypress/e2e/01-home.cy.js` | Bouton LinkedIn | Le lien pointe vers le profil LinkedIn |
| `cypress/e2e/01-home.cy.js` | Bouton WhatsApp | Le lien pointe vers la discussion WhatsApp (`wa.me`) |
| `cypress/e2e/01-home.cy.js` | Bouton GitHub | Le lien pointe vers le profil GitHub |
| `cypress/e2e/02-about.cy.js` | Section « À propos » | La section `#about` est visible |
| `cypress/e2e/02-about.cy.js` | Bloc « Ma vision du métier » | Le bloc est visible et contient le libellé attendu |
| `cypress/e2e/02-about.cy.js` | Bloc « Mon parcours » | Le bloc est visible et contient le libellé attendu |
| `cypress/e2e/02-about.cy.js` | CTA « Mon parcours » | Le lien pointe vers la section des expériences (`#experiences`) |
| `cypress/e2e/02-about.cy.js` | Bloc « Mes certifications » | Le bloc est visible et contient le libellé attendu |
| `cypress/e2e/02-about.cy.js` | Bloc « Ma devise » | Le bloc est visible et contient le libellé attendu |
| `cypress/e2e/03-expertises.cy.js` | Section « Mes compétences » | La section `#expertises` est visible |
| `cypress/e2e/03-expertises.cy.js` | Bloc « Tests fonctionnels » | Le bloc est visible et contient le libellé attendu |
| `cypress/e2e/03-expertises.cy.js` | Bloc « Tests automatisés » | Le bloc est visible et contient le libellé attendu |
| `cypress/e2e/03-expertises.cy.js` | Bloc « Méthodologie » | Le bloc est visible et contient le libellé attendu |
| `cypress/e2e/03-expertises.cy.js` | Bloc « Suivi qualité » | Le bloc est visible et contient le libellé attendu |
| `cypress/e2e/03-expertises.cy.js` | CTA « Mes projets » | Le lien pointe vers la section des projets (`#projects`) |
| `cypress/e2e/04-experiences.cy.js` | Section « Mes expériences » | La section `#experiences` est visible |
| `cypress/e2e/04-experiences.cy.js` | Bloc « MonGuichet.mc » | La carte est visible dans `#experiences` |
| `cypress/e2e/04-experiences.cy.js` | Bloc « Powercard » | La carte est visible dans `#experiences` |
| `cypress/e2e/04-experiences.cy.js` | Bloc « Système de régularisation des carrières » | La carte est visible dans `#experiences` |
| `cypress/e2e/05-projects.cy.js` | Section « Mes projets » | La section `#projects` est visible |
| `cypress/e2e/05-projects.cy.js` | Bloc « Kevinauchoybur.me » | La carte est visible dans `#projects` |
| `cypress/e2e/05-projects.cy.js` | Bloc « AS Monaco FC » | La carte est visible dans `#projects` |
| `cypress/e2e/05-projects.cy.js` | Bloc « Restful-Booker » | La carte est visible dans `#projects` |

## Installation

```
npm install
```

## Lancer les tests

Interface graphique (mode interactif, pour écrire/déboguer) :
```
npx cypress open
```

Mode headless (CLI, sans interface, pour CI) :
```
npx cypress run
```

Lancer un seul fichier de test :
```
npx cypress run --spec "cypress/e2e/01-home.cy.js"
```

Sortie minimale (reporter "dot") :
```
npx cypress run --reporter dot
```

## Générer un rapport

Le rapport HTML est généré automatiquement via [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) à chaque exécution de :
```
npx cypress run
```

Il est ensuite disponible ici :
```
cypress/reports/html/index.html
```
Ouvrir ce fichier dans un navigateur pour consulter le rapport (résultats, durées, captures d'écran des échecs).

## Rapport publié en ligne

À chaque `push` sur `main`, le workflow GitHub Actions (`.github/workflows/e2e.yml`) exécute la suite puis publie le rapport Mochawesome sur GitHub Pages :

<https://kevinauchoybur.github.io/testAuto_myWebsite/>

Le rapport est publié même si des tests échouent.

### Activation (une seule fois)

Dans le repo GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
