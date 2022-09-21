///<reference types="Cypress" />

describe('My First Suite', () => {
    it('My first Testcase', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
    })
    
  })