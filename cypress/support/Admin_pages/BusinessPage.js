let testData= {}
before(function(){
    cy.fixture('ConfigData.json').as('ConfigData').then(function(data){
        testData.data =data
    })
})
import {faker} from "@faker-js/faker";
const fakeBusinessName = faker.company.name();
const fakeBusinessAddress= faker.lorem.words();
const fakeEmail= faker.internet.email({firstName: 'automated',provider: 'yopmail.com' });
const fakePhone= faker.phone.number('0167#######');
Cypress.Commands.add('AddBusinessName',() =>{
    cy.get(':nth-child(1) > .sc-input-container > .border').type(testData.data.Business.Name+' '+fakeBusinessName)
})
Cypress.Commands.add('AddBusinessAddress',(min,max) =>{
    cy.get('.sc-textarea').type(fakeBusinessAddress)
})
Cypress.Commands.add('AddBusinessEmail',() =>{
    cy.get(':nth-child(3) > :nth-child(1) > .border').type(fakeEmail)
})
Cypress.Commands.add('AddBusinessPhone',() =>{
    cy.get(':nth-child(3) > :nth-child(2) > .border').type(fakePhone)
})
Cypress.Commands.add('AddBusinessKlikitFee',() =>{
    cy.get(':nth-child(4) > .sc-input-container > .border').type(testData.data.Business.business_klikitfee)
})
Cypress.Commands.add('AddBusinessSelectPricingGroups',() =>{
    cy.get(':nth-child(7) > .sc-select-container > .sc-selector').click()
    cy.get('.sc-select-dropdown > :nth-child(1) > span').as('btn').click({force:true})
})
//search business
Cypress.Commands.add('BusinessSearch',() =>{
    cy.get('.border').type(testData.data.search.Business.name).wait(2000)
    cy.contains(testData.data.search.Business.name).click()
})
Cypress.Commands.add('ShowBusiness',() =>{
    cy.get(':nth-child(2) > .sc-input-container > .border').type(testData.data.Business.Name+' '+fakeBusinessName)
    cy.contains(testData.data.Business.Name+' '+fakeBusinessName).click()
})
Cypress.Commands.add('DeleteBusiness',() =>{
    cy.get(':nth-child(2) > .sc-input-container > .border').type(testData.data.Business.Name+' '+fakeBusinessName)
    cy.contains(testData.data.Business.Name+' '+fakeBusinessName).click()
    cy.xpath('//button[@class=\'sc-btn-secondary-outline sc-btn sc-btn-primary-outline sc-btn-secondary-outline sc-btn-lg\']').click()
    cy.get('.sc-modal-body > .flex > .text-sm').click()
})