const next=".justify-end > .text-white"
const save = "";
const closingHour = "";
const openingHour = "";
const selectHour = "";
const selectMinute = "";


const startDate="";
const startTime="";
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




}

export default Campaign