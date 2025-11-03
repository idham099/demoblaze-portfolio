class HomePage {
    // Locators
    get loginLink() { return '#login2' }
    get welcomeMessage() { return '#nameofuser' }

    // Actions
    visit() {
        cy.visit('https://www.demoblaze.com/')
    }
    clickLogin() {
        cy.get(this.loginLink).click()
    }
}
// Export instance agar bisa diakses di file test case
export default new HomePage()