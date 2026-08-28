beforeEach(() => {
  cy.visit("/");
});

describe("Page d'accueil", () => {
  it("se charge correctement", () => {
    cy.get("body").should("be.visible");
  });
});

describe("Titre de l'onglet", () => {
  it("affiche le bon titre", () => {
    cy.title().should("eq", "Kevin Auchoybur – Analyste QA");
  });
});

describe("Le bouton Télécharger mon CV", () => {
  it("pointe sur le CV", () => {
     cy.get("#heroDownloadCv").should("have.attr", "href")
    .and("include", "cv-fr-KevinAuchoybur.pdf");
  });
});

describe("Le bouton LinkedIn", () => {
  it("pointe sur le profil LinkedIn", () => {
    cy.get(".btn-linkedin-icon").should("have.attr", "href")
    .and("include", "in/kevin-auchoybur-17a15a42/");
  });
});

describe("Le bouton Whatsapp", () => {
  it("pointe sur la discussion Whatsapp", () => {
    cy.get("#heroWhatsapp").should("have.attr", "href")
    .and("include", "wa.me/33641931342?text=Bonjour%20Kevin%2C%20je%20d%C3%A9couvre%20votre%20portfolio%20et%20souhaiterais%20%C3%A9changer%20avec%20vous.");
  });
});

describe("Le bouton GitHub", () => {
  it("pointe sur le profil GitHub", () => {
    cy.get(".btn-github-icon").should("have.attr", "href")
    .and("include", "github.com/KevinAuchoybur");
  });
});

