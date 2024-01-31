describe('Campaign',function(){
    it('should load data', function(){
        cy.visitsite()
        cy.login_as_automationAdmin()
        cy.select_campaign()
    })
})