import HomePage from '../../support/pageObjects/HomePage'
import LoginPage from '../../support/pageObjects/LoginPage'
import users from '../../support/data/users.json'

const validUser = users.valid;
const InvalidUser = users.invalid;

describe('Modul: User Management', () => {
    // --- TC_L002: Login Gagal dengan password salah. ---
    Cypress.on('uncaught:exception', (err, runnable) => {
       return false; // Abaikan error dari aplikasi yang tidak tertangkap
    });

    it('[Negative] TC_L002: Login Gagal dengan password salah.', () => {
        
        cy.intercept('POST', '**/login').as('loginRequest');

        const expectedAlertText = "Wrong password.";

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        //cek modal muncul 
        cy.get(HomePage.loginLink).should('be.visible').click(); 
        LoginPage.ensureModalIsVisible()

        //kasih jeda sedikit
        cy.wait(500)

      
       

        // When pengguna mengklik Login dan mengisi form
        LoginPage.fillLogin(validUser.username, InvalidUser.password)
        
        // And Pengguna menekan tombol "Log in"
        LoginPage.submit()

        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });

       // Di sini seharusnya ada assertion yang mencari pesan error di DOM, misalnya:
        cy.get('@alertStub')
          .should('be.calledOnce') // Pastikan alert dipanggil 1 kali
          .and('be.calledWith', expectedAlertText);
        
        LoginPage.ensureModalIsVisible();
        
    })
})