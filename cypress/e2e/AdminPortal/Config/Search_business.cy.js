import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const business = new UtilityMethods()
describe('visitsite',function(){
    it('should load data', function(){
        cy.visitsite()
        cy.login_as_automationAdmin()
        cy.select_Business()
        cy.business_search()
    })
})