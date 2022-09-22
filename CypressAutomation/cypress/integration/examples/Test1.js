///<reference types="Cypress" />

describe('My First Suite', () => {
    it('My first Testcase', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        // check the number of the item
        cy.get('.product:visible').should('have.length', 4)
        // parent child
        cy.get('.products').find('.product').should('have.length', 4)

        // click 'ADD TO CART' button
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
       
    })
    
  })