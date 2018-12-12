describe("Index", function() {
  it("Should Render", function() {
    cy.visit("/");
    cy.contains("app");
    cy.get("form").within(() => {
      cy.get("#title").type("title");
      cy.get("#description").type("body");
      cy.get("#start_date").type("start_date");
      cy.get("#end_date").type("end_date");
      cy.get("#listing_type").type("listing_type");
      cy.get("#location").type("location");
      cy.contains("submit").click();
    });
  });
  it("should create data object", function() {
    cy.visit("/");
    cy.get("#title")
      .type("Help")
      .should("have.value", "Help");
    cy.get("#description")
      .type("Need help")
      .should("have.value", "Need help");
    cy.get("#start_date")
      .type("June")
      .should("have.value", "June");
    cy.get("#end_date")
      .type("July")
      .should("have.value", "July");
    cy.get("#listing_type")
      .type("Listing FOO")
      .should("have.value", "Listing FOO");
    cy.get("#location")
      .type("Here")
      .should("have.value", "Here");
  });
  it("should list all the listings", function() {
    cy.visit("/");
    cy.get("form").within(() => {
      cy.get("#title").type("Help");
      cy.get("#description").type("Need Help");
      cy.get("#start_date").type("June");
      cy.get("#end_date").type("July");
      cy.get("#listing_type").type("Request");
      cy.get("#location").type("London");
      cy.contains("submit").click();
    });
    cy.contains("Help");
    cy.contains("Need Help");
    cy.contains("June");
    cy.contains("July");
    cy.contains("Request");
    cy.contains("London");
  });

  it('should delete listing' function(){
    cy.visit("/");
    cy.get("form").within(() => {
      cy.get("#title").type("Help");
      cy.get("#description").type("Need Help");
      cy.get("#start_date").type("June");
      cy.get("#end_date").type("July");
      cy.get("#listing_type").type("Request");
      cy.get("#location").type("London");
      cy.contains("submit").click();
    });
    cy.contains("delete").click();
    cy.get()

  })
});
