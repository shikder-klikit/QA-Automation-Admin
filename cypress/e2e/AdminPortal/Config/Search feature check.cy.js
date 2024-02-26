const login = () => {
    cy.login_as_automationAdmin_withsession()
}
describe('Search function check', () => {
    beforeEach(() => {
        login('user')
        cy.visithomepage()
    })
    it('search the business', () => {
        cy.select_Business()
        cy.business_search()
    })
    it('search the brand with business', () => {
        cy.select_Brand()
        cy.Search_Business_forbrand()
        cy.Search_brand()
    })
    it('search the brand without business', () => {
        cy.select_Brand()
        cy.Search_brand()
    })
})