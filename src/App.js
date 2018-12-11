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
          <input type='text' id='title' placeholder='title'/>
          <input type='body' id='body' placeholder='body'/>
          <input type='location' id='location' placeholder='location'/>
          <input type='start_date' id='start_date' placeholder='start_date'/>
          <input type='end_date' id='end_date' placeholder='end_date'/>
          <input type='submit' id='submit' value='submit'/>
        </form>
        </header>
      </div>
    );
  }
}

export default App;
