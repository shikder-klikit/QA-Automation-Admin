const login = () => {
    cy.login_as_automationAdmin_withsession()
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