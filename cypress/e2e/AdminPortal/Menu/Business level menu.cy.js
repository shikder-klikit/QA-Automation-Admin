import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const menu = new UtilityMethods()
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('Business level menu', () => {
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('should create business level menu from admin', function(){
        cy.SelectMenuBeta()
        cy.SelectBusinessForMenu()
        menu.AddNewButton()
    })
})