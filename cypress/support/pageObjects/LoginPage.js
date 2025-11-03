class LoginPage {
    // Locators
    get usernameInput() { return '#loginusername' } // rel css selector
    get passwordInput() { return '#loginpassword' }
    get loginButton() { return 'button[onclick="logIn()"]' }

    // Actions
    fillLogin(username, password) {
        cy.get(this.usernameInput).type(username)
        cy.get(this.passwordInput).type(password)
    }
    submit() {
        cy.get(this.loginButton).click()
    }
    // Aksi tambahan untuk mendapatkan pesan error (jika menggunakan modal)
    getErrorMessage() {
        return cy.get('.modal-content') 
    }
}
export default new LoginPage()