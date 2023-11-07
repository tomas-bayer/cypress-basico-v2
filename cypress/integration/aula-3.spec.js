/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => cy.visit('./src/index.html'))

    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product').select('YouTube')
         .should('have.value', 'youtube')

    })

    it('seleciona um produto (Mentoria) por seu valor', function () {
        cy.get('#product').select('mentoria')
         .should('have.value', 'mentoria')
    })

    it('seleciona um produto por seu indice ', function () {
        cy.get('#product').select(1)
         .should('have.value', 'blog')
    })

})