import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './clock/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>welcom to my coool app</h2>
        </div>
        <p className="App-intro">Hi! my name is {this.props.name}</p>
        <Clock />
      </div>
    );
  }
}
export default App;
