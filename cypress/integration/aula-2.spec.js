/// <reference types="Cypress" />

describe("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    it("Preenche o formulário com email na formatação errada", function () {
      cy.visit("./src/index.html");
      cy.get('[id="firstName"]').type("Tomás");
      cy.get('[id="lastName"]').type("Jesus");
      cy.get('[id="email"]').type("fake.mail.com");
      cy.get('[id="open-text-area"]').type(
        "vamos testar escrever algum texto mais longo e então diminuir o tempo de espera do input!",
        { delay: 0 }
      );
      cy.get('[type="submit"]').click();
      cy.get('.error').should('be.visible');
    });

    it('Preenche o formulário sem valor no campo telefone quando tal campo deve ser obrigatório', function() {
      cy.visit('./src/index.html')
      cy.get('[id="firstName"]').type('Tomás')
      cy.get('[id="lastName"]').type('Jesus')
      cy.get('[id="email"]').type('fake@mail.com')
      cy.get('[id="phone-checkbox"]').check()
      cy.get('[id="open-text-area"]').type('vamos testar escrever algum texto mais longo e então diminuir o tempo de espera do input!', {delay: 0})
      cy.get('[type="submit"]').click()
      cy.get('.error').should('be.visible')

  })

  it('Preenche o formulário com letras no telefone', function() {
    cy.visit('./src/index.html')
    cy.get('[id="phone"]').type('abcdefghi')
        .should('have.value', '')

  })

  it('reenche e limpa os campos nome, sobrenome, email e telefone', function() {
    cy.visit('./src/index.html')
    cy.get('[id="firstName"]').type('Tomás').should('have.value', "Tomás")
    .clear().should('have.value', "")
    cy.get('[id="lastName"]').type('Jesus').should('have.value', "Jesus")
        .clear().should('have.value', "")
    cy.get('[id="email"]').type('fake@mail.com').should('have.value', "fake@mail.com")
        .clear().should('have.value', "")
    
  })

  
  it('envia o formulário vazio', function() {
    cy.visit('./src/index.html')
    cy.get('[type="submit"]').click()
    cy.get('.error').should('be.visible')

  })

});
