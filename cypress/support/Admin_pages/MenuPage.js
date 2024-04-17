import UtilityMethods from "../Common_methods/utilityMethods";

let testData= {}
before(function(){
    cy.fixture('MenuData.json').as('MenuData').then(function(data){
        testData.data =data
    })
})
// Get the current date
const currentDate = new Date();

// Format the date as "Month Day" (e.g., "April 17")
const formattedDate = `${currentDate.toLocaleString('en-US', { month: 'long' })} ${currentDate.getDate()}`;
import {faker} from "@faker-js/faker";
const fakeMenuName = faker.company.buzzNoun();
Cypress.Commands.add('SelectBusinessForMenu', () =>{
    cy.get('.rounded-lg > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
    cy.get('.sc-select-search').type(testData.data.Menu.BusinessName)
    cy.wait(2000)
    cy.contains(testData.data.Menu.BusinessName).click()
})
Cypress.Commands.add('AddMenuName',() =>{
    cy.get('.sc-input-container > .border').type(testData.data.Menu.MenuName+' '+fakeMenuName+' '+formattedDate)
})