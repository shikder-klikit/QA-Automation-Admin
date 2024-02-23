import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const brand = new UtilityMethods()
describe('visitsite',function(){
    it('should load data', function(){
        cy.visitsite()
        cy.login_as_automationAdmin()
        cy.select_Brand()
        brand.clickOnNew()
        cy.Add_brand_Name(6,12)
        cy.Add_brand_Banner()
        cy.Add_brand_Logo()
        cy.Add_QR_Code_Label()
        cy.Add_QR_Code_Label_url()
        cy.Select_Business_forbrand()
        cy.Select_Branch_forbrand()
        brand.clickedOnSave()
    })
})