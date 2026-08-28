beforeEach(() => {
  cy.visit("/");
});

describe("Page Mes compétences", () => {
  it("affiche la section Mes compétences", () => {
    cy.get("#expertises").should("be.visible");
  });
});

describe("Page Mes compétences", () => {
  it("affiche le bloc Tests fonctionnels", () => {
    cy.get('[data-i18n="skills.g1.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Tests fonctionnels");
  });
});

describe("Page Mes compétences", () => {
  it("affiche le bloc Tests automtisés", () => {
    cy.get('[data-i18n="skills.g2.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Tests automatisés");
  });
});

describe("Page Mes compétences", () => {
  it("affiche le bloc Méthodologie", () => {
    cy.get('[data-i18n="skills.g3.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Méthodologie");
  });
});

describe("Page Mes compétences", () => {
  it("affiche le bloc Suivi qualité", () => {
    cy.get('[data-i18n="skills.g4.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Suivi qualité");
  });
});

describe("Page Mes compétences", () => {
  it("Le lien pointe sur Mes projets", () => {
     cy.get(".skx-projects-cta").should("have.attr", "href")
    .and("include", "#projects");
  });
});