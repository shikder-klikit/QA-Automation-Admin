import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const menu = new UtilityMethods()
const login = () => {
  cy.LoginAsAutomationAdminWithsession()
}
describe('Business level category', () => {
  beforeEach(() => {
    login('user')
    cy.VisitHomePage()
  })
  it('should create business level category from admin', function(){
    cy.SelectMenu()
    cy.SelectBusinessForMenu()
    cy.SelectModifier()
    menu.AddNewButton()
    cy.AddModifierName()
    cy.AddModifierDescription()
    cy.ModifierSaveButton()
  })
  it('should search & delete business level category from admin', function(){
    cy.SelectMenu()
    cy.SelectBusinessForMenu()
    cy.SelectModifier()
    cy.ModifierDelete()
  })
})