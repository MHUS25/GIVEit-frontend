/* eslint-disable no-undef */
describe('Creating a listing', () => {
  it('has a form which can be filled', () => {
    cy.visit('/');
    cy.get('.menu-1 .bm-burger-button').click();
    cy.get('#title').type('I need some comic books');
    cy.get('#description').type('Basically just really bored');
    cy.get('#start_date').type('25/12/2018');
    cy.get('#end_date').type('25/12/2018');
    cy.get('#listing_type').select('Need');
    cy.get('#location').type('E1 6LT');
    cy.get('#phone_number').type('020 7499 9000');
    cy.get('#email').type('barack@obama.org');
    cy.get('#user_name').type('Barack');
    cy.get('#submit').click();
  });

  it('can make a second listing', () => {
    cy.visit('/');
    cy.get('.menu-1 .bm-burger-button').click();
    cy.get('#title').type('It\'s never too late to learn to play the piano');
    cy.get('#description').type('Piano lessons');
    cy.get('#start_date').type('01/01/2018');
    cy.get('#end_date').type('31/01/2018');
    cy.get('#listing_type').select('Support');
    cy.get('#location').type('SW1A 1AA');
    cy.get('#phone_number').type('0303 123 7300');
    cy.get('#email').type('One does not have email');
    cy.get('#user_name').type('Elizabeth II');
    cy.get('#submit').click();
  });

  it('can delete a listing', () => {
    cy.visit('/');
    cy.get('.menu-2 .bm-burger-button').click();
    cy.get('.delete').last().click();
  });
});
