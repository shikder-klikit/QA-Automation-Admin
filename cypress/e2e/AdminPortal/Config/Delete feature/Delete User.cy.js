import UtilityMethods, {UserType} from "../../../../support/Common_methods/utilityMethods";
const user = new UtilityMethods()
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('create User then deletes the user',function(){
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it('should create cloud branch manager from admin', function(){
        cy.SelectUser()
        user.clickOnNew()
        cy.AddFirstName()
        cy.AddLastName()
        cy.AddEmail()
        cy.AddPhone()
        cy.AddPicture()
        cy.AddBranchManagerrole()
        user.clickedOnSave()
        cy.ShowUser()
    })
    it('should delete cloud branch manager from admin', function(){
        cy.SelectUser()
        cy.DeleteUser()
    })
})