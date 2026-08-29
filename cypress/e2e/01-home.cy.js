describe("Page d'accueil", () => {
beforeEach(() => {
  cy.visit("/");
});

  it("se charge correctement", () => {
    cy.get("body").should("be.visible");
  });


  it("affiche le bon titre d'onglet", () => {
    cy.title().should("eq", "Kevin Auchoybur – Analyste QA");
  });

  it("Le bouton Télécharger mon CV pointe sur le CV", () => {
     cy.get("#heroDownloadCv").should("have.attr", "href")
    .and("include", "cv-fr-KevinAuchoybur.pdf");
  });

  it("Le bouton LinkedIn pointe sur le profil LinkedIn", () => {
    cy.get(".btn-linkedin-icon").should("have.attr", "href")
    .and("include", "in/kevin-auchoybur-17a15a42/");
  });

  it("Le bouton Whatsapp pointe sur la discussion Whatsapp", () => {
    cy.get("#heroWhatsapp").should("have.attr", "href")
    .and("include", "wa.me/33641931342?text=Bonjour%20Kevin%2C%20je%20d%C3%A9couvre%20votre%20portfolio%20et%20souhaiterais%20%C3%A9changer%20avec%20vous.");
  });

  it("Le bouton Github pointe sur le profil GitHub", () => {
    cy.get(".btn-github-icon").should("have.attr", "href")
    .and("include", "github.com/KevinAuchoybur");
  });
  
});