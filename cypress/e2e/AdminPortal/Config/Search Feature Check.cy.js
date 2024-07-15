const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('Search function check', () => {
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('search the business', () => {
        cy.SelectBusiness()
        cy.BusinessSearch()
    })
    it('search the brand with business', () => {
        cy.selectBrand()
        cy.SearchBusinessforBrand()
        cy.SearchBrand()
    })
    it('search the location with business', () => {
        cy.SelectLocation()
        cy.SearchBusinessForLocation()
        cy.SearchBrandForLocation()
        cy.SearchLocation()
    })
    it.only('search the location without business', () => {
        cy.SelectLocation()
        cy.SearchLocation()
    })
})