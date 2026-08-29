describe("Page À propos de moi", () => {
beforeEach(() => {
  cy.visit("/");
});

  it("affiche la section À propos", () => {
    cy.get("#about").should("be.visible");
  });

  it("affiche le bloc Ma vision du métier", () => {
    cy.get('[data-i18n="about.vision.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Ma vision du métier");
  });

  it("affiche le bloc Mon parcours", () => {
    cy.get('[data-i18n="career.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Mon parcours");
  });

  it("bloc Mon Parcours - Le lien pointe sur Mes expériences", () => {
     cy.get(".abx-parcours-cta").should("have.attr", "href")
    .and("include", "#experiences");
  });

  it("bloc Mes certifications", () => {
    cy.get('[data-i18n="about.certifs.title"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Mes certifications");
  });

  it("bloc Ma devise", () => {
    cy.get('[data-i18n="about.mottoLabel"]')
    .scrollIntoView()
    .should("be.visible")
    .and("contain.text", "Ma devise");
  });
 });
