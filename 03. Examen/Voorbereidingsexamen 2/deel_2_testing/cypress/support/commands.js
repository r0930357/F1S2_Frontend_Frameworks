Cypress.Commands.add('getByData', (selector) => {
    // Added because data will be generated during each test (since localstorage is cleared).
    // Generating can take a bit of time, without this timeout test will be unreliable.
    cy.wait(250)
    return cy.get(`[data-cy="${selector}"]`);
})
