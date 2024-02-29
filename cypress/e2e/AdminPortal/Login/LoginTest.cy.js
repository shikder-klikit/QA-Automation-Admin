const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('VisitSite & login',function(){
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('should Logout', function(){
      cy.Logout()
  })
})