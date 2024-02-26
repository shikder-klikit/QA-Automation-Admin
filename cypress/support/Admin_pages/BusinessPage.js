let testData= {}
before(function(){
    cy.fixture('Admindata/ConfigData.json').as('ConfigData').then(function(data){
        testData.data =data
    })
})
import {faker} from "@faker-js/faker";
Cypress.Commands.add('business_name',( min, max ) =>{
    cy.get(':nth-child(1) > .sc-input-container > .border').type(testData.data.Business.Name+' '+faker.lorem.word())
})
Cypress.Commands.add('business_address',( min, max ) =>{
    cy.get('.sc-textarea').type(faker.lorem.words())
})
Cypress.Commands.add('business_email',() =>{
    cy.get(':nth-child(3) > :nth-child(1) > .border').type(faker.internet.email({firstName: 'automated',provider: 'yopmail.com' }))
})
Cypress.Commands.add('business_phone',() =>{
    cy.get(':nth-child(3) > :nth-child(2) > .border').type(faker.phone.number('0167#######'))
})
Cypress.Commands.add('business_klikit_fee',() =>{
    cy.get(':nth-child(4) > .sc-input-container > .border').type(testData.data.Business.business_klikitfee)
})
Cypress.Commands.add('business_Select_PricingGroups',() =>{
    cy.get(':nth-child(7) > .sc-select-container > .sc-selector').click()
    cy.get('.sc-select-dropdown > :nth-child(1) > span').as('btn').click({force:true})
})
//search business
Cypress.Commands.add('business_search',() =>{
    cy.get('.border').type(testData.data.search.Business.name).wait(2000)
    cy.contains(testData.data.search.Business.name).click()
})