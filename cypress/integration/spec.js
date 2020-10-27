/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('localhost:8080');
    cy.wait(4000);
    cy.get('#logger').should('have.text', 'captcha success')
  })
})
