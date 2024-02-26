import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const business = new UtilityMethods()
const login = () => {
    cy.login_as_automationAdmin_withsession()
}
describe('create Business',function(){
    beforeEach(() => {
        login('user')
        cy.visithomepage()
    })
    it('should create business from admin', function(){
        cy.select_Business()
        business.clickOnNew()
        cy.business_name(4,6)
        cy.business_address(15,25)
        cy.business_email()
        cy.business_phone()
        cy.business_klikit_fee()
        cy.business_Select_PricingGroups()
        business.clickoncheckbox()
        business.clickedOnSave()
    })
})