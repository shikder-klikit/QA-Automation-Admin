let testData= {}
before(function(){
    cy.fixture('ConfigData.json').as('ConfigData').then(function(data){
        testData.data =data
    })
})
import {faker} from "@faker-js/faker";
Cypress.Commands.add('AddBrandName',( min, max ) =>{
    cy.get(':nth-child(3) > .border').type(testData.data.Brand.Name+' '+faker.lorem.word())
})
Cypress.Commands.add('AddBrandBanner', () =>{
    cy.get('.w-full.flex > .mt-3 > .h-8').selectFile(testData.data.Brand.upload_banner)
})
Cypress.Commands.add('AddBrandLogo', () =>{
    cy.get('.w-24 > .mt-3 > .h-8').selectFile(testData.data.Brand.upload_logo)
})
Cypress.Commands.add('AddQRCodeLabel', () =>{
    cy.get(':nth-child(4) > .border').type(faker.location.streetAddress({useFullAddress: true }))
})
Cypress.Commands.add('AddQRCodeLabelUrl', () =>{
    cy.get('.sc-textarea').type(faker.lorem.words({min:8,max:20}))
})
Cypress.Commands.add('SelectBusinessforBrand', () =>{
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').type(testData.data.Brand.selectBusiness).wait(2000)
    cy.contains(testData.data.Brand.selectBusiness).click()
})
Cypress.Commands.add('SelectBranchforBrand', () =>{
    cy.xpath('//div[contains(@class,\'sc-select-container sc-select-v2\')]//div[contains(@class,\'sc-selector\')]//div[contains(@class,\'\')]').type(testData.data.Brand.selectBranch).wait(2000)
    cy.contains(testData.data.Brand.selectBranch).click().wait(2000)
    cy.get('.width > :nth-child(2)').click()
})
Cypress.Commands.add('SearchBusinessforBrand', () =>{
    cy.get('.flex.mb-4 > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.search.Brand.business).wait(2000).type(' ').wait(2000).type('{backspace}')
    cy.contains(testData.data.search.Brand.business).click()
})
Cypress.Commands.add('SearchBrand', () =>{
    cy.get('.border').type(testData.data.search.Brand.brandname).wait(2000)
    cy.contains(testData.data.search.Brand.brandname).click()
})