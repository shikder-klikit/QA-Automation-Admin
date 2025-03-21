import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const brand = new UtilityMethods()
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('create Brand',function(){
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('should create brand from admin', function(){
        cy.selectBrand()
        brand.clickOnNew()
        cy.AddBrandName(6,12)
        cy.AddBrandBanner()
        cy.AddBrandLogo()
        cy.AddQRCodeLabel()
        cy.AddQRCodeLabelUrl()
        cy.SelectBusinessforBrand()
        cy.SelectBranchforBrand()
        cy.get('.save-btn').click()
        //cy.ShowBrand()
    })
})