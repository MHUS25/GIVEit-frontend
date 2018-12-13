import React, { Component } from "react";
import FormListings from "./FormListings";
import TableListings from "./TableListings";
import jQuery from "jquery";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    console.log('TESTING')
    jQuery.ajax({
      type: "GET",
      url: 'http://localhost:3001/listings'
    }).done(data => {
      console.log(data);
      this.setState({listings: data});
    });
  }



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
