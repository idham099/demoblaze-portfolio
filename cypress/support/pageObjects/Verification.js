class Verification{
    // Locators
    get KlikContact() { return 'a[data-target="#exampleModal"]' } // rel css selector
    get KlikClose() { return 'div[id="exampleModal"] div[class="modal-footer"] button:nth-child(1)' }
    // menunggu hingga display: none diubah menjadi display: block/apapun yang membuatnya terlihat.
    ensureModalIsVisible() {
        cy.get(this.modalContainer)
            .should('be.visible');
    }

    KlikContact() {
        cy.get(this.KlikContact).click()
    }
    KlikClose() {
        cy.get(this.KlikClose).click()
    }

  
    getErrorMessage() {
        return cy.get('.modal-content') 
    }
}
export default new Verification()