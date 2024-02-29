const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('Search function check', () => {
    beforeEach(() => {
        login('user')
        cy.visithomepage()
    })
    it('search the business', () => {
        cy.select_Business()
        cy.BusinessSearch()
    })
    it('search the brand with business', () => {
        cy.selectBrand()
        cy.SearchBusinessforBrand()
        cy.SearchBrand()
    })
    it('search the brand without business', () => {
        cy.selectBrand()
        cy.SearchBrand()
    })
})