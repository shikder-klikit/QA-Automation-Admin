import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const inventory = new UtilityMethods()
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
import {faker} from "@faker-js/faker";
const fakesuppliername = faker.company.buzzNoun();
const fakeEmail= faker.internet.email({firstName: 'automated',provider: 'yopmail.com' });
const fakePhone= faker.phone.number('0167#######');
describe('supplier-database',function(){
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('create new supplier', () => {
        cy.get('ul > :nth-child(5) > .pro-inner-item > .pro-item-content > a').click();
        cy.get(':nth-child(1) > .sc-selector > .sc-select-placeholder').click().type('Inventory BD')
        cy.wait(2000)
        cy.contains('Inventory BD').click()
        cy.get('[href="/inventory/supplier-database"] > .text-sm').click();
        cy.get('.items-end > .items-center > .text-xs').click();
        cy.get('.bg-grey-light > .pt-4 > :nth-child(2) > .sc-input-container > .rounded-lg').type(fakesuppliername);
        cy.get('.w-1\\/2 > .sc-input-container > .rounded-lg').clear();
        cy.get('.w-1\\/2 > .sc-input-container > .rounded-lg').type(fakeEmail);
        cy.get('.phone-input-field').clear();
        cy.get('.phone-input-field').type('+88'+ fakePhone);
        cy.get('.bg-grey-light > .pt-4').click();
        cy.get('.w-20').click();
    })
})