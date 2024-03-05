let testData= {}
before(function(){
    cy.fixture('Admindata/ConfigData.json').as('ConfigData').then(function(data){
        testData.data =data
    })
})
import {faker} from "@faker-js/faker";
Cypress.Commands.add('AddLocationName',( min, max ) =>{
    cy.get('.p-5 > :nth-child(2) > .sc-input-container > .border').type(testData.data.Location.Name+' '+faker.lorem.word())
})
Cypress.Commands.add('AddLocationPhone', () =>{
    cy.get('.phone-input-field').type(testData.data.Location.phone)
})
Cypress.Commands.add('AddAddress', () =>{
    cy.get('.sc-textarea').type(faker.location.city()+' '+faker.lorem.words({min:10,max:20}))
})
Cypress.Commands.add('AddLatitude', () =>{
    cy.get(':nth-child(4) > .mr-4 > .border').type(testData.data.Location.Latitude)
})
Cypress.Commands.add('AddLongitude', () =>{
    cy.get(':nth-child(4) > :nth-child(2) > .border').type(testData.data.Location.Longitude)
})
Cypress.Commands.add('SelectCity', () =>{
    cy.get('.flex-col > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.Location.city+' ').wait(2000)
    cy.get('.sc-select-dropdown > :nth-child(2) > span').as('btn').click({force:true})
})
Cypress.Commands.add('selectSalesPackage', () =>{
    cy.get(':nth-child(9) > .mr-4 > .sc-select-container > .sc-selector').click()
    cy.get('.sc-select-dropdown').contains(testData.data.Location.SalesPackage).click()
})
Cypress.Commands.add('AddRestaurantServiceFee', () =>{
    cy.get(':nth-child(9) > .flex-col > .sc-input-container').type(testData.data.Location.RestaurantServiceFee)
})
Cypress.Commands.add('SelectBrands', () =>{
    cy.get('.mb-6 > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
    cy.get('.multiple-placeholder-select-all-button').click()
})
Cypress.Commands.add('SelectBusinessForLocation', () =>{
    cy.get(':nth-child(10) > .mr-4 > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.Location.selectBusiness).wait(2000)
    cy.contains(testData.data.Location.selectBusiness).click()
})
Cypress.Commands.add('SelectBrandForLocation', () =>{
    cy.get(':nth-child(10) > :nth-child(2) > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.Location.selectBrand).wait(2000)
    cy.contains(testData.data.Location.selectBrand).click().wait(2000)
})
Cypress.Commands.add('UseMenuV2', () =>{
    cy.get('.my-4').contains('Use MenuV2 for klikit orders').click()
    cy.get('.my-4').contains('Has MenuV2 module').click()
})
Cypress.Commands.add('markChurned', () =>{
    cy.get('.p-5 > .sc-checkbox-container.mb-4').contains('This is a churned location').click()
})