///<reference types="cypress"/>

describe("All Read Test", function () {


    before(function(){
        cy.fixture('example.json').as('test_data')
    })

    it("Read File using fixture", function () {

        cy.fixture("example.json").then((data) => {
        cy.log(data.name);
        cy.log(data.email);
        })

        cy.log(this.test_data.name)
    })

    it("Read File using readFile function", function () {

        cy.readFile('../Project1/cypress/fixtures/example.json').then((data) => {
        cy.log(data.name);
        cy.log(data.email);
        })
      
    })
})

describe("All Write Test", function () {

    it("Write File Demo", function () {

       cy.writeFile('../Project1/cypress/downloads/sample.txt','Hello World\n')
       cy.writeFile('../Project1/cypress/downloads/sample.txt','learning cypress',{flag:'a+'})
      
    })
})