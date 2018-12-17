import React, { Component } from 'react';
import FormListings from './FormListings'
import TableListings from './TableListings'
import Map from './Map'

class App extends Component {
  state = {
    listings: []
  };

  componentDidMount() {
    const url = 'https://giveit-backend.herokuapp.com/listings';

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          listings: result
        })
      }).then(()=>{
        this.getLatLng()
      })
  }

  handleSubmit = listing => {
    this.setState({ listings: [...this.state.listings, listing] });
    fetch('https://giveit-backend.herokuapp.com/listings', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        listing
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson.listing;
      })
  };

  removeList = (rowId, index) => {
    const { listings } = this.state;

    this.setState({
      listings: listings.filter((listing, i) => {
        return i !== index;
      })
    });
    return fetch(`https://cors-anywhere.herokuapp.com/https://giveit-backend.herokuapp.com/listings/${rowId}`, {
      method: 'DELETE',
      headers: {
        'Origin': 'x-requested-with'
      },
    });
  };

  getLatLng = () => {
    const { listings } = this.state;
    console.log(listings)
    let postcode = listings[0].location
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${process.env.REACT_APP_MAPS_API_KEY}`,{
      method: 'GET'


    }).then(response => response.json()).then(responseJson => console.log(responseJson.results[0].geometry.location));
  }

  render() {

    return (
      <div className="app">
        <TableListings
          listings={this.state.listings}
          removeList={this.removeList}
        />
        <FormListings handleSubmit={this.handleSubmit} />
        <Map/>
      </div>
    );
  }
}

export default App;
