///<reference types="cypress"/>
it('google test',function(){
    cy.visit('http://google.com')
    cy.get('.gLFyf',{timeout:6000}).type('Ascendion-collabera{enter}')
    //cy.get('#rso > :nth-child(2) > .MjjYud > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .TbwUpd > .iUh30').click()
    cy.wait(5000)
    cy.contains('Videos').click()



})