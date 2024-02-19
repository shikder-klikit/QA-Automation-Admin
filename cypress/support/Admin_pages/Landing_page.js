Cypress.Commands.add('select_Order_dashboard', () =>{
    cy.wait(1000)
    cy.get('ul > :nth-child(2) > .pro-inner-item > .pro-item-content > a').click()
})
Cypress.Commands.add('select_Menu', () =>{
    cy.wait(1000)
    cy.contains('Menu').click()
})
Cypress.Commands.add('select_Menu_Beta', () =>{
    cy.wait(1000)
    cy.get('ul > :nth-child(5) > .pro-inner-item > .pro-item-content > a').click()
})
Cypress.Commands.add('select_Webshop', () =>{
    cy.wait(1000)
    cy.contains('Webshop').click()
})
Cypress.Commands.add('select_Links', () =>{
    cy.wait(1000)
    cy.contains('Links').click()
})
Cypress.Commands.add('select_Promo', () =>{
    cy.wait(1000)
    cy.contains('Promo').click()
})
Cypress.Commands.add('select_campaign', () =>{
    cy.wait(1000)
    cy.contains('Campaign').click()
})
Cypress.Commands.add('select_Loyalty', () =>{
    cy.wait(1000)
    cy.contains('Loyalty').click()
})
Cypress.Commands.add('select_Reservation', () =>{
    cy.wait(1000)
    cy.contains('Reservation').click()
})
Cypress.Commands.add('select_Whitelabel', () =>{
    cy.wait(1000)
    cy.contains('White Label').click()
})
Cypress.Commands.add('select_Analytics', () =>{
    cy.wait(1000)
    cy.get(':nth-child(14) > :nth-child(2) > .pro-inner-item > .pro-item-content > a').click()
})
Cypress.Commands.add('select_Activities', () =>{
    cy.wait(1000)
    cy.contains('Activities').click()
})
Cypress.Commands.add('select_Live_monitor', () =>{
    cy.wait(1000)
    cy.contains('Live Monitor').click()
})
Cypress.Commands.add('select_Integration_status', () =>{
    cy.wait(1000)
    cy.contains('Integration Status').click()
})
Cypress.Commands.add('select_Aggregators', () =>{
    cy.wait(1000)
    cy.contains('Aggregators').click()
})
Cypress.Commands.add('select_Webhooks', () =>{
    cy.wait(1000)
    cy.contains('Webhooks').click()
})
Cypress.Commands.add('select_Payment_integration', () =>{
    cy.wait(1000)
    cy.contains('Payment Integration').click()
})
Cypress.Commands.add('select_Rating_Review', () =>{
    cy.wait(1000)
    cy.contains('Rating & Review').click()
})
Cypress.Commands.add('select_Add_Order_Config', () =>{
    cy.wait(1000)
    cy.contains('Add Order Config').click()
})
Cypress.Commands.add('select_Business', () =>{
    cy.wait(1000)
    cy.contains('Business').click()
})
Cypress.Commands.add('select_Location', () =>{
    cy.wait(1000)
    cy.contains('Location').click()
})
Cypress.Commands.add('select_Brand', () =>{
    cy.wait(1000)
    cy.contains('Brand').click()
})
Cypress.Commands.add('select_Printer_settings', () =>{
    cy.wait(1000)
    cy.contains('Printer Settings').click()
})
Cypress.Commands.add('select_Image_manager', () =>{
    cy.wait(1000)
    cy.contains('Image Manager').click()
})
Cypress.Commands.add('select_User', () =>{
    cy.wait(1000)
    cy.contains('User').click()
})
Cypress.Commands.add('select_Role', () =>{
    cy.wait(1000)
    cy.contains('Role').click()
})
Cypress.Commands.add('select_Permission', () =>{
    cy.wait(1000)
    cy.contains('Permission').click()
})
Cypress.Commands.add('select_Feature_access', () =>{
    cy.wait(1000)
    cy.contains('Feature Access').click()
})