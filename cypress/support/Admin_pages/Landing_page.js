Cypress.Commands.add('select_campaign', () =>{
    cy.wait(1000)
    cy.contains('Campaign').click()
})