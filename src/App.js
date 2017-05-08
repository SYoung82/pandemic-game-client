import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board'
import CurrentPlayerContainer from './containers/CurrentPlayerContainer'
import MovesList from './containers/MovesList'
import Status from './containers/Status'

class App extends Component {
  render() {
    return ( 
      <div id='app'>
        <div id='header'>
          <Status />
        </div>
        <div id='board'>
          <Board />
          <div id='moves' >
            <MovesList />
          </div>
        </div>
        <div id='footer'>
          <CurrentPlayerContainer />
        </div>
      </div>
    );
  }
}

export default App;
