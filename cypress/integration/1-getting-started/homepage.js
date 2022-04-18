describe('homepage', () => {
  it('renders', () => {
    cy.visit('/');
    cy.get('#container').should('exist');
  });

  it('modal open', () => {
    cy.visit('/');
    cy.get('#sign-up').click();
    
  })
});


