const deferred = require("./deferred");

describe("Visiting the Listings Page", function() {
  beforeEach(function() {
    this.fetchListingsDeferred = deferred();

    cy.visit("/", {
      onBeforeLoad(win) {
        cy.stub(win, "fetch")
          .withArgs("https://giveit-backend.herokuapp.com/listings")
          .as("fetchListings")
          .returns(this.fetchListingsDeferred.promise);
      }
    });
  });

  it("request all listings", function() {
    cy.get("@fetchListings").should(
      "be.calledWith",
      "https://giveit-backend.herokuapp.com/listings"
    );
  });
});
