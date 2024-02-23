let testData= {}
before(function(){
    cy.fixture('Admindata/ConfigData.json').as('ConfigData').then(function(data){
        testData.data =data
    })
})
import {faker} from "@faker-js/faker";
Cypress.Commands.add('Add_brand_Name',( min, max ) =>{
    cy.get(':nth-child(3) > .border').type(testData.data.Brand.Name+' '+faker.lorem.word())
})
Cypress.Commands.add('Add_brand_Banner', () =>{
    cy.get('.w-full.flex > .mt-3 > .h-8').selectFile(testData.data.Brand.upload_banner)
})
Cypress.Commands.add('Add_brand_Logo', () =>{
    cy.get('.w-24 > .mt-3 > .h-8').selectFile(testData.data.Brand.upload_logo)
})
Cypress.Commands.add('Add_QR_Code_Label', () =>{
    cy.get(':nth-child(4) > .border').type(faker.location.streetAddress({useFullAddress: true }))
})
Cypress.Commands.add('Add_QR_Code_Label_url', () =>{
    cy.get('.sc-textarea').type(faker.lorem.words({min:8,max:20}))
})
Cypress.Commands.add('Select_Business_forbrand', () =>{
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').type(testData.data.Brand.selectBusiness).wait(2000)
    cy.contains(testData.data.Brand.selectBusiness).click()
})
Cypress.Commands.add('Select_Branch_forbrand', () =>{
    cy.xpath('//div[contains(@class,\'sc-select-container sc-select-v2\')]//div[contains(@class,\'sc-selector\')]//div[contains(@class,\'\')]').type(testData.data.Brand.selectBranch).wait(2000)
    cy.contains(testData.data.Brand.selectBranch).click().wait(2000)
    cy.get('.width > :nth-child(2)').click()
})