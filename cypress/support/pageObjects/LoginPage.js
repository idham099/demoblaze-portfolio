class LoginPage {
    // Locators
    get usernameInput() { return '#loginusername' } // rel css selector
    get passwordInput() { return '#loginpassword' }
    get loginButton() { return 'button[onclick="logIn()"]' }
    get modalContainer() {return '#logInModal'}
    
    // menunggu hingga display: none diubah menjadi display: block/apapun yang membuatnya terlihat.
    ensureModalIsVisible() {
        cy.get(this.modalContainer)
            .should('be.visible');
    }

    // Actions
    fillLogin(username, password) {
        cy.get(this.usernameInput).type(username)
        cy.get(this.passwordInput).type(password)
    }
    submit() {
        cy.get(this.loginButton).click()
    }
  
    getErrorMessage() {
        return cy.get('.modal-content') 
    }
}
export default new LoginPage()