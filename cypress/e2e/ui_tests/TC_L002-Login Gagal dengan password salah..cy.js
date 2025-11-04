import HomePage from '../../support/pageObjects/HomePage'
import LoginPage from '../../support/pageObjects/LoginPage'
import users from '../../support/data/users.json'

const InvalidUser = users.invalid;

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

        const expectedAlertText = "User does not exist.";
        let alertCalled = false;
        cy.on('window:alert', (text) => {
            alertCalled = true;
            // Melakukan Assertion pada pesan alert yang muncul
            expect(text).to.equal(expectedAlertText);
        });

        // When pengguna mengklik Login dan mengisi form
        LoginPage.fillLogin(InvalidUser.username, InvalidUser.password)
        
        // And Pengguna menekan tombol "Log in"
        LoginPage.submit()

       // Di sini seharusnya ada assertion yang mencari pesan error di DOM, misalnya:
        cy.get(LoginPage.errorMessageContainer) // Anda harus mendefinisikan locator ini!
           .should('be.visible')
           .and('contain', expectedAlertText);
        
        // Then pengguna berhasil login
        cy.get(HomePage.welcomeMessage) // Pastikan ejaan dan kapitalisasi sesuai
                .should('be.visible')
    })
})