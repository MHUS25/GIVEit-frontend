import React, { Component } from "react";
import FormListings from "./FormListings";
import TableListings from "./TableListings";

class App extends Component {
  state = {
    listings: []
  };

  handleSubmit = listing => {
    this.setState({ listings: [...this.state.listings, listing] });
  };

  removeList = index => {
    const { listings } = this.state;

    this.setState({
      listings: listings.filter((listing, i) => {
        return i !== index;
      })
    });
  };

  render() {
    return (
      <div className="app">
        <TableListings
          listings={this.state.listings}
          removeList={this.removeList}
        />
        <FormListings handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
