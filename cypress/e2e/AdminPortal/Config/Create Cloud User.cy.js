import UtilityMethods, {UserType} from "../../../support/Common_methods/utilityMethods";
const user = new UtilityMethods()
const login = () => {
    cy.LoginAsAutomationAdminWithsession()
}
describe('create User',function(){
    beforeEach(() => {
        login('user')
        cy.VisitHomePage()
    })
    it.skip('should create admin user from admin', function(){
        cy.SelectUser()
        user.clickOnNew()
        cy.AddFirstName()
        cy.AddLastName()
        cy.AddEmail()
        cy.AddPhone()
        cy.AddPicture()
        cy.AddRoleAdmin()
        user.clickedOnSave()
    })
    it.skip('should create cloud biz owner from admin', function(){
        cy.SelectUser()
        user.clickOnNew()
        cy.AddFirstName()
        cy.AddLastName()
        cy.AddEmail()
        cy.AddPhone()
        cy.AddPicture()
        cy.AddRoleBizOwner()
        user.clickedOnSave()
    })
    it.skip('should create cloud brand manager from admin', function(){
        cy.SelectUser()
        user.clickOnNew()
        cy.AddFirstName()
        cy.AddLastName()
        cy.AddEmail()
        cy.AddPhone()
        cy.AddPicture()
        cy.AddBrandManagerrole()
        user.clickedOnSave()
    })
    it('should create cloud branch manager from admin', function(){
        cy.SelectUser()
        user.clickOnNew()
        cy.AddFirstName()
        cy.AddLastName()
        cy.AddEmail()
        cy.AddPhone()
        cy.AddPicture()
        //cy.AddBranchManagerrole()
        // user.clickedOnSave()
    })
})