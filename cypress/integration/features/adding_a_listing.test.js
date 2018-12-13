describe('Creating a listing', function () {
  it ('has a form which can be filled', function() {
    cy.visit('/')
    cy.get('#title').type('Test title')
    cy.get('#description').type('Test description')
    cy.get('#start_date').type('Test startdate')
    cy.get('#end_date').type('Test enddate')
    cy.get('#listing_type').type('Test listingtype')
    cy.get('#location').type('Test location')
    cy.get('#submit').click()
  });
});
