///<reference types="cypress"/>
/// <reference types="cypress-downloadfile"/>

describe(" All file upload test", function () {
  it("file upload demo", function () {
    cy.visit("https://trytestingthis.netlify.app/");
    cy.get("#myfile").attachFile("Capture.PNG");
  });
});


describe(" All file download test", function () {

    it.only('file download',function(){
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    })
})