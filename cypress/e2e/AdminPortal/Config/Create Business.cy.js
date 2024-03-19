import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const business = new UtilityMethods()
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('create Business',function(){
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('should create business from admin', function(){
        cy.SelectBusiness()
        business.clickOnNew()
        cy.AddBusinessName(4,6)
        cy.AddBusinessAddress(15,25)
        cy.AddBusinessEmail()
        cy.AddBusinessPhone()
        cy.AddBusinessKlikitFee()
        // cy.AddBusinessSelectPricingGroups()
        // business.clickoncheckbox()
        business.clickedOnSave()
    })
    it('delete the business',function (){
        cy.SelectBusiness()
        cy.DeleteBusiness()
    })
})