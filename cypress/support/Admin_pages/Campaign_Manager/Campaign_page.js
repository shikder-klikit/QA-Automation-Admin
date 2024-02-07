let testData= {}
before(function(){
    cy.fixture('CloudApp/campaignData.json').as('Campaign_dataset').then(function(data){
        testData.data =data
    })
})

import {faker} from "@faker-js/faker";

Cypress.Commands.add('create_campaign', () =>{
    cy.get('.justify-end > .flex-row > .text-xs').click()
})

Cypress.Commands.add('enter_campaign_name',()=>{
    cy.get('.sc-input-container > .border').type("automation "+faker.lorem.word(8,8))
    })

Cypress.Commands.add('pick_business',()=>{
    cy.get(':nth-child(1) > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
})

Cypress.Commands.add('enterBusinessName',()=> {
    cy.get(':nth-child(1) > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.General.business);
    cy.get('.sc-select-dropdown-item').click()
})

Cypress.Commands.add('enterBrand',()=> {
    cy.get(':nth-child(2) > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.General.brand);
    cy.get('.sc-select-dropdown-item').click()
})

Cypress.Commands.add('enterBranchData',()=> {
    cy.get('.flex.w-full > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.General.location);
    cy.get('.sc-select-dropdown-item').click()
})

Cypress.Commands.add('clickCloseButton',()=>{
    cy.get('.width > :nth-child(2)').click()
})

Cypress.Commands.add('clickNextButton',()=>{
    cy.get('.justify-end > .text-white').click()
})

Cypress.Commands.add('enterValue',()=>{
    cy.get(':nth-child(10) > :nth-child(1) > .flex-row > .flex-1 > .sc-input-container > .border-none').type(testData.data.DetailsAndConditions.value);
})

Cypress.Commands.add('enterValueUpto',()=>{
    cy.get(':nth-child(10) > :nth-child(2) > .flex-row > .flex-1 > .sc-input-container > .border-none').type(testData.data.DetailsAndConditions.valueUpto);
})

Cypress.Commands.add('enterMaxUsageLimit',()=>{
    cy.get(':nth-child(11) > :nth-child(1) > .flex-row > .flex-1 > .sc-input-container > .border-none').type(testData.data.DetailsAndConditions.maxUsageLimit);
})
Cypress.Commands.add('enterMaxUsePerUser',()=>{
    cy.get(':nth-child(11) > :nth-child(2) > .flex-row > .flex-1 > .sc-input-container').type(testData.data.DetailsAndConditions.maxUsePerUser);
})

Cypress.Commands.add('enterMinCartValue',()=>{
    cy.get(':nth-child(3) > .flex-row > .flex-1 > .sc-input-container > .border-none').type(testData.data.DetailsAndConditions.minCartValue);
})

Cypress.Commands.add("start", () => {
    cy.get(':nth-child(15) > .gap-y-2 > .sc-select-container > .react-datepicker-wrapper > .react-datepicker__input-container > div > .sc-selector').click()
});

Cypress.Commands.add("dayend", () => {
    cy.get(':nth-child(16) > .gap-y-2 > .sc-select-container > .react-datepicker-wrapper > .react-datepicker__input-container > div > .sc-selector').click()
});
Cypress.Commands.add("endtime", () => {
    cy.get(':nth-child(16) > :nth-child(2) > .flex-col > .sc-timepicker > .sc-timepicker-label').click()
});

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
Cypress.Commands.add("selecttimeFrompicker", (targethour,targetminute) => {
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

Cypress.Commands.add("clickOnAddTime",()=>{
    cy.get(':nth-child(20) > .flex-row').click();
});

Cypress.Commands.add("clickOnAggregator",()=>{
    cy.get('.grid > :nth-child(2) > .sc-checkbox-container > .sc-checkbox').click();
});

Cypress.Commands.add("clickOnTermsAndConditions",()=>{
    cy.get('.gap-x-12 > :nth-child(2) > .sc-checkbox-container > .sc-checkbox').click();
})

Cypress.Commands.add("clickOnCreateCampaign",() => {
    cy.get('.p-4.rounded-lg > .px-4').type("{enter}");
});