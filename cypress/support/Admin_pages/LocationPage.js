let testData= {}
before(function(){
    cy.fixture('ConfigData.json').as('ConfigData').then(function(data){
        testData.data =data
    })
})
import {faker} from "@faker-js/faker";
const fakeLocationName= faker.company.buzzNoun();
Cypress.Commands.add('AddLocationName',() =>{
    cy.get('.p-5 > .sc-input-container.w-full > .border').type(testData.data.Location.Name+' '+fakeLocationName)
})
Cypress.Commands.add('AddLocationPhone', () =>{
    cy.get(':nth-child(1) > .flex-row > .phone-input-field').type(testData.data.Location.phone)
    cy.get(':nth-child(2) > .flex-row > .phone-input-field').type(testData.data.Location.phone)
})
Cypress.Commands.add('AddAddress', () =>{
    cy.get('.sc-textarea').type(faker.location.city()+' '+faker.lorem.words({min:10,max:20}))
})
Cypress.Commands.add('AddLatitude', () =>{
    cy.get(':nth-child(5) > :nth-child(1) > .border').type(testData.data.Location.Latitude)
})
Cypress.Commands.add('AddLongitude', () =>{
    cy.get(':nth-child(5) > :nth-child(2) > .border').type(testData.data.Location.Longitude)
})
Cypress.Commands.add('SelectCity', () =>{
    cy.get(':nth-child(13) > :nth-child(1) > .sc-selector > .sc-select-placeholder').type(testData.data.Location.city+' ')
    cy.wait(2000)
    cy.get('.sc-select-dropdown > :nth-child(2) > span').as('btn').click({force:true})
})
Cypress.Commands.add('selectSalesPackage', () =>{
    cy.get(':nth-child(14) > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
    cy.get('.sc-select-dropdown').contains(testData.data.Location.SalesPackage).click()
})
Cypress.Commands.add('SelectBrands', () =>{
    cy.get('.mb-6 > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
    cy.get('.multiple-placeholder-select-all-button').click()
})
Cypress.Commands.add('SelectBusinessForLocation', () =>{
    cy.get(':nth-child(15) > :nth-child(1) > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.Location.selectBusiness)
    cy.wait(2000)
    cy.contains(testData.data.Location.selectBusiness).click()
})
Cypress.Commands.add('SelectBrandForLocation', () =>{
    cy.get(':nth-child(15) > :nth-child(2) > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.Location.selectBrand)
    cy.wait(2000)
    cy.contains(testData.data.Location.selectBrand).click()
    cy.wait(2000)
})
Cypress.Commands.add('markChurned', () =>{
    cy.get('.p-5 > .sc-checkbox-container.mb-4').contains('This is a churned location').click()
})
Cypress.Commands.add('SearchBusinessForLocation', () =>{
    cy.xpath('//div[@class=\'w-full lg:w-1/2 lg:mr-4 sm:mb-4 lg:mb-0\']//div[contains(@class,\'sc-select-placeholder\')]').type(testData.data.search.Location.business).wait(2000).type(' ').wait(2000).type('{backspace}')
    cy.contains(testData.data.search.Location.business).click()
})
Cypress.Commands.add('SearchBrandForLocation', () =>{
    cy.xpath('//div[@class=\'w-full lg:w-1/2\']//div[contains(@class,\'sc-select-placeholder\')]').type(testData.data.search.Location.brand).wait(2000).type(' ').wait(2000).type('{backspace}')
    cy.contains(testData.data.search.Location.brand).click()
})
Cypress.Commands.add('SearchLocation', () =>{
    cy.get('.border').type(testData.data.search.Location.locationname)
    cy.wait(2000)
    cy.contains(testData.data.search.Location.locationname).click()
})
Cypress.Commands.add('ShowLocation', () =>{
    cy.xpath('//input[@placeholder=\'Enter name to search\']').type(testData.data.Location.Name).wait(2000)
    cy.xpath('//input[@placeholder=\'Enter name to search\']').type('{ }'+fakeLocationName).wait(2000)
    cy.contains(testData.data.Location.Name+' '+fakeLocationName).click()
})
Cypress.Commands.add('DeleteLocation',() =>{
    cy.xpath('//input[@placeholder=\'Enter name to search\']').type(testData.data.Location.Name).wait(2000)
    cy.xpath('//input[@placeholder=\'Enter name to search\']').type('{ }'+fakeLocationName).wait(2000)
    cy.contains(testData.data.Location.Name+' '+fakeLocationName).click()
    cy.get('span > .sc-btn-secondary-outline').click()
    cy.get('.sc-modal-visible > .sc-modal-content > .sc-modal-body > .justify-end > .text-sm').click()
})