import {el} from "@faker-js/faker";

const next=".justify-end > .text-white"
const campaignUser =".radio-container"
const newUser=":nth-child(1) > .sc-radio-text"
const everyone =":nth-child(2) > .sc-radio-text";
const save = "";
const closingHour = "";
const openingHour = "";
const selectHour = "";
const selectMinute = "";
const startDate="";
const startTimeParent=":nth-child(15) > :nth-child(2) > .flex-col > .sc-timepicker > .sc-timepicker-label";
const endDate="";
const endTime = "";
const availabilityStartTime="";
const availabilityEndTime ="";

class Campaign
{
    clickedOnSave(){
        cy.xpath(save).click({force:true})
    }

    clickedOnOpeningHourAndSelectedRandomValue(){
        cy.get(openingHour).click()
        const randomHour = Cypress._.random(0, 22);
        cy.get(selectHour).eq(randomHour).click();
        const randomMinute = Cypress._.random(0, 5) * 5;
        cy.get(selectMinute).eq(randomMinute / 5).click();
    }

    clickedOnClosingHourAndSelectedRandomValue(){
        cy.get(closingHour).click()
        const randomHour = Cypress._.random(0, 22);
        cy.get(selectHour).eq(randomHour).click();
        const randomMinute = Cypress._.random(0, 5) * 5;
        cy.get(selectMinute).eq(randomMinute / 5).click();
    }

    clickOnNext() {
        cy.get(next).click()
    }

    clickCampaignUser(newuser_Or_everyone){

        if (newuser_Or_everyone==="newuser")
       {
            cy.get(newUser).click()
        }else
        {
            cy.get(everyone).click()
        }
}

    // setStartTime30MinutesAhead() {
    //     cy.get(startTime).click();
    //     const currentDate = new Date();
    //     const futureDate = new Date(currentDate.getTime() + 30 * 60000); // 30 minutes in milliseconds
    //     const futureHour = futureDate.getHours();
    //     const futureMinute = futureDate.getMinutes();
    //
    //     cy.get(selectHour).eq(futureHour).click();
    //     cy.get(selectMinute).eq(futureMinute / 5).click();
    // }
    //
    // setEndTime30MinutesAhead() {
    //     cy.get(endTime).click();
    //     const currentDate = new Date();
    //     const futureDate = new Date(currentDate.getTime() + 30 * 60000); // 30 minutes in milliseconds
    //     const futureHour = futureDate.getHours();
    //     const futureMinute = futureDate.getMinutes();
    //
    //     cy.get(selectHour).eq(futureHour).click();
    //     cy.get(selectMinute).eq(futureMinute / 5).click();
    // }

}
export default Campaign