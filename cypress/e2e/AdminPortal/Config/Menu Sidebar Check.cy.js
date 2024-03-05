const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('Pro menu check', () => {
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('search the orders', () => {
        cy.SelectOrderDashboard()
    })
    it('search the menu', () => {
        cy.SelectMenu()
        cy.SelectMenuBeta()
    })
    it('search the Marketing', () => {
        cy.SelectWebshop()
        cy.SelectLinks()
        cy.SelectPromo()
        cy.SelectCampaign()
        cy.SelectLoyalty()
        cy.SelectReservation()
        cy.SelectWhitelabel()
    })
    it('search the analytics', () => {
        cy.SelectAnalytics()
        cy.SelectActivities()
        cy.SelectLiveMonitor()
    })
    it('search the integration', () => {
        cy.SelectLntegrationStatus()
        cy.SelectAggregators()
        cy.SelectWebhooks()
        cy.SelectPaymentIntegration()
        cy.SelectRatingReview()
    })
    it('search the config', () => {
        cy.SelectAddOrderConfig()
        cy.SelectBusiness()
        cy.selectBrand()
        cy.SelectLocation()
        cy.SelectPrinterSettings()
        cy.SelectImageManager()
        cy.SelectUser()
        cy.SelectRole()
        cy.SelectPermission()
        cy.SelectFeatureAccess()
    })
    it.skip('Logouts the user', () => {
        cy.Logout()
    })
})