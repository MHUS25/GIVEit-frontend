import React, { Componet } from 'react';
import FormListings from './FormListings';

class App extends React.Component {
  state = {
    listings: []
  };


  render () {
    return (
      <div className="app">
        <FormListings />
      </div>
    );
  }
}

export default App;
