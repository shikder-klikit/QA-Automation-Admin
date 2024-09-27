const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('Pro menu check', () => {
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('should loop', () => {
       cy.sidebar_loop()
    });
    it.skip('Logouts the user', () => {
        cy.Logout()
    })
})