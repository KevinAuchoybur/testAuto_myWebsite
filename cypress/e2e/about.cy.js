beforeEach(() => {
  cy.visit("/");
});

describe("Page A propos", () => {
  it("affiche la section À propos", () => {
    cy.get("#about").should("be.visible");
  });
});

describe("Page A propos", () => {
  it("affiche le bloc Ma vision du métier", () => {
    cy.get('[data-i18n="about.vision.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Ma vision du métier");
  });
});

describe("Page A propos", () => {
  it("affiche le bloc Mon parcours", () => {
    cy.get('[data-i18n="career.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Mon parcours");
  });
});

describe("Page A propos", () => {
  it("bloc Mon Parcours - Le lien pointe sur Mes expériences", () => {
     cy.get(".abx-parcours-cta").should("have.attr", "href")
    .and("include", "#experiences");
  });
});

describe("Page A propos", () => {
  it("bloc Mes certifications", () => {
    cy.get('[data-i18n="about.certifs.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Mes certifications");
  });
});

describe("Page A propos", () => {
  it("bloc Ma devise", () => {
    cy.get('[data-i18n="about.mottoLabel"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Ma devise");
  });
});