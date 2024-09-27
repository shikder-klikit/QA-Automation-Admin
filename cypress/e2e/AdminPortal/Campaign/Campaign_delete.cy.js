const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('Campaign_delete',function() {
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })

    it('should delete campaign from dashboard.', function () {
        cy.SelectCampaign();
        cy.filterCampaignByBusinessName();
        //cy.filterCampaignByStatus("expired");
        cy.filterCampaignByStatus("upcoming");
        cy.filterCampaignByStatus("active");
        cy.deleteCampaign();
        })

})