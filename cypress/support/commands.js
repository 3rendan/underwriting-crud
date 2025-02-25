Cypress.Commands.add('login', () => {
  // Make a POST request to the authentication endpoint
  cy.request({
    method: 'POST',
    url: `${Cypress.env('REACT_APP_HOST_ENDPOINT')}/auth`, // Use Cypress.env to access environment variables
    body: {
      username: 'Administrator',
      password: 'OffDomino#2025',
    },
  }).then((response) => {
    // Check if the response contains a bearer token
    const bearerToken = response.body?.bearer;
    if (!bearerToken) {
      throw new Error('No bearer token received');
    }

    // Store the token in localStorage or a Cypress environment variable
    window.localStorage.setItem('token', bearerToken);
    Cypress.env('bearerToken', bearerToken); // Optional: Store the token in Cypress.env for reuse
  });
});