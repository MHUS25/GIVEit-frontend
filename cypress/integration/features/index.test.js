describe('Index', function() {
  it('Should Render', function() {
    cy.visit('/')
    cy.contains('app')
    cy.get('#title').type('title')
    cy.get('body').type('body')
    cy.get('#location').type('location')
    cy.get('#start_date').type('start_date')
    cy.get('#end_date').type('end_date')
    cy.contains("submit").click()
  })
})
