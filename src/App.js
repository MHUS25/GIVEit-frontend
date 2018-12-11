import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form id='request'>
          Title:
          <input type='text' id='title' value='title'/>
          <input type='body' id='body' value='body'/>
          <input type='location' id='location' value='location'/>
          <input type='start_date' id='start_date' value='start_date'/>
          <input type='end_date' id='end_date' value='end_date'/>
        </form>
        </header>
      </div>
    );
  }
}

export default App;
