export class LoginPage {

    login_username = '#uname'
    login_password = '#pwd'
    login_button = '[type="submit"]'

    navigate(url: string) {
        cy.visit(url)
    }
    enterUsername(user: string) {
        cy.get(this.login_username).type(user)

    }
    enterPassword(pswd: string) {
        cy.get(this.login_password).type(pswd)

    }
    clickLogin() {
        cy.get(this.login_button).click()

    }

    

}