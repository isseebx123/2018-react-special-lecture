import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <footer className="App-footer">
          Chungnam National Univ <code>src/App.js</code>
        </footer>
      </div>
    );
  }
}

export default App;
