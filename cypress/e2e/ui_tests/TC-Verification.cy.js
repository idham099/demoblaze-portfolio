import HomePage from '../../support/pageObjects/HomePage'
import Navigation from '../../support/pageObjects/Navigation'

describe('Modul: User Management', () => {
    it('[Positive] TC_P004: Lihat Detail Produk dari Homepage.', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        
        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        cy.wait(500);

        //And List phone muncul
       

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click();
        
        //Then Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest')         
    }),

    it('[Positive] TC_P005: Tambah Produk ke Keranjang (Cart).', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');

        const expectedAlertText = "Product added";
        
        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        cy.wait(500);

        //And List phone muncul
        

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.

        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //Then Muncul alert (popup) browser "Product added".
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('be.calledOnce') 
            .and('be.calledWith', expectedAlertText);

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest')         
    }),

    it('[Positive] TC_P006: Verifikasi Item di Keranjang.', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        const expectedAlertText = "Product added";

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        cy.wait(500);

        //And List phone muncul
        

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.

        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //And Muncul alert (popup) browser "Product added".
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('be.calledOnce') 
            .and('be.calledWith', expectedAlertText);
        
        //Then Item telah ditambahkan ke Cart (TC_P005 berhasil).
        cy.get(Navigation.KlikLinkCart).should('be.visible').click();    

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest')         
    }),

    it('[Positive] TC_P007: Hapus Item dari Keranjang.', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        const expectedAlertText = "Product added";

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        cy.wait(500);

        //And List phone muncul
        

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.

        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //And Muncul alert (popup) browser "Product added".
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('be.calledOnce') 
            .and('be.calledWith', expectedAlertText);
        
        //And Item telah ditambahkan ke Cart (TC_P005 berhasil).
        cy.get(Navigation.KlikLinkCart).should('be.visible').click();
        
        //And Pada Halaman Cart, klik "Delete" di samping item.
        cy.get(Navigation.DeleteCart).should('be.visible').click();

        //Then Item hilang dari tabel, dan total harga diperbarui (atau tabel kosong).

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest')         
    }),

    it('[Positive] TC_CH001: Inisiasi Pembelian dari Cart.', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        const expectedAlertText = "Product added";

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        cy.wait(500);

        //And List phone muncul
        

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.

        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //And Muncul alert (popup) browser "Product added".
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('be.calledOnce') 
            .and('be.calledWith', expectedAlertText);
        
        //And Item telah ditambahkan ke Cart (TC_P005 berhasil).
        cy.get(Navigation.KlikLinkCart).should('be.visible').click();
        
        //And Pengguna klik tombol "Place Order".
        cy.get(Navigation.KlikPlaceOrder).should('be.visible').click();

        //Then Muncul modal pop-up "Place order" (form pengisian data).

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest')         
    })
})