import HomePage from '../../support/pageObjects/HomePage'
import LoginPage from '../../support/pageObjects/LoginPage'
import users from '../../support/data/users.json'

const validUser = users.valid;

describe('Test Suite A: UI - Authentication', () => {
    // --- TC A.1.1: Login Sukses (P1, Regression) ---
    it('A.1.1 [Positive] Login Sukses dengan Credential Valid (Menggunakan Mocking)', () => {
        
        // [SDET Skill: Mocking API untuk stabilitas UI]
        // Kita meniru respons sukses dari endpoint POST /login
        cy.intercept('POST', '**/login', (req) => {
            req.reply({
                statusCode: 200,
                body: { "Auth_Token": "simulated_token_12345" } 
            })
        }).as('loginSuccess'); // Memberi nama untuk di-wait

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
        
        // When pengguna mengklik Login dan mengisi form
        HomePage.clickLogin()
        LoginPage.fillLogin(validUser.username, validUser.password)
        LoginPage.submit()

        // Wait untuk memastikan request palsu (mock) terkirim
        cy.wait('@loginSuccess') 
        
        // Then pengguna berhasil login
        cy.get(HomePage.welcomeMessage)
            .should('be.visible')
            .and('contain', `Welcome ${validUser.username}`)
    })
})