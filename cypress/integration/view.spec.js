describe('Landing Page', () => {
    it('Checks site title', () => {
        cy.visit('http://localhost:8000')
        cy.title().should('eq', 'James & Elize')
    })
})
