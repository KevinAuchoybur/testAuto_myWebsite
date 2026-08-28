beforeEach(() => {
  cy.visit("/");
});

describe("Page A propos", () => {
  it("affiche la section À propos", () => {
    cy.get("#about").should("be.visible");
  });
});