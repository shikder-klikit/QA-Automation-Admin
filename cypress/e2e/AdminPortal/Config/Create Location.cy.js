import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const location = new UtilityMethods()
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('Create Location',function(){
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('should create location from admin', function(){
        cy.SelectLocation()
        location.clickOnNew()
        cy.AddLocationName(6,12)
        cy.AddLocationPhone()
        cy.AddAddress()
        cy.AddLatitude()
        cy.AddLongitude()
        location.selectSunday()
        location.selectMonday()
        location.selectTuesday()
        location.selectWednesday()
        location.selectThursday()
        location.selectFriday()
        location.selectSaturday()
        cy.SelectCity()
        cy.selectSalesPackage()
        cy.SelectBusinessForLocation()
        cy.SelectBrandForLocation()
        cy.get('.save-btn').click()
        //cy.ShowLocation()
    })
})