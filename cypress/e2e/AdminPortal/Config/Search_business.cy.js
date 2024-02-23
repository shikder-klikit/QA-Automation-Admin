const login = () => {
    cy.login_as_automationAdmin_withsession()
}
describe('Search_Business', () => {
    beforeEach(() => {
        login('user')
        cy.visithomepage()
    })
    it('search the business', () => {
        cy.select_Business()
        cy.business_search()
    })
    it('search the user', () => {
        cy.select_User()
    })
})