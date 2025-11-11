import HomePage from '../../support/pageObjects/HomePage'
import Navigation from '../../support/pageObjects/Navigation'

describe('Modul: User Management', () => {
    it('[Positive] TC_P001: Navigasi Kategori berfungsi dengan benar (e.g., Phones).', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        
        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        cy.wait(500)

        //Then List phone muncul
        cy.wait(500)

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest') 
        
                
    }),

    it('[Positive] TC_P002: Navigasi Kategori berfungsi dengan benar (e.g., Laptops).', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        
        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik2).should('be.visible').click(); 
        
        cy.wait(500)

        //Then List phone muncul
        cy.wait(500)

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest') 
        
                
    }),

    it('[Positive] TC_P003: Navigasi Kategori berfungsi dengan benar (e.g., Monitors).', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        
        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik3).should('be.visible').click(); 
        
        cy.wait(500)

        //Then List phone muncul
        cy.wait(500)

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest') 
        
                
    })
})