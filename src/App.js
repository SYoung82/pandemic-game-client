import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './containers/Board'

class App extends Component {
  render() {
    return (
      <div>
        <div id='header' />
        <div id='board'>
          <Board />
        </div>
        <div id='footer' />
      </div>
    );
  }
}

export default App;
