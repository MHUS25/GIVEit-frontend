describe('Creating a listing', function () {
  it ('has a form which can be filled', function() {
    cy.visit('/')
    cy.get('#title').type('I need some comic books')
    cy.get('#description').type('Basically just really bored')
    cy.get('#start_date').type('25/12/2018')
    cy.get('#end_date').type('25/12/2018')
    cy.get('#listing_type').type('Need')
    cy.get('#location').type('E1 6LT')
    cy.get('#phone_number').type('020 7499 9000')
    cy.get('#email').type('barack@obama.org')
    cy.get('#user_name').type('Barack')
    cy.get('#submit').click()
  });
});
