import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const menu = new UtilityMethods()
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('Business level category', () => {
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it.only('should create business level category from admin', function(){
        cy.SelectMenu()
        cy.SelectBusinessForMenu()
        cy.SelectItem()
        menu.AddNewButton()

    })
    it('should search & delete business level menu from admin', function(){
        cy.SelectMenu()
        cy.SelectBusinessForMenu()

    })
})