///<reference types="Cypress" />

describe('My Basic Test Suite', () => {
    before(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      });

    it.skip('CheckBox example', () => {

        cy.get('#checkBoxOption1').as('checkBoxOption1')
        cy.get('@checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('@checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })

    it('Radio button example', ()=>{

        cy.get('input[value="radio2"]').check().should('be.checked').and('have.value', 'radio2')
    })

    it.skip('Dropdown example', () => {

        // static Dropdown
        cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1')

        // Dynamic Dropdown
        cy.get('#autocomplete').type('can')

        cy.get('.ui-menu-item div').each(($el, index, $list)=> {
            if($el.text() == "Canada"){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', "Canada")
    })

    it('Visible and invisivle example',()=>{

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })
    
  })
