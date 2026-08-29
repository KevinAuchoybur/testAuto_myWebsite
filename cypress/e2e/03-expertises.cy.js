describe("Page Mes compétences", () => {
beforeEach(() => {
  cy.visit("/");
});

  it("affiche la section Mes compétences", () => {
    cy.get("#expertises").should("be.visible");
  });


  it("affiche le bloc Tests fonctionnels", () => {
    cy.get('[data-i18n="skills.g1.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Tests fonctionnels");
  });


  it("affiche le bloc Tests automtisés", () => {
    cy.get('[data-i18n="skills.g2.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Tests automatisés");
  });

  it("affiche le bloc Méthodologie", () => {
    cy.get('[data-i18n="skills.g3.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Méthodologie");
  });


  it("affiche le bloc Suivi qualité", () => {
    cy.get('[data-i18n="skills.g4.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Suivi qualité");
  });


it("Le lien pointe sur Mes projets", () => {
     cy.get(".skx-projects-cta").should("have.attr", "href")
    .and("include", "#projects");
  });
});