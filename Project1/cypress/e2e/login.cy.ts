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
        

    })
})