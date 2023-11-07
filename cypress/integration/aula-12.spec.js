/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => cy.visit('./src/index.html'))

    it('Encontra o gato', () => {
        cy.get('#cat').invoke('show').should('be.visible')
        
      })

      
})