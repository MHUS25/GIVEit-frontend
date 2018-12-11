describe('Index', function() {
  it('Should Render', function() {
    cy.visit('/')
    cy.contains('app')
  })
})
