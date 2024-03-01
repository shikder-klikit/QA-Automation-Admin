//import {el} from "@faker-js/faker";

const next=".justify-end > .text-white"
const campaignUser =".radio-container"
const newUser=":nth-child(1) > .sc-radio-text"
const everyone =":nth-child(2) > .sc-radio-text";
const save = ".justify-between > .text-sm";
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
const clicknewbutton = ".px-4"
const clickoncheckbox = ".sc-checkbox"
const Sunday=".sc-tg > div:nth-of-type(1)"
const Monday=".sc-tg > div:nth-of-type(2)"
const Tuesday=".sc-tg > div:nth-of-type(3)"
const Wednesday=".sc-tg > div:nth-of-type(4)"
const Thursday=".sc-tg > div:nth-of-type(5)"
const Friday=".sc-tg > div:nth-of-type(6)"
const Saturday=".sc-tg > div:nth-of-type(7)"
const klikit="//form[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]";
const grab="//form[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]";
export const UserType= {
    NewUser:'newuser',
    EveryOne:'everyone'
}

export const Aggregator = {
    KlikIt:'klikit',
    Grab:'grab'
}

class UtilityMethods
{
    clickedOnSave(){
        cy.get(save).click({force:true})
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
    clickOnNew() {
        cy.get(clicknewbutton).click()
    }
    clickoncheckbox() {
        cy.get(clickoncheckbox).click()
    }
    selectSunday(){
        cy.get(Sunday).click()
    }
    selectMonday(){
        cy.get(Monday).click()
    }
    selectTuesday(){
        cy.get(Tuesday).click()
    }
    selectWednesday(){
        cy.get(Wednesday).click()
    }
    selectThursday(){
        cy.get(Thursday).click()
    }
    selectFriday(){
        cy.get(Friday).click()
    }
    selectSaturday(){
        cy.get(Saturday).click()
    }

    clickCampaignUser(userType){

        if (userType.NewUser)
       {
            cy.get(newUser).click()
        }else
        {
            cy.get(everyone).click()
        }
    }

    clickAggregator(aggregatorName){

        if(Aggregator.Grab){
            cy.xpath(grab).click();
        }
        else if(Aggregator.KlikIt){
            cy.xpath(klikit).click();
        }
    }

    setStartDate() {
        // Get current date and time
        const currentDate = new Date();
        const currentDateTimeString = currentDate.toISOString(); // You can format it as needed
        cy.selectDateFromCalendar_start(currentDateTimeString);

    }
    setEndDate() {
        // Get current date and time
        const currentDate = new Date();
        const currentDateTimeString = currentDate.toISOString(); // You can format it as needed
        cy.selectDateFromCalendar_end(currentDateTimeString);
    }

}


Cypress.Commands.add("selectDateFromCalendar", (yearCount, targetMonth, targetDate) => {

    // Select year
    cy.get('.datepicker-header > :nth-child(2)').select(yearCount.toString());

    // Select month
    cy.get('.datepicker-header > :nth-child(3)').select(targetMonth);

    // Select date
    cy.get('.react-datepicker__day').each(($dateElement, index) => {
        const dateText = $dateElement.text();
        if (dateText.trim() === targetDate.toString()) {
            cy.wrap($dateElement).click();
            return false; // exit loop if date is found
        }
    });
});
Cypress.Commands.add("selectTimeFromPicker", (targethour,targetminute) => {
    // Select hour
    cy.get('.hour-half >').each(($hourElement, index) => {
        const hourText = $hourElement.text();
        if (hourText.trim() === targethour.toString()) {
            cy.wrap($hourElement).click();
            return false; // exit loop if date is found
        }
    });
    cy.get('.minute-half >').each(($minuteElement, index) => {
        const minuteText = $minuteElement.text();
        if (minuteText.trim() === targetminute.toString()) {
            cy.wrap($minuteElement).click();
            return false; // exit loop if date is found
        }
    });
});
export default UtilityMethods