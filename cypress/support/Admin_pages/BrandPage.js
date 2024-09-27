let testData= {}
before(function(){
    cy.fixture('ConfigData.json').as('ConfigData').then(function(data){
        testData.data =data
    })
})
import {faker} from "@faker-js/faker";
const fakeBrandName = faker.company.buzzNoun();
Cypress.Commands.add('AddBrandName',() =>{
    cy.get(':nth-child(3) > .border').type(testData.data.Brand.Name+' '+fakeBrandName)
})
Cypress.Commands.add('AddBrandBanner', () =>{
    cy.get('#banner').selectFile(testData.data.Brand.upload_banner, { force: true }).wait(5000)
})
Cypress.Commands.add('AddBrandLogo', () =>{
    cy.get('#logo').selectFile(testData.data.Brand.upload_logo, { force: true })
})
Cypress.Commands.add('AddQRCodeLabel', () =>{
    cy.get(':nth-child(4) > .border').type(faker.location.streetAddress({useFullAddress: true }))
})
Cypress.Commands.add('AddQRCodeLabelUrl', () =>{
    cy.get('.sc-textarea').type(faker.lorem.words({min:8,max:20}))
})
Cypress.Commands.add('SelectBusinessforBrand', () =>{
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').type(testData.data.Brand.selectBusiness).wait(2000)
    cy.contains(testData.data.Brand.selectBusiness).click()
})
Cypress.Commands.add('SelectBranchforBrand', () =>{
    cy.xpath('//div[contains(@class,\'sc-select-container sc-select-v2\')]//div[contains(@class,\'sc-selector\')]//div[contains(@class,\'\')]').type(testData.data.Brand.selectBranch).wait(2000)
    cy.contains(testData.data.Brand.selectBranch).click().wait(2000)
    cy.get('.width > :nth-child(2)').click()
})
Cypress.Commands.add('SearchBusinessforBrand', () =>{
    cy.get('.sc-select-placeholder').type(testData.data.search.Brand.business).wait(2000).type(' ').wait(2000).type('{backspace}')
    cy.contains(testData.data.search.Brand.business).click()
})
Cypress.Commands.add('SearchBrand', () =>{
    cy.get('.sc-input-container > .border').type(testData.data.search.Brand.brandname).wait(2000)
    cy.contains(testData.data.search.Brand.brandname).click()
})
Cypress.Commands.add('ShowBrand', () =>{
    cy.xpath('//input[@placeholder=\'Enter name to search\']').type(testData.data.Brand.Name+' '+fakeBrandName).wait(2000)
    cy.contains(testData.data.Brand.Name+' '+fakeBrandName).click()
})
Cypress.Commands.add('DeleteBrand',() =>{
    cy.xpath('//div[contains(@class,\'sc-select-placeholder\')]').click().type(testData.data.Brand.selectBusiness)
    cy.contains(testData.data.Brand.selectBusiness).click()
    cy.xpath('//input[@placeholder=\'Enter name to search\']').type(testData.data.Brand.Name+' '+fakeBrandName).wait(2000)
    cy.contains(testData.data.Brand.Name+' '+fakeBrandName).click()
    cy.get('.justify-between > .sc-btn-danger-outline').click()
    cy.get('.sc-btn-danger').click()
})