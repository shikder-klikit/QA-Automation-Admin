/// <reference types="cypress" />
import CampaignMethods from "../../../support/Common_methods/campaignMethods";
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

        cy.window().then((win) => {
            const newDate = new Date(win.Date());
            // do something usefull with the date
            console.log('#############'+ newDate);
        });

        const campaign = new CampaignMethods();





    })
})
