describe('Quete2-inscription', () => {
    
    it('Inscription-passant', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('#firstName').click({force: true}).type('Nicolas')
        cy.get('#lastName').click({force: true}).type('GENOT')
        cy.get('#signup-email').click({force: true}).type('nicolasgenot@gmail.com')
        cy.get('#signup-password').click({force: true}).type('Ffbf4kLVuGLYK54')
        cy.contains('Enchantés').click({force: true})
    })
    it('Inscription-non-passant', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('#firstName').click({force: true}).type('Nicolas')
        cy.get('#lastName').click({force: true}).type('GENOT')
        cy.get('#signup-email').click({force: true}).type('nicolasgenot@gmail.com')
        cy.get('#signup-password').click({force: true}).type('')
        cy.contains('Enchantés').click({force: true})
    })
    
})

describe('Quete2-connection', () => {
    
    it('Passant', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('#signin-email').click({force: true}).type('nicolasgenot@gmail.com')
        cy.get('#signin-password').click({force: true}).type('Ffbf4kLVuGLYK54')
        cy.contains('Welcome Back').click({force: true})
    })
    it('Non passsant', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('#signin-email').click({force: true}).type('nicolasgenot@gmail.com')
        cy.get('#signin-password').click({force: true}).type('')
        cy.contains('Welcome Back').click({force: true})
    })
    
})
