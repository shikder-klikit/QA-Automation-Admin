describe('visitsite',function(){
  it('should load data', function(){
      cy.visitsite()
      cy.login()
      // cy.logout()
  })
})