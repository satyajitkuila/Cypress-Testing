import { LoginPage } from "../e2e/Pages/LoginPage"

var loginPage = new LoginPage()

describe('AllLogin test', () => {
    it('T1:user on login page', function () {
        loginPage.navigate('https://trytestingthis.netlify.app/')
        loginPage.enterUsername('test')
        loginPage.enterPassword('test')
        loginPage.clickLogin()

    })
})

describe('Get Table data', () => {
    it('T1:user data on home page', function () {
        loginPage.navigate('https://trytestingthis.netlify.app/')
        //cy.get('tbody > :nth-child(2) > :nth-child(1)')
        //cy.get('tbody>tr').eq()
        // cy.get('tbody > :nth-child(2) > :nth-child(4)')
        // .then(function(Field) {
        // const Fieldtext = Field.text();
        // expect(Fieldtext).to.equal("27");})
        
    

    })
})



