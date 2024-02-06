/// <reference types="cypress" />
import CampaignMethods from "../../../support/Common_methods/campaignMethods";

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

        // cy.window().then((win) => {
        //     const newDate = new Date(win.Date());
        //     // do something usefull with the date
        //     console.log('#############'+ newDate);
        //});
        campaign.clickCampaignUser("everyone");

        // cy.get('.flex flex-row items-center gap-x-4 mt-4');
        // cy.get('.flex flex-row items-center gap-x-4 mt-4').first();
        // cy.get('.flex flex-row items-center gap-x-4 mt-4').last();

        // // Get current date and time
        // const currentDate = new Date();
        // const currentDateTimeString = currentDate.toISOString(); // You can format it as needed
        //
        // // Log the current date and time
        // cy.log('Current Date and Time: ' + currentDateTimeString);
        // cy.log(currentDateTimeString.getDate());

        // campaign.setStartTime30MinutesAhead();
        // campaign.setEndTime30MinutesAhead();
        // Now you can use the current date and time in your Cypress test as needed
        // For example, you can use it in assertions or interact with your application

        const currentDate = new Date();
        const dayOfMonth = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();


        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();

        //cy.log(`Day: ${dayOfMonth}`);
        //cy.log(`Month: ${month}`);
        //cy.log(`Time: ${hours}:${minutes}:${seconds}`);
        //cy.log(`Current Hour: ${currentHour}`);
        //cy.log(`Current Minute: ${currentMinute}`);

        cy.get(':nth-child(15) > :nth-child(2) > .flex-col > .sc-timepicker > .sc-timepicker-label').click()
       // cy.get('.hour-half');
        //cy.get('.hour-half > .sc-timepicker-dropdown-row__selected');

        for (let hour = currentHour; hour <= 23; hour++) {
            cy.get('.hour-half').contains(hour).click();

            if (hour === currentHour) {
                // Match found or reached the current hour, break out of the loop
                return;
            }

            // Check if the selected hour matches the target hour
            cy.get('.hour-half > .sc-timepicker-dropdown-row__selected').then(($selectedHour) => {
                    const selectedHour = parseInt($selectedHour.text(), 10);
                }
            )
        }

        cy.get('.minute-half').click();

        for (let minute = currentMinute; minute <= 59; minute++) {
            cy.get('.minute-half').contains(minute).click();

            if (minute === currentMinute) {
                // Match found or reached the current minute, break out of the loop
                return;
            }

            // Check if the selected minute matches the target minute
            cy.get('.minute-half > .sc-timepicker-dropdown-row__selected').then(($selectedMinute) => {
                const selectedMinute = parseInt($selectedMinute.text(), 10);

            })
        }
    })
})


