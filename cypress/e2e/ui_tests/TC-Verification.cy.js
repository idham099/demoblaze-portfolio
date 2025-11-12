import HomePage from '../../support/pageObjects/HomePage'
import Navigation from '../../support/pageObjects/Navigation'
import users from '../../support/data/users.json'

const CheckOut = users.checkout;

describe('Modul: User Management', () => {
    it('[Positive] TC_P004: Lihat Detail Produk dari Homepage.', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        
        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        cy.wait(2000);

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
        
        cy.wait(2000);

        //And List phone muncul
        

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.
         cy.wait(2000);
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
        
        cy.wait(2000);

        //And List phone muncul
        

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.
         cy.wait(2000);
        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //And Muncul alert (popup) browser "Product added".
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('be.calledOnce') 
            .and('be.calledWith', expectedAlertText);
         cy.wait(2000);
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
        
        cy.wait(2000);

        //And List phone muncul
        

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.
         cy.wait(2000);
        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //And Muncul alert (popup) browser "Product added".
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('be.calledOnce') 
            .and('be.calledWith', expectedAlertText);
         cy.wait(2000);
        //And Item telah ditambahkan ke Cart (TC_P005 berhasil).
        cy.get(Navigation.KlikLinkCart).should('be.visible').click();
         cy.wait(2000);
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
        
        cy.wait(2000);

        //And List phone muncul
        

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.
         cy.wait(2000);
        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //And Muncul alert (popup) browser "Product added".
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('be.calledOnce') 
            .and('be.calledWith', expectedAlertText);
         cy.wait(2000);
        //And Item telah ditambahkan ke Cart (TC_P005 berhasil).
        cy.get(Navigation.KlikLinkCart).should('be.visible').click();
         cy.wait(2000);
        //And Pengguna klik tombol "Place Order".
        cy.get(Navigation.KlikPlaceOrder).should('be.visible').click();
         cy.wait(2000);
        //Then Muncul modal pop-up "Place order" (form pengisian data).

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest')         
    }),

    it('[Positive] TC_CH002: Isi Data Pembelian dan Lanjut (Purchase).', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        const expectedAlertText = "Product added";

        cy.window().then((win) => {
             cy.stub(win, 'alert').as('alertStub');
        });

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        cy.wait(2000);

        //And List phone muncul
        

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.
         cy.wait(2000);
        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //And Muncul alert (popup) browser "Product added".
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('have.been.calledOnce') 
            .and('be.calledWith', expectedAlertText);
         cy.wait(2000);
        //And Item telah ditambahkan ke Cart (TC_P005 berhasil).
        cy.get(Navigation.KlikLinkCart).should('be.visible').click();
        
        //And Pengguna klik tombol "Place Order".
        cy.get(Navigation.KlikPlaceOrder).should('be.visible').click();
         cy.wait(2000);
        //And Muncul modal pop-up "Place order" (form pengisian data).
        Navigation.fillOrder(CheckOut.name, CheckOut.country, CheckOut.city, CheckOut.creditCard, CheckOut.month, CheckOut.year)
        
        //And pengguna Klik tombol "Purchase"
        Navigation.submit()

        //Then Modal "Thank you for your purchase!" muncul.
         cy.wait(2000);
        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest')         
    }),

    it('[Positive] TC_CH003: Verifikasi Detail Pembelian di Konfirmasi.', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        const expectedAlertText = "Product added";
         cy.window().then((win) => {
             cy.stub(win, 'alert').as('alertStub');
        });

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        cy.wait(2000);

        //And List phone muncul
        

        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.
         cy.wait(2000);
        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //And Muncul alert (popup) browser "Product added".
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('have.been.calledOnce') 
            .and('be.calledWith', expectedAlertText);
         cy.wait(2000);
        //And Item telah ditambahkan ke Cart (TC_P005 berhasil).
        cy.get(Navigation.KlikLinkCart).should('be.visible').click();
         cy.wait(2000);
        //And Pengguna klik tombol "Place Order".
        cy.get(Navigation.KlikPlaceOrder).should('be.visible').click();
         cy.wait(2000);
        //And Muncul modal pop-up "Place order" (form pengisian data).
        Navigation.fillOrder(CheckOut.name, CheckOut.country, CheckOut.city, CheckOut.creditCard, CheckOut.month, CheckOut.year)
        
        //And pengguna Klik tombol "Purchase"
        Navigation.submit()

        //And Modal "Thank you for your purchase!" muncul.

        // then Detail yang ditampilkan (e.g., Total Amount) sesuai dengan harga produk dan data yang dimasukkan.

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest')         
    }),

    it('[Positive] TC_CH004: Selesaikan Pembelian.', () => {
        
        cy.intercept('GET', '**/entries').as('NavRequest');
        const expectedAlertText = "Product added";
         cy.window().then((win) => {
             cy.stub(win, 'alert').as('alertStub');
        });

        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        cy.wait(2000);

        //And List phone muncul
        
        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.
         cy.wait(2000);
        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //And Muncul alert (popup) browser "Product added".
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
        });         
        cy.get('@alertStub')
            .should('have.been.calledOnce') 
            .and('be.calledWith', expectedAlertText);
         cy.wait(2000);
        //And Item telah ditambahkan ke Cart (TC_P005 berhasil).
        cy.get(Navigation.KlikLinkCart).should('be.visible').click();
         cy.wait(2000);
        //And Pengguna klik tombol "Place Order".
        cy.get(Navigation.KlikPlaceOrder).should('be.visible').click();
         cy.wait(2000);
        //And Muncul modal pop-up "Place order" (form pengisian data).
        Navigation.fillOrder(CheckOut.name, CheckOut.country, CheckOut.city, CheckOut.creditCard, CheckOut.month, CheckOut.year)
        
        //And pengguna Klik tombol "Purchase"
        Navigation.submit()

        //And Modal "Thank you for your purchase!" muncul.

        //And Detail yang ditampilkan (e.g., Total Amount) sesuai dengan harga produk dan data yang dimasukkan.

        //Then Modal ditutup, dan pengguna kembali ke Homepage.
        cy.get(Navigation.KlikPurchase).should('be.visible').click();

        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest')         
    }),

    it('[Negative] TC_CH005: Checkout Gagal (Field Wajib Kosong).', () => {
        
        const stub = cy.stub().as('alertStub'); 
        cy.on('window:alert', stub);

        cy.intercept('GET', '**/entries').as('NavRequest');

        //const expectedAlertText1 = "Product added";
        //const expectedAlertText2 = "Please fill out Name and Creditcard.";
        
        // Given pengguna berada di Halaman Utama
        HomePage.visit()
      
        // When pengguna mengklik Klik Navigation phone 
        cy.get(Navigation.Klik).should('be.visible').click(); 
        
        //And List phone muncul
        
        //And Pengguna melakukan klik pada produk
        cy.get(Navigation.KlikProduk).should('be.visible').click(); 

        //And Halaman Detail Produk dimuat, menampilkan gambar, deskripsi, dan harga yang benar.
        //And Pengguna Klik tombol "Add to cart"
        cy.get(Navigation.KlikCart).should('be.visible').click(); 

        //And Muncul alert (popup) browser "Product added".       
        cy.get('@alertStub')
            .should('have.been.calledOnce') 
            .and('be.calledWith', "Product added");

        stub.resetHistory();

        //And Item telah ditambahkan ke Cart (TC_P005 berhasil).
        cy.get(Navigation.KlikLinkCart).should('be.visible').click();
        //And Pengguna klik tombol "Place Order".
        cy.get(Navigation.KlikPlaceOrder).should('be.visible').click();
        //And Muncul modal pop-up "Place order" (form pengisian data).
        //Navigation.fillOrder(CheckOut.name, CheckOut.country, CheckOut.city, CheckOut.creditCard, CheckOut.month, CheckOut.year)
        
        //And pengguna Klik tombol "Purchase"
        Navigation.submit()

        //And Modal "Thank you for your purchase!" muncul.
        
        //And Detail yang ditampilkan (e.g., Total Amount) sesuai dengan harga produk dan data yang dimasukkan.
        //Then Modal ditutup, dan pengguna kembali ke Homepage.
        //cy.get(Navigation.KlikPurchase).should('be.visible').click();
        
        cy.get('@alertStub')
            .should('have.been.calledOnce') 
            .and('be.calledWith', "Please fill out Name and Creditcard.");
        
        cy.get('#orderModal').should('be.visible');
         
        // Wait untuk memastikan request asli telah selesai diproses oleh backend
        cy.wait('@NavRequest')         
    })
})