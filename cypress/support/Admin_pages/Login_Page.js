let testData= {}
before(function(){
    cy.fixture('CloudApp/loginData.json').as('Login_dataset').then(function(data){
        testData.data =data
    })
})

Cypress.Commands.add('visitsite',() =>{
    cy.visit(testData.data.siteURL)
    })

Cypress.Commands.add('login', () =>{
    cy.wait(1000)
    cy.get('#username').type(testData.data.user_email)
    cy.get('#password').type(testData.data.user_password)
    cy.wait(1000)
    cy.get('form > .w-full').click()
})

Cypress.Commands.add('logout', () =>{
    cy.wait(2000)
    cy.get('.scam-user-info-dd').click()
    cy.wait(2000)
    cy.get('.user-profile-container > div.text-primary').click()
    cy.wait(2000)
    cy.get('.sc-modal-body > :nth-child(2) > .ml-4').click()
    cy.wait(3500)
})