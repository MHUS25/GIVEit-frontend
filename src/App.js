import React, { Componet } from 'react';
import FormListings from './FormListings';
import TableListings from './TableListings';

class App extends React.Component {
  state = {
    listings: []
  };


  render () {
    return (
      <div className="app">
        <FormListings />
        <TableListings
          listings={this.state.listings}
          />
      </div>
    );
  }
}

export default App;
