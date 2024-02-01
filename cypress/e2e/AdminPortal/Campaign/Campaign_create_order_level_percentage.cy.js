describe('Campaign_create_order_level_percentage',function(){
    it('should load data', function(){
        cy.visitsite();
        cy.login_as_automationAdmin();
        cy.select_campaign();
        cy.create_campaign();
        cy.enter_campaign_name();
        cy.enterBusinessName()
        cy.enterBrand();
        cy.enterBranchData();
        cy.clickCloseButton;
        cy.clickNextButton();
        cy.clickNextButton();
        cy.enterValue();
        cy.enterValueUpto();
        cy.enterMaxUsageLimit();
        cy.enterMaxUsePerUser();
        cy.enterMinCartValue();

    })
})
