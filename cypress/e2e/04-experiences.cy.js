describe("Page Mes expériences", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("affiche la section Mes expériences", () => {
    cy.get("#experiences").should("be.visible");
  });

  it("affiche le bloc MonGuichet.mc", () => {
    cy.contains("#experiences .project-card", "MonGuichet.mc")
      .scrollIntoView()
      .should("be.visible");
  });

  it("affiche le bloc Powercard", () => {
    cy.contains("#experiences .project-card", "Powercard")
      .scrollIntoView()
      .should("be.visible");
  });

  it("affiche le bloc Système de régularisation des carrières", () => {
    cy.contains("#experiences .project-card", "Système de régularisation des carrières")
      .scrollIntoView()
      .should("be.visible");
  });
});
