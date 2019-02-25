import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Current Mode:
        </header>
        <div className="main">
          Light Mode <label className="switch">
            <input type="checkbox"  />
            <span className="slider round"></span>
          </label> Dark Mode
        </div>
      </div>
    );
  }
}

export default App;
