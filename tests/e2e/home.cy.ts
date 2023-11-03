describe("hero section", () => {
  it("has h1 title with my name in it", () => {
    cy.visit("/");
    cy.get("h1").contains("Azvya's Portofolio");
  });
});
