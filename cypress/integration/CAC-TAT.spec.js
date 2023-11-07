/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => cy.visit('./src/index.html'))

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    
    it('Preenche os campos obrigatórios e envia o formulário', function() {
        //o # é responsável por indicar que é o id o que substitui por exemplo como está no email
        //pela classe seria .button o que diria a classe button
        cy.get('#firstName').type('Tomás')
        cy.get('#lastName').type('Jesus')
        cy.get('[id="email"]').type('fake@email.com')
        cy.get('[id="open-text-area"]').type('vamos testar escrever algum texto mais longo e então diminuir o tempo de espera do input!', {delay: 0})
        cy.get('button[type="submit"]').click()
        // classe sucesso é visível
        cy.get('.success').should('be.visible')
    })
    it.only('envia o formuário com sucesso usando um comando customizado' , function () {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    
    
    })
})
