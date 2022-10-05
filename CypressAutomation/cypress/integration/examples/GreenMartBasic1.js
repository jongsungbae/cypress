///<reference types="Cypress" />

describe('My First Suite', () => {
    it('My first Testcase', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // this is to print in logs
        cy.get('.brand').then((logoelement) => {
            cy.log(logoelement.text())
        })

        // type 'ca' on the searchbox
        cy.get('.search-keyword').as('searchBox')
        cy.get('@searchBox').should('be.enabled')
        cy.get('@searchBox').type('ca')
        cy.wait(1000)

        // check the number of the item
        cy.get('.product:visible').should('have.length', 4)
        // using parent child
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)

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