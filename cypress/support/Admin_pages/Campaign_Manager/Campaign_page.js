let testData= {}
before(function(){
    cy.fixture('CloudApp/campaignData.json').as('Campaign_dataset').then(function(data){
        testData.data =data
    })
})

import {faker} from "@faker-js/faker";
import Pikaday from 'pikaday';

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

Cypress.Commands.add('selectDateFromCalendar_start', (date) => {
    cy.get(':nth-child(15) > .gap-y-2 > .sc-select-container > .react-datepicker-wrapper > .react-datepicker__input-container > div > .sc-selector').then(($input) => {
        const picker = new Pikaday({
            field: $input[0],
            format: 'MMM D YYYY',  // Adjust the format based on your application's requirements
            yearRange: [1900, 2100],  // Adjust the year range as needed
            toString(date) {
                const options = { month: 'short', day: 'numeric', year: 'numeric' };
                const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
                return formattedDate.replace(',', '');
            },
        });

        // Set the date using Pikaday
        picker.setDate(date);
    });
});

Cypress.Commands.add('selectDateFromCalendar_end', (date) => {
    cy.get(':nth-child(16) > .gap-y-2 > .sc-select-container > .react-datepicker-wrapper > .react-datepicker__input-container > div > .sc-selector').then(($input) => {
        const picker = new Pikaday({
            field: $input[0],
            format: 'MMM D YYYY',  // Adjust the format based on your application's requirements
            yearRange: [1900, 2100],  // Adjust the year range as needed
            toString(date) {
                const options = { month: 'short', day: 'numeric', year: 'numeric' };
                const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
                return formattedDate.replace(',', '');
            },
        });

        // Set the date using Pikaday
        picker.setDate(date);
    });
});



