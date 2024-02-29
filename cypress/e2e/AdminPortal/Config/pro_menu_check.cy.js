const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('Pro menu check', () => {
    beforeEach(() => {
        login('user')
        cy.visithomepage()
    })
    it('search the orders', () => {
        cy.select_Order_dashboard()
    })
    it('search the menu', () => {
        cy.select_Menu()
        cy.select_Menu_Beta()
    })
    it('search the Marketing', () => {
        cy.select_Webshop()
        cy.select_Links()
        cy.select_Promo()
        cy.select_campaign()
        cy.select_Loyalty()
        cy.select_Reservation()
        cy.select_Whitelabel()
    })
    it('search the analytics', () => {
        cy.select_Analytics()
        cy.select_Activities()
        cy.select_Live_monitor()
    })
    it('search the integration', () => {
        cy.select_Integration_status()
        cy.select_Aggregators()
        cy.select_Webhooks()
        cy.select_Payment_integration()
        cy.select_Rating_Review()
    })
    it('search the config', () => {
        cy.select_Add_Order_Config()
        cy.select_Business()
        cy.selectBrand()
        cy.select_Location()
        cy.select_Printer_settings()
        cy.select_Image_manager()
        cy.select_User()
        cy.select_Role()
        cy.select_Permission()
        cy.select_Feature_access()
    })
    it.skip('logouts the user', () => {
        cy.logout()
    })
})