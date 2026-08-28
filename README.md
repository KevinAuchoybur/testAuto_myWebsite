# Tests E2E – kevinauchoybur.me

Suite de tests end-to-end (E2E) écrite avec [Cypress](https://www.cypress.io/) pour mon site [kevinauchoybur.me](https://kevinauchoybur.me/).

## Scénarios automatisés

**6 tests** répartis dans `cypress/e2e/home.cy.js`.

| Fichier | Scénario | Vérification |
|---|---|---|
| `cypress/e2e/home.cy.js` | Chargement de la page d'accueil | La page se charge et le `<body>` est visible |
| `cypress/e2e/home.cy.js` | Titre de l'onglet | Le `<title>` de la page vaut `Kevin Auchoybur – Analyste QA` |
| `cypress/e2e/home.cy.js` | Bouton « Télécharger mon CV » | Le lien pointe vers `cv-fr-KevinAuchoybur.pdf` |
| `cypress/e2e/home.cy.js` | Bouton LinkedIn | Le lien pointe vers le profil LinkedIn |
| `cypress/e2e/home.cy.js` | Bouton WhatsApp | Le lien pointe vers la discussion WhatsApp (`wa.me`) |
| `cypress/e2e/home.cy.js` | Bouton GitHub | Le lien pointe vers le profil GitHub |

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
npx cypress run --spec "cypress/e2e/home.cy.js"
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
