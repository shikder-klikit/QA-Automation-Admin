/// <reference types="cypress" />
import UtilityMethods, {Aggregator, UserType} from "../../../support/Common_methods/utilityMethods";
const campaign = new UtilityMethods();
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('Campaign_create_order_level_percentage',function(){
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('should create new campaign', function() {
        cy.SelectCampaign();
        cy.CreateCampaign();
        cy.EnterCampaignName();
        cy.enterBusinessName()
        cy.enterBrand();
        cy.enterBranchData();
        cy.clickCloseButton();
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

        cy.clickOnStartDate();
        cy.selectDateFromCalendar(year, month, dayOfMonth);
        cy.clickOnEndDate();
        cy.selectDateFromCalendar(year, month, dayOfMonth+1);
        cy.ClickOnEndTime();
        cy.selectTimeFromPicker(hours,minutes)
        cy.clickOnAddTime();
        cy.clickOnAvailabilityDefaultDay();
        cy.availabilityStartTime();
        cy.selectTimeFromPicker(0,0);
        cy.availabilityEndTime();
        cy.selectTimeFromPicker(23,59);
        cy.clickNextButton();
        campaign.clickAggregator(Aggregator.Grab);
        cy.clickNextButton();
        cy.clickOnTermsAndConditions();
        cy.wait(2000);
        cy.clickOnCreateCampaign();
    })
})


