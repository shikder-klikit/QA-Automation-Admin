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
    //end time
    cy.xpath('//div[@class=\'sc-timepicker-label border-none\'][normalize-space()=\'00:05\']').click()
    cy.selectTimeFromPicker('23',0)
    //start time
    cy.xpath('//div[@class=\'sc-timepicker-label border-none\'][normalize-space()=\'00:00\']').click()
    cy.selectTimeFromPicker('01',0)
    cy.get('.p-2 > .mt-1').click()
})
Cypress.Commands.add('MenuSaveButton', () =>{
    cy.get('.visible > .ml-4').click()
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
// modifier section
Cypress.Commands.add('SelectModifier', () =>{
    cy.get('.h-12 > :nth-child(1) > :nth-child(2)').click()
})
Cypress.Commands.add('AddModifierName',() =>{
    cy.get('.sc-input-container > .border').type(testData.data.Modifier.ModifierName+' '+fakeMenuName+' '+formattedDate)
})
Cypress.Commands.add('AddModifierDescription', () =>{
    cy.get('.sc-textarea').type(faker.location.streetAddress({useFullAddress: true }))
})
Cypress.Commands.add('ModifierSaveButton', () =>{
    cy.get('.menu-tab-content-header-right > .ml-4').click()
})
Cypress.Commands.add('ModifierSearch', () =>{
    cy.get('.sc-input-container > .h-8').type(testData.data.Modifier.ModifierName+' '+fakeMenuName+' '+formattedDate)
})
Cypress.Commands.add('ModifierDelete', () =>{
    cy.ModifierSearch()
    cy.wait(2000)
    cy.get('.flex-row.justify-end > .relative > .divide-y > div > .kt-three-dots-vertical').click()
    cy.get('.flex-row.justify-end > .relative > .action-dropdown > :nth-child(1) > :nth-child(2)').click()
    cy.get('.sc-modal-visible > .sc-modal-content > .sc-modal-body > .flex-col > .flex > .sc-btn-primary').click()
})
// Item section
Cypress.Commands.add('SelectItem', () =>{
    cy.get('.h-12 > :nth-child(1) > :nth-child(3)').click()
})
Cypress.Commands.add('AddItemName',() =>{
    cy.get('.mt-4 > :nth-child(2) > .border').type(testData.data.Item.ItemName+' '+fakeMenuName+' '+formattedDate)
})
Cypress.Commands.add('AddItemDescription', () =>{
    cy.get('.sc-textarea').type(faker.lorem.paragraph({ min: 1, max: 4 }))
})
Cypress.Commands.add('AddItemSKUID', () =>{
    cy.get('input[placeholder="Give your item\'s SKU ID"]').type(faker.random.numeric(4))
})
Cypress.Commands.add('AddItemVat', () =>{
    cy.get('#vat').type(faker.random.numeric(1))
})
Cypress.Commands.add('AddItemPrice', () =>{
    cy.get('#currency').type(faker.random.numeric(5))
})
Cypress.Commands.add('ItemSaveButton', () =>{
    cy.get('.menu-tab-content-header-right > .ml-4').click()
})
Cypress.Commands.add('ItemSearch', () =>{
    cy.get('.sc-input-container > .h-8').type(testData.data.Item.ItemName+' '+fakeMenuName+' '+formattedDate)
})
Cypress.Commands.add('ItemDelete', () =>{
    cy.ItemSearch()
    cy.wait(2000)
    cy.get('.flex-row.justify-end > .relative > .divide-y > div > .kt-three-dots-vertical').click()
    cy.get('.flex-row.justify-end > .relative > .action-dropdown > :nth-child(1) > :nth-child(3)').click()
    cy.get('.sc-modal-visible > .sc-modal-content > .sc-modal-body > .flex-col > .flex > .sc-btn-primary').click()
})