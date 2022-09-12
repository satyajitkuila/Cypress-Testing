///<reference types="cypress"/>
it('T1:user is on Home page',function(){
    cy.visit('https://www.zoopla.co.uk/')
    
})

it('T2:user clicks on registration link',function(){
    cy.get(':nth-child(3) > .c-kPcuI > .c-PJLV').click()
    cy.get('[data-testid="sign-in-page-header-register-link"]').click()
    
})

it('T3:user enters details on registration form',function(){
    cy.get('#email').type('samuelwitwicky56@gmail.com')
    cy.get('#password').type('kanhu143')
    
})

it('T4:user clicks on registration Button',function(){
    cy.get('#no').click()
    cy.get('[data-testid="register-button"]').click()
    
})