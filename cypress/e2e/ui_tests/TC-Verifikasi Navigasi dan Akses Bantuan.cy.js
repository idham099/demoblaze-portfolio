import HomePage from '../../support/pageObjects/HomePage'
import Verification from '../../support/pageObjects/Verification'

describe('Modul: Verifikasi Navigasi dan Akses Bantuan', () => {
    it('[Positive] TC_N301: Link "Contact" berfungsi.', () => {
        
        cy.intercept('POST', '**/login').as('VeriRequest');

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        cy.wait(500)

        //When Klik link "Contact" di Navbar.
        Verification.KlikContact()
                
        // Then Pengguna klik button close.
        cy.get(Verification.KlikClose).should('be.visible').click();

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@VeriRequest') 
        
    })
})