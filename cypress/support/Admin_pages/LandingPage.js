Cypress.Commands.add('SelectOrderDashboard', () =>{
    cy.wait(1000)
    cy.get('ul > :nth-child(2) > .pro-inner-item > .pro-item-content > a').click()
})
Cypress.Commands.add('SelectMenu', () =>{
    cy.wait(1000)
    cy.get('ul > :nth-child(4) > .pro-inner-item > .pro-item-content > a').click()
})
Cypress.Commands.add('SelectWebshop', () =>{
    cy.wait(1000)
    cy.contains('Webshop').click()
})
Cypress.Commands.add('SelectLinks', () =>{
    cy.wait(1000)
    cy.contains('Links').click()
})
Cypress.Commands.add('SelectPromo', () =>{
    cy.wait(1000)
    cy.contains('Promo').click()
})
Cypress.Commands.add('SelectCampaign', () =>{
    cy.wait(1000)
    cy.contains('Campaign').click()
})
Cypress.Commands.add('SelectLoyalty', () =>{
    cy.wait(1000)
    cy.contains('Loyalty').click()
})
Cypress.Commands.add('SelectReservation', () =>{
    cy.wait(1000)
    cy.contains('Reservation').click()
})
Cypress.Commands.add('SelectWhitelabel', () =>{
    cy.wait(1000)
    cy.contains('White Label').click()
})
Cypress.Commands.add('SelectAnalytics', () =>{
    cy.wait(1000)
    cy.get(':nth-child(13) > :nth-child(2) > .pro-inner-item > .pro-item-content > a').click()
})
Cypress.Commands.add('SelectActivities', () =>{
    cy.wait(1000)
    cy.contains('Activities').click()
})
Cypress.Commands.add('SelectLiveMonitor', () =>{
    cy.wait(1000)
    cy.contains('Live Monitor').click()
})
Cypress.Commands.add('SelectLntegrationStatus', () =>{
    cy.wait(1000)
    cy.contains('Integration Status').click()
})
Cypress.Commands.add('SelectAggregators', () =>{
    cy.wait(1000)
    cy.contains('Aggregators').click()
})
Cypress.Commands.add('SelectWebhooks', () =>{
    cy.wait(1000)
    cy.contains('Webhooks').click()
})
Cypress.Commands.add('SelectPaymentIntegration', () =>{
    cy.wait(1000)
    cy.contains('Payment Integration').click()
})
Cypress.Commands.add('SelectRatingReview', () =>{
    cy.wait(1000)
    cy.contains('Rating & Review').click()
})
Cypress.Commands.add('SelectAddOrderConfig', () =>{
    cy.wait(1000)
    cy.contains('Add Order Config').click()
})
Cypress.Commands.add('SelectBusiness', () =>{
    cy.wait(1000)
    cy.contains('Business').click()
})
Cypress.Commands.add('SelectLocation', () =>{
    cy.wait(1000)
    cy.contains('Location').click()
})
Cypress.Commands.add('selectBrand', () =>{
    cy.wait(1000)
    cy.contains('Brand').click()
})
Cypress.Commands.add('SelectPrinterSettings', () =>{
    cy.wait(1000)
    cy.contains('Printer Settings').click()
})
Cypress.Commands.add('SelectImageManager', () =>{
    cy.wait(1000)
    cy.contains('Image Manager').click()
})
Cypress.Commands.add('SelectUser', () =>{
    cy.wait(1000)
    cy.contains('User').click()
})
Cypress.Commands.add('SelectRole', () =>{
    cy.wait(1000)
    cy.contains('Role').click()
})
Cypress.Commands.add('SelectPermission', () =>{
    cy.wait(1000)
    cy.contains('Permission').click()
})
Cypress.Commands.add('SelectFeatureAccess', () =>{
    cy.wait(1000)
    cy.contains('Feature Access').click()
})