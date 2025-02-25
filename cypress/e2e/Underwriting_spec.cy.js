describe('Underwriting Tests', () => {
  const underwriterFixture = 'underwriter.json';
  beforeEach(() => {
    // Log in before each test
    cy.login();
    // Visit the underwriting page
    // UNID for 7 WONDERS OF CHINA, a program pulled by the supplier
    cy.visit('/program/BAFD811A88C0DD4085258C070070FCE2');
    // Activate the Underwriting tab by clicking its header
    cy.contains('[role="tab"]', 'Underwriting').click(); // Click the tab header
    cy.get('[data-testid="underwriterTab"]').should('be.visible'); // Wait for the tab panel to be visible
  });

  it('should create a new underwriter', () => {
    // Load the fixture data
    cy.fixture(underwriterFixture).then((underwriter) => {
      // Click the "Add Underwriter" button
      cy.get('button').contains('Add Underwriter').should('be.visible'); // Ensure the button is visible
      cy.get('button').contains('Add Underwriter').click(); // Open the modal
  
      // Wait for the modal to be visible and interact with it
      cy.get('.modal').should('be.visible'); // Wait for the modal to be visible
      cy.get('.modal').within(() => {
        cy.get('input[name="Underwriter"]').type(underwriter.Underwriter); // Fill out the Underwriter field
        cy.get('input[name="Amount"]').type(underwriter.Amount); // Fill out the Amount field
        cy.get('#notes').type(underwriter.Notes); // Fill out the Notes field
        cy.get('input[name="DurationSeconds"]').type(underwriter.DurationSeconds); // Fill out the Duration field
        cy.get('button').contains('Submit').click(); // Submit the form
      });
  
      // Verify that the new underwriter is displayed in the list
      cy.contains(underwriter.Underwriter).should('exist');
    });
  });
  it('should edit an existing underwriter', () => {
    // Load the fixture data
    cy.fixture(underwriterFixture).then((underwriter) => {
      // Intercept the API call to edit an underwriter
      cy.intercept('PUT', '**/editUnderwriter').as('editUnderwriter');

      // Click the edit button for the first underwriter in the list
      cy.get('.edit-icon').first().click();

      // Update the form fields
      cy.get('#Underwriter').clear().type('Updated Underwriter');
      cy.get('[name="Amount"]').clear().type('60000.0');
      cy.get('#Notes').clear().type('Updated notes');

      // Save the changes
      cy.get('button').contains('Save Changes').click();

      // Assert that the updated underwriter is displayed in the list
      cy.contains('Updated Underwriter').should('exist');
    });
  });

  it('should delete an existing underwriter', () => {

    // Click the delete button for the first underwriter in the list
    cy.get('.delete-icon').first().click();

    // Confirm the deletion
    cy.get('button').contains('Confirm Delete').click();

    // Assert that the underwriter is no longer displayed in the list
    cy.contains('Updated Underwriter').should('not.exist');
  });
});