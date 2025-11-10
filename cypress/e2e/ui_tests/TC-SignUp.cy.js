import HomePage from '../../support/pageObjects/HomePage'
import SignUpPage from '../../support/pageObjects/SignUp'
import users from '../../support/data/users.json'

const SignUp = users.signup;

describe('Modul: User Management', () => {
    it('[Positive] TC_L004: Signup Sukses dengan data baru', () => {
        
        cy.intercept('POST', '**/signup').as('SignUpRequest');

        const expectedAlertText = "Sign up successful.";

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        //cek modal muncul 
        cy.get(HomePage.signUp).should('be.visible').click(); 
        SignUpPage.ensureModalIsVisible()

        cy.wait(500)

        // When pengguna mengklik SignUp dan mengisi form
        SignUpPage.fillSignUp(SignUp.signusername, SignUp.signpassword)
        
        // And Pengguna menekan tombol "Sign Up"
        SignUpPage.submit()

        //Then pengguna baru berhasil terdaftar
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('be.calledOnce') 
            .and('be.calledWith', expectedAlertText);
                    
        SignUpPage.ensureModalIsVisible();

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@SignUpRequest') 
                
    }),


    it('[Negative] TC_L005: Signup Gagal (Username sudah terpakai).', () => {
        
        cy.intercept('POST', '**/signup').as('SignUpRequest');

        const expectedAlertText = "This user already exist.";

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        //cek modal muncul 
        cy.get(HomePage.signUp).should('be.visible').click(); 
        SignUpPage.ensureModalIsVisible()

        cy.wait(500)

        // When pengguna mengklik SignUp dan mengisi form
        SignUpPage.fillSignUp(SignUp.signusername, SignUp.signpassword)
        
        // And Pengguna menekan tombol "Sign Up"
        SignUpPage.submit()

        //Then pengguna baru berhasil terdaftar
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('be.calledOnce') 
            .and('be.calledWith', expectedAlertText);
                    
        SignUpPage.ensureModalIsVisible();

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@SignUpRequest') 
        
    })
})