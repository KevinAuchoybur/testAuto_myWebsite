describe("Page Mes projets", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("affiche la section Mes projets", () => {
    cy.get("#projects").should("be.visible");
  });

  it("affiche le bloc Kevinauchoybur.me", () => {
    cy.contains("#projects .repo-card", "Kevinauchoybur.me")
    .scrollIntoView()
    .should("be.visible");
  });

   it("affiche le bloc AS Monaco FC", () => {
    cy.contains("#projects .repo-card", "AS Monaco FC")
    .scrollIntoView()
    .should("be.visible");
  });

  it("affiche le bloc Restful-Booker", () => {
    cy.contains("#projects .repo-card", "Restful-Booker")
    .scrollIntoView()
    .should("be.visible");
  });

});
