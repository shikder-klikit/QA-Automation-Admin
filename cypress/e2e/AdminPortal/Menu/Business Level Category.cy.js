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
    cy.SelectMenuBeta()
    cy.SelectBusinessForMenu()
    cy.SelectModifier()
    menu.AddNewButton()
    cy.AddModifierName()
    cy.AddModifierDescription()
    cy.ModifierSaveButton()
  })
  it('should search & delete business level menu from admin', function(){
    cy.SelectMenuBeta()
    cy.SelectBusinessForMenu()
    cy.SelectModifier()
    cy.ModifierDelete()
  })
})