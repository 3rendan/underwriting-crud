Cypress.Commands.add('login', () => {
  // Replace with your actual login logic
  cy.visit('/login');
  cy.get('#username').type('Administrator');
  cy.get('#password').type('OffDomino#2025');
  cy.get('form').submit();
  cy.url().should('include', '/dashboard'); // Adjust based on your app's behavior
});