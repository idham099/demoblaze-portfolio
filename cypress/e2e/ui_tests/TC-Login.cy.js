import HomePage from '../../support/pageObjects/HomePage'
import LoginPage from '../../support/pageObjects/LoginPage'
import users from '../../support/data/users.json'

const validUser = users.valid;
const InvalidUser = users.invalid;

describe('Modul: User Management', () => {
    it('[Positive] TC_L001: Login Sukses dengan kredensial yang valid.', () => {
        
        cy.intercept('POST', '**/login').as('loginRequest');

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        //cek modal 
        cy.get(HomePage.loginLink).should('be.visible').click(); 
        LoginPage.ensureModalIsVisible()

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
    }),


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
    
            
            cy.wait(500)
                   
            // When pengguna mengklik Login dan mengisi form
            LoginPage.fillLogin(validUser.username, InvalidUser.password)
            
            // And Pengguna menekan tombol "Log in"
            LoginPage.submit()
    
            cy.window().then((win) => {
                cy.stub(win, 'alert').as('alertStub');
            });
    
           
            cy.get('@alertStub')
              .should('be.calledOnce') 
              .and('be.calledWith', expectedAlertText);
            
            LoginPage.ensureModalIsVisible();
            
    })
})