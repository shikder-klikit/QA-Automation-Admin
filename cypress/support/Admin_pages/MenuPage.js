let testData= {}
before(function(){
    cy.fixture('MenuData.json').as('MenuData').then(function(data){
        testData.data =data
    })
})
import {faker} from "@faker-js/faker";
const fakeMenuName = faker.company.buzzNoun();
Cypress.Commands.add('SelectBusinessForMenu', () =>{
    cy.get('.rounded-lg > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
    cy.get('.sc-select-search').type(testData.data.Menu.BusinessName)
    cy.wait(2000)
    cy.contains(testData.data.Menu.BusinessName).click()
})