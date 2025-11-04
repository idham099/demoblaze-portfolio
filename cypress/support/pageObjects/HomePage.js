class HomePage {
    // Locators
    get loginLink() { return '#login2' }
    get welcomeMessage() { return '#nameofuser' }
    get logOutLink() {return '#logout2'}

    // Actions
    visit() {
        cy.visit('https://www.demoblaze.com/')
    }
    clickLogin() {
        cy.get(this.loginLink).click()
    }
    clickLogout() {
        cy.get(this.logOutLink).click()
    }
}
// Export instance agar bisa diakses di file test case
export default new HomePage()