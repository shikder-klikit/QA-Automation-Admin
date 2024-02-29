const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('visitsite & login',function(){
    beforeEach(() => {
        login('user')
        cy.visithomepage()
    })
    it('should logout', function(){
      cy.logout()
  })
})