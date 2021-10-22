describe('Hello, World!', () => {
  it('Hello, World!', () => {
    cy.visit('/');
    cy.contains('Hello, World!');
  });
});
