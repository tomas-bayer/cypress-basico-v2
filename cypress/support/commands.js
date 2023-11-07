Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Tomás')
    cy.get('#lastName').type('Jesus')
    cy.get('[id="email"]').type('fake@email.com')
    cy.get('[id="open-text-area"]').type('teste', {delay: 0})
    cy.contains('button', 'Enviar').click()
   
})