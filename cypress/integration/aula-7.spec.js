/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => cy.visit('./src/index.html'))

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function () {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
       
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function () {
        cy.get('a[href="privacy.html"]').invoke('removeAttr', 'target').click()
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
       
    })

    it('testa a página da política de privacidade de forma independente', function() {
        cy.visit('./src/privacy.html')
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')

    })
})