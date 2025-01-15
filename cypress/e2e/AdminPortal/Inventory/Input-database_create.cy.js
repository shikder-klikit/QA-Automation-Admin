const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
import {faker} from "@faker-js/faker";
const fakevegetable  = faker.food.vegetable()
const fakemeat  = faker.food.meat()
const fake  = faker.food.meat()
const fakeEmail= faker.internet.email({firstName: 'automated',provider: 'yopmail.com' });
const fakesku= faker.number.int({min:1000,max:100000})
const fakeamount= faker.number.int({min:10,max:1000})
describe('supplier-database',function(){
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('create new input', () => {
        cy.get('ul > :nth-child(5) > .pro-inner-item > .pro-item-content > a').click();
        cy.get(':nth-child(1) > .sc-selector > .sc-select-placeholder').click().type('Inventory BD')
        cy.wait(2000)
        cy.contains('Inventory BD').click()
        cy.get('[href="/inventory/inputs"] > .text-sm').click();
        cy.get('.px-6 > .items-end > .items-center').click();
        cy.get('.gap-y-3 > :nth-child(1) > :nth-child(2) > .sc-input-container > .rounded-lg').type(fakevegetable);
        cy.get('.gap-y-3 > :nth-child(1) > .items-center > :nth-child(1) > .sc-select-container > .sc-selector > .sc-select-placeholder').click();
        cy.get('.sc-select-dropdown > :nth-child(1) > span').click();
        cy.get(':nth-child(1) > .items-center > :nth-child(2) > .sc-select-container > .sc-selector > .sc-select-placeholder').click();
        cy.get('.sc-select-dropdown > :nth-child(1) > span').click();
        cy.get(':nth-child(4) > .sc-input-container > .rounded-lg').type('SKU-'+ fakesku);
        cy.get(':nth-child(5) > .sc-select-container > .sc-selector > .sc-select-placeholder').click();
        cy.get('.sc-select-dropdown > :nth-child(1) > span').click();
        cy.get(':nth-child(6) > .border').click();
        cy.get('.gap-y-3 > .flex-col.flex-1 > .text-lg').click();
        cy.get('.border-none').type(fakeamount);
        cy.get('.flex-col.flex-1 > .gap-x-6 > :nth-child(1) > .sc-select-container > .sc-selector > .sc-select-placeholder').click();
        cy.get('.sc-select-dropdown > :nth-child(2)').click();
        cy.get('.flex-col.flex-1 > .gap-x-6 > :nth-child(2) > .sc-select-container > .sc-selector > .sc-select-placeholder').click();
        cy.get('.flex-col.flex-1 > .gap-x-6 > :nth-child(1) > .sc-select-container > .sc-selector > .sc-select-placeholder').click();
        cy.get('.sc-select-dropdown > :nth-child(1) > span').click();
        cy.get('.flex-col.flex-1 > .gap-x-6 > :nth-child(2) > .sc-select-container > .sc-selector > .sc-select-placeholder').click();
        cy.get('.sc-select-dropdown > :nth-child(1) > span').click();
        cy.get('.w-20 > .text-xs').click();
    })
})