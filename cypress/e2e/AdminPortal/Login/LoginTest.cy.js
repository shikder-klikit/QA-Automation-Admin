const login = () => {
    cy.login_as_automationAdmin_withsession()
}
describe('visitsite',function(){
    beforeEach(() => {
        login('user')
        cy.visithomepage()
    })
    it('should load data', function(){
      cy.logout()
  })
})