import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const business = new UtilityMethods()
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('create Business',function(){
    beforeEach(() => {
        login('user')
        cy.visithomepage()
    })
    it('should create business from admin', function(){
        cy.select_Business()
        business.clickOnNew()
        cy.AddBusinessName(4,6)
        cy.AddBusinessAddress(15,25)
        cy.AddBusinessEmail()
        cy.AddBusinessPhone()
        cy.AddBusinessKlikitFee()
        cy.AddBusinessSelectPricingGroups()
        business.clickoncheckbox()
        business.clickedOnSave()
    })
})