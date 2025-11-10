class SignUp {
    // Locators
    get SignUsernameInput() { return '#sign-username' } 
    get SignPasswordInput() { return '#sign-password' }
    get SignUpButton() { return 'button[onclick="register()"]' }
    get modalContainer() {return '#signInModal'}
    
    // menunggu hingga modalnya tampil
    ensureModalIsVisible() {
        cy.get(this.modalContainer)
            .should('be.visible');
    }

    // Actions
    fillSignUp(signusername, signpassword) {
        cy.get(this.SignUsernameInput).type(signusername)
        cy.get(this.SignPasswordInput).type(signpassword)
    }
    submit() {
        cy.get(this.SignUpButton).click()
    }
  
    getErrorMessage() {
        return cy.get('.modal-content') 
    }
}
export default new SignUp()