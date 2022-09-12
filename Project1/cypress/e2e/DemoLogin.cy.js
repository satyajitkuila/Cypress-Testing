
it('T1:user on login page',function(){
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()

    
    
})

it('T2:User enters username and password',function(){
    cy.get('#email').type('samuelwitwicky56@gmail.com')
    cy.get('#passwd').type('kanhu143')
    cy.get('#SubmitLogin > span').click()
    
})

it('T3:User Login is successful',function(){
    cy.title().should('eq','My account - My Store')
    
})
