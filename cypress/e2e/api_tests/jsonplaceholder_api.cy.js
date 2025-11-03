// Test Suite D: API - External Service (JSONPlaceholder)
describe('Test Suite D: API Automation Murni', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com'
    
    // --- TC D.4.1: POST API Create Data Sukses (P1, API) ---
    it('D.4.1 [Positive] Verifikasi POST /posts: Membuat Data Baru', () => {
        const newPost = {
            title: 'Portofolio SDET Ainul Idham',
            body: 'Implementasi API Automation menggunakan Cypress',
            userId: 101
        }
        
        cy.request('POST', `${baseUrl}/posts`, newPost)
            .then((response) => {
                // Assertions Kritis
                expect(response.status).to.eq(201) 
                expect(response.body).to.have.property('title', newPost.title)
                expect(response.duration).to.be.lessThan(500) 
            })
    })
})