import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Listings from './Listings'
import Map from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/listings' component={Listings}/>
            <Route exact path='/' component={Map}/>
          </Switch>
      </div>
    );
  }
}

export default App;
