let testData= {}
before(function(){
    cy.fixture('LoginData.json').as('Login_dataset').then(function(data){
        testData.data =data
    })
})
Cypress.Commands.add('VisitSite',() =>{
    cy.visit(testData.data.sideloading.siteURL)
})
Cypress.Commands.add('VisitHomePage',() =>{
    cy.visit(testData.data.sideloading.homeurl)
})
Cypress.Commands.add('LoginAsAutomationAdmin', () =>{
    cy.wait(1000)
    cy.get('#username').type(testData.data.Admin.automation_admin.user_email)
    cy.get('#password').type(testData.data.Admin.automation_admin.user_password)
    cy.wait(1000)
    cy.get('form > .w-full').click()
})
Cypress.Commands.add('LoginAsAutomationAdminWithsession', () =>{
    cy.session(['bis_data'], () => {
            cy.VisitSite()
            cy.LoginAsAutomationAdmin()
            cy.url().should('contain', '/oni?tab=all')
        },
        {
            cacheAcrossSpecs: true
        })
})
Cypress.Commands.add('LoginAsShikder', () =>{
    cy.wait(1000)
    cy.get('#username').type(testData.data.Admin.shikder.user_email)
    cy.get('#password').type(testData.data.Admin.shikder.user_password)
    cy.wait(1000)
    cy.get('form > .w-full').click()
})
Cypress.Commands.add('LoginAsSabbir', () =>{
    cy.wait(1000)
    cy.get('#username').type(testData.data.Admin.sabbir.user_email)
    cy.get('#password').type(testData.data.Admin.sabbir.user_password)
    cy.wait(1000)
    cy.get('form > .w-full').click()
})
Cypress.Commands.add('Logout', () =>{
    cy.wait(2000)
    cy.get('.scam-user-info-dd').click()
    cy.wait(2000)
    cy.get('.user-profile-container > div.text-primary').click()
    cy.wait(2000)
    cy.get('.sc-modal-body > :nth-child(2) > .ml-4').click()
    cy.wait(3500)
})