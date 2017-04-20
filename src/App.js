import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './containers/Board'
import CurrentPlayerContainer from './containers/CurrentPlayerContainer'

class App extends Component {
  render() {
    return (
      <div>
        <div id='header' />
        <div id='board'>
          <Board />
        </div>
        <div id='footer'>
          <CurrentPlayerContainer players={[{role: 'Medic',
                                             currentPlayer: true,
                                             currentCity: 'Atlanta'
                                             }]}/>
        </div>
      </div>
    );
  }
}

export default App;
