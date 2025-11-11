class Navigation {
    // Locators
    get Klik() { return 'body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)' } 
    get Klik2() { return 'body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)' }
    get Klik3() { return 'body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)' }
    get KlikProduk() { return 'body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)' }
    get KlikCart() { return '.btn.btn-success.btn-lg' }
    get KlikLinkCart() { return '#cartur' }
    get DeleteCart() { return 'body > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > a:nth-child(1)' }
    get KlikPlaceOrder() { return '.btn.btn-success' }
}
export default new Navigation()