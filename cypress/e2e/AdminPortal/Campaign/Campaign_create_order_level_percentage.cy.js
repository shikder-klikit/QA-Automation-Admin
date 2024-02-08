/// <reference types="cypress" />
import CampaignMethods, {UserType} from "../../../support/Common_methods/campaignMethods";
import campaignMethods from "../../../support/Common_methods/campaignMethods";

describe('Campaign_create_order_level_percentage',function(){
    it('should load data', function() {
        cy.visitsite();
        cy.login_as_automationAdmin();
        cy.select_campaign();
        cy.create_campaign();
        cy.enter_campaign_name();
        cy.enterBusinessName()
        cy.enterBrand();
        cy.enterBranchData();
        cy.clickCloseButton;
        const campaign = new CampaignMethods();
        campaign.clickOnNext()
        campaign.clickOnNext()
        cy.enterValue();
        cy.enterValueUpto();
        cy.enterMaxUsageLimit();
        cy.enterMaxUsePerUser();
        cy.enterMinCartValue();

        campaign.clickCampaignUser(UserType.EveryOne);

        //Get current date and time
         const currentDate = new Date();
         cy.log('Current Date and Time: ' + currentDate);
         const currentDateTimeString = currentDate.toISOString(); // You can format it as needed

        // Log the current date and time
        cy.log('Current Date and Time: ' + currentDateTimeString);
        //cy.log(currentDateTimeString.getDate());


        const year=currentDate.getFullYear();
        const dayOfMonth = currentDate.getDate();
        const month = currentDate.getMonth() //+ 1; // Months are zero-based, so we add 1
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        cy.start()
        cy.selectDateFromCalendar(year, month, dayOfMonth);
        cy.dayend()
        cy.selectDateFromCalendar(year, month, dayOfMonth+1);
        cy.endtime()
        cy.selecttimeFrompicker(12,30)

        cy.log(`Day: ${dayOfMonth}`);
        cy.log(`Month: ${month}`);
        cy.log(`Year:${year}`);
        cy.log(`Time: ${hours}:${minutes}:${seconds}`);
        cy.log(`Current Hour: ${hours}`);
        cy.log(`Current Minute: ${minutes}`);

        cy.clickOnAddTime();
        cy.clickNextButton();
        cy.clickOnAggregator();
        cy.clickNextButton();
        cy.clickOnTermsAndConditions();
        cy.wait(2000);
        cy.clickOnCreateCampaign();

    })
})


