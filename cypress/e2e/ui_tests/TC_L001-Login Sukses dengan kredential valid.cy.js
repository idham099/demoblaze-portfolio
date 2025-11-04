import HomePage from '../../support/pageObjects/HomePage'
import LoginPage from '../../support/pageObjects/LoginPage'
import users from '../../support/data/users.json'

const validUser = users.valid;

describe('Modul: User Management', () => {
    // --- TC_L001: Login Sukses dengan kredensial yang valid. ---
    it('[Positive] TC TC_L001: Login Sukses dengan kredensial yang valid.', () => {
        
        cy.intercept('POST', '**/login').as('loginRequest');

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        //cek modal muncul 
        cy.get(HomePage.loginLink).should('be.visible').click(); 
        LoginPage.ensureModalIsVisible()

        //kasih jeda sedikit
        cy.wait(500)

        // When pengguna mengklik Login dan mengisi form
        LoginPage.fillLogin(validUser.username, validUser.password)
        
        // And Pengguna menekan tombol "Log in"
        LoginPage.submit()

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@loginRequest') 
        
        // Then pengguna berhasil login
        cy.get(HomePage.welcomeMessage)
            .should('be.visible')
            .and('contain', `Welcome ${validUser.username}`)
    })
})