describe("Page d'accueil", () => {
  it("se charge correctement", () => {
    cy.visit("/");
    cy.get("body").should("be.visible");
  });
});

describe("Titre de l'onglet", () => {
  it("affiche le bon titre", () => {
    cy.visit("/");
    cy.title().should("eq", "Kevin Auchoybur – Analyste QA");
  });
});
