import React, { Componet } from 'react';
import FormListings from './FormListings';
import TableListings from './TableListings';

class App extends React.Component {
  state = {
    listings: []
  };

  handleSubmit = listing => {
    this.setState({listings: [...this.state.listings, listing]});
  }


  render () {
    return (
      <div className="app">
        <TableListings
          listings={this.state.listings}
          />
        <FormListings handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
