let testData= {}
before(function(){
    cy.fixture('campaignData.json').as('Campaign_dataset').then(function(data){
        testData.data =data
    })
})

import {faker} from "@faker-js/faker";

Cypress.Commands.add('CreateCampaign', () =>{
    cy.get('.justify-end > .flex-row > .text-xs').click()
})

Cypress.Commands.add('EnterCampaignName',()=>{
    cy.get('.sc-input-container > .border').type("automation "+faker.lorem.word(8,8))
    })

Cypress.Commands.add('PickBusiness',()=>{
    cy.get(':nth-child(1) > .sc-select-container > .sc-selector > .sc-select-placeholder').click()
})

Cypress.Commands.add('enterBusinessName',()=> {
    cy.get(':nth-child(1) > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.General.business);
    cy.wait(2000)
    cy.get('.sc-select-dropdown-item').click()
})

Cypress.Commands.add('enterBrand',()=> {
    cy.get(':nth-child(2) > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.General.brand);
    cy.wait(2000);
    cy.get('.sc-select-dropdown-item').click()
})

Cypress.Commands.add('enterBranchData',()=> {
    cy.get('.flex.w-full > .sc-select-container > .sc-selector > .sc-select-placeholder').type(testData.data.General.location);
    cy.wait(2000);
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

Cypress.Commands.add("clickOnStartDate", () => {
    cy.get(':nth-child(15) > .gap-y-2 > .sc-select-container > .react-datepicker-wrapper > .react-datepicker__input-container > div > .sc-selector').click()
});

Cypress.Commands.add("clickOnEndDate", () => {
    cy.get(':nth-child(16) > .gap-y-2 > .sc-select-container > .react-datepicker-wrapper > .react-datepicker__input-container > div > .sc-selector').click()
});
Cypress.Commands.add("ClickOnEndTime", () => {
    cy.get(':nth-child(16) > :nth-child(2) > .flex-col > .sc-timepicker > .sc-timepicker-label').click();
    cy.log("end time clicked")
});


Cypress.Commands.add("clickOnAddTime",()=>{
    cy.get("button[class='flex flex-row items-center justify-center gap-x-1 px-4 py-2 bg-grey-light rounded-lg']").click();
});

// Cypress.Commands.add("clickOnAvailabilityDefaultDay",()=>{
//     cy.xpath("//div[contains(@class,'flex flex-col gap-y-4')]//div//div[contains(@class,'grid grid-cols-8 w-full max-w-full overflow-x-auto scrollbar-none')]//button[contains(@type,'button')][normalize-space()='Default']").click();
// });
Cypress.Commands.add("clickOnAggregatorFromMultipleAggregator",(nameOfAggregator)=>{
    if(nameOfAggregator==="klikit"){
        cy.xpath("//form[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]").click();

    }else if (nameOfAggregator==="grab"){
        cy.xpath("//form[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]").click();
    }
});

Cypress.Commands.add("clickOnAggregator",(grab)=>{
    cy.get('.w-full > .sc-checkbox-container > .sc-checkbox').click();
})

Cypress.Commands.add("clickOnTermsAndConditions",()=>{
    cy.get('.gap-x-12 > :nth-child(2) > .sc-checkbox-container > .sc-checkbox').click();
})

Cypress.Commands.add("clickOnCreateCampaign",() => {
    cy.get('.p-4.rounded-lg > .px-4').click().wait(1000).click({force:true})

    //todo
    //Need to fix creating two campaign with the same name for the following command
    //cy.get('.p-4.rounded-lg > .px-4').type("{enter}");
});

Cypress.Commands.add("clickOnAvailabilityDefaultDay",()=>{
    cy.xpath("//div[contains(@class,'flex flex-col gap-y-4')]//div//div[contains(@class,'grid grid-cols-8 w-full max-w-full overflow-x-auto scrollbar-none')]//button[contains(@type,'button')][normalize-space()='Default']").click();
})

Cypress.Commands.add("availabilityStartTime",()=>{
    cy.get('.mr-2 > .sc-timepicker > .sc-timepicker-label').click();
})

Cypress.Commands.add("availabilityEndTime",()=>{
cy.get(':nth-child(1) > :nth-child(2) > .sc-timepicker > .sc-timepicker-label').click();
});

Cypress.Commands.add("clickOnFlatDiscount",()=>{
    cy.get(':nth-child(3) > :nth-child(1) > .grid-cols-3 > :nth-child(2)').click();
})

Cypress.Commands.add("clickOnDeliveryFeeDiscount",()=>{
    cy.get(':nth-child(3) > :nth-child(1) > .grid-cols-3 > :nth-child(3)').click();
})