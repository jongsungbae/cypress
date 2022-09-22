///<reference types="Cypress" />

describe('My Second Suite', () => {
    it('My First Testcase', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        // check the number of the item
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').as('productLocator')
        // click 'ADD TO CART' button
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        }) 

        // click the go to cart icon
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        
        // click the place order button
        cy.contains('Place Order').click()

       
    })
    
  })