describe('Quete2-connection', () => {
    it('Non passsant', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('#signin-email').click({force: true}).type('nicolasgenot@gmail.com')
        cy.get('#signin-password').click({force: true}).type('')
        cy.contains('Welcome Back').click({force: true})
    })
    
})  