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
//menu section
Cypress.Commands.add('SelectBusinessForMenu', () =>{
    cy.get('.rounded-lg > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
    cy.get('.sc-select-search').type(testData.data.Menu.BusinessName)
    cy.wait(2000)
    cy.contains(testData.data.Menu.BusinessName).click()
})
Cypress.Commands.add('AddMenuName',() =>{
    cy.get('.sc-input-container > .border').type(testData.data.Menu.MenuName+' '+fakeMenuName+' '+formattedDate)
})
Cypress.Commands.add('AddMenuLogo', () =>{
    cy.get('.mt-3 > .h-8').selectFile(testData.data.Menu.upload_logo)
})
Cypress.Commands.add('AddMenuDescription', () =>{
    cy.get('.sc-textarea').type(faker.location.streetAddress({useFullAddress: true }))
})
Cypress.Commands.add('AddMenuHour', () =>{
    cy.get('.bg-grey-lighter > .flex').click()
    cy.get('.mt-4 > .items-center > .text-xs').click()
    //start time
    cy.xpath('//div[@class=\'flex flex-col w-full items-start mr-2\']//div[@class=\'sc-timepicker-label border border-red-light\'][normalize-space()=\'00:00\']').click()
    cy.selectTimeFromPicker('01',0)
    cy.get('.p-2 > .mt-1').click()
    //end time
    cy.xpath('//div[@class=\'flex w-full\']//div[@class=\'flex flex-col w-full items-start\']//div[@class=\'sc-timepicker-label border border-red-light\'][normalize-space()=\'00:00\']').click()
    cy.selectTimeFromPicker('23',0)
    cy.get('.p-2 > .mt-1').click()
})
Cypress.Commands.add('MenuSaveButton', () =>{
    cy.get('.menu-tab-content-header-right > .justify-end > .ml-4').click()
})
//menu search & delete

Cypress.Commands.add('MenuSearch', () =>{
    cy.get('.sc-input-container > .h-8').type(testData.data.Menu.MenuName+' '+fakeMenuName+' '+formattedDate)
})
Cypress.Commands.add('MenuDelete', () =>{
    cy.MenuSearch()
    cy.wait(2000)
    cy.get('.flex-row.justify-end > .relative > .divide-y > div > .kt-three-dots-vertical').click()
    cy.get('.flex-row.justify-end > .relative > .action-dropdown > :nth-child(1) > :nth-child(2)').click()
    cy.get('.sc-modal-visible > .sc-modal-content > .sc-modal-body > .flex-col > .flex > .sc-btn-primary').click()

})