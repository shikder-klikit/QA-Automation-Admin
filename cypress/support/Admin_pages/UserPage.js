let testData= {}
before(function(){
    cy.fixture('Admindata/ConfigData.json').as('ConfigData').then(function(data){
        testData.data =data
    })
})
import {faker} from "@faker-js/faker";
Cypress.Commands.add('AddFirstName',() =>{
    cy.get('input[name=\'first_name\']').type(testData.data.User.Cloud.FirstName)
})
Cypress.Commands.add('AddLastName',() =>{
    cy.get('input[name=\'last_name\']').type(faker.lorem.word({min:10,max:15}))
})
Cypress.Commands.add('AddEmail',() =>{
    cy.get(':nth-child(3) > .mr-4 > .border').type(faker.internet.email({firstName: 'automated',provider: 'yopmail.com' }))
})
Cypress.Commands.add('AddPhone',() =>{
    cy.get(':nth-child(3) > :nth-child(2) > .border').type(faker.phone.number('0167#######'))
})
Cypress.Commands.add('AddPicture',() =>{
    cy.get('.mt-3 > .h-8').selectFile(testData.data.User.Cloud.Picture)
})
Cypress.Commands.add('AddRoleAdmin',() =>{
    cy.get('.mr-4 > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
    cy.get('.sc-select-dropdown').contains('Admin').click()
})
Cypress.Commands.add('AddRoleBusinessOwner',() =>{
    cy.get('.mr-4 > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
    cy.get('.sc-select-dropdown').contains('Business Owner').click()
})
Cypress.Commands.add('AddRoleBrandmanager',() =>{
    cy.get('.mr-4 > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
    cy.get('.sc-select-dropdown').contains('Brand Manager').click()
})
Cypress.Commands.add('AddRoleBranchmanager',() =>{
    cy.get('.mr-4 > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
    cy.get('.sc-select-dropdown').contains('Branch Manager').click()
})
Cypress.Commands.add('SelectBusinessForUser', () =>{
    cy.get(':nth-child(5) > :nth-child(2) > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.User.Cloud.selectBusiness).wait(2000)
    cy.contains(testData.data.User.Cloud.selectBusiness).click()
})
Cypress.Commands.add('SelectcountryForUser', () =>{
    cy.get('.sc-select-placeholder.text-grey-darker').type(testData.data.User.Cloud.selectCountry).wait(2000)
    cy.contains(testData.data.User.Cloud.selectCountry).click()
    cy.get('.width > :nth-child(2)').click()
})
Cypress.Commands.add('SelectbrandForUser', () =>{
    cy.get('.sc-select-placeholder.text-grey-darker').click()
    cy.get('input[placeholder=\'Select Brand\']').type(testData.data.User.Cloud.selectBrand).wait(2000)
    cy.contains(testData.data.User.Cloud.selectBrand).click()
    cy.get('.width > :nth-child(2)').click()
})
Cypress.Commands.add('SelectbranchForUser', () =>{
    cy.get('.sc-select-placeholder.text-grey-darker').click()
    cy.get('input[placeholder=\'Select Branches\']').type(testData.data.User.Cloud.selectBranch).wait(2000)
    cy.contains(testData.data.User.Cloud.selectBranch).click()
    cy.get('.width > :nth-child(2)').click()
})
Cypress.Commands.add('AddRoleBizOwner',() =>{
    cy.AddRoleBusinessOwner()
    cy.SelectBusinessForUser()
    cy.SelectcountryForUser()
})
Cypress.Commands.add('AddBrandManagerrole',() =>{
    cy.AddRoleBrandmanager()
    cy.SelectBusinessForUser()
    cy.SelectbrandForUser()
    cy.SelectbranchForUser()
})
Cypress.Commands.add('AddBranchManagerrole',() =>{
    cy.AddRoleBranchmanager()
    cy.SelectBusinessForUser()
    //cy.SelectbrandForUser()
    cy.SelectbranchForUser()
})