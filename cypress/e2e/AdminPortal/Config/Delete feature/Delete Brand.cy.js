import UtilityMethods, {UserType} from "../../../../support/Common_methods/utilityMethods";
const brand = new UtilityMethods()
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('create Brand then deletes the brand',function(){
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('should create brand from admin', function(){
        cy.selectBrand()
        brand.clickOnNew()
        cy.AddBrandName()
        cy.AddBrandBanner()
        cy.AddBrandLogo()
        cy.AddQRCodeLabel()
        cy.AddQRCodeLabelUrl()
        cy.SelectBusinessforBrand()
        cy.SelectBranchforBrand()
        cy.get('.save-btn').click()
    })
    it('should delete brand from admin', function(){
        cy.selectBrand()
        cy.DeleteBrand()
    })
})