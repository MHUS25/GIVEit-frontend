import React, { Component } from 'react';
import FormListings from './FormListings'
import TableListings from './TableListings'
import Map from './Map'
import Navbar from './components/Navbar'


const loadScript = (url) => {
  const index = window.document.getElementsByTagName('script')[0];
  const script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
};

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
    let updatedListings = [...listings];

    let fetches = updatedListings.map((listing) => {
      return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${listing.location}&key=${process.env.REACT_APP_MAPS_API_KEY}`,{
        method: 'GET'
      }).then(response => response.json())
    });

    Promise.all(fetches)
      .then(responseJson => updatedListings.map((listing, index) => {
          if (responseJson[index].status === 'INVALID_REQUEST') {
            return null;
          }
          return listing.latLng = responseJson[index].results[0].geometry.location;
        }))
      .then(() => this.setState({
          listings: updatedListings,
        }, this.renderMap()));
  }


  renderMap = () => {
    loadScript(`https://hnryjmes-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&callback=initMap`);
    window.initMap = this.initMap;
  }

  initMap = () => {
    const MAKERS_ACADEMY_POSITION = {
      lat: 51.517352,
      lng: -0.073267,
    };

    const myMap = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: MAKERS_ACADEMY_POSITION.lat, lng: MAKERS_ACADEMY_POSITION.lng },
      zoom: 11,
    });

    const infowindow = new window.google.maps.InfoWindow();

    const { listings } = this.state;

    listings.forEach((myListing) => {
      if (myListing.latLng === undefined) return null;

      const contentString = `${myListing.title}`;

      const marker = new window.google.maps.Marker({
        position: {
          lat: myListing.latLng.lat,
          lng: myListing.latLng.lng,
        },
        map: myMap,
      });

      marker.addListener('click', () => {
        infowindow.setContent(contentString);
        infowindow.open(myMap, marker);
      });
    });
  }

  render() {

    return (

      <div className="app">
      <Navbar/>
        <TableListings
          listings={this.state.listings}
          removeList={this.removeList}
        />
        <FormListings handleSubmit={this.handleSubmit} />
        <Map />
      </div>
    );
  }
}

export default App;
