describe('Campaign',function(){
    it('should load data', function(){
        cy.visitsite()
        cy.login()
        cy.select_campaign()
    })
})