describe('Quete2-connection', () => {
    
    it('Passant', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('#signin-email').click({force: true}).type('nicolasgenot@gmail.com')
        cy.get('#signin-password').click({force: true}).type('Ffbf4kLVuGLYK54')
        cy.contains('Welcome Back').click({force: true})
    })
})

