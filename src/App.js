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
                                             currentCity: 'Atlanta',
                                             hand: [{name: 'Lagos', color: 'yellow', population: 11547000, type: 'city'},
                                                    {name: 'Washington', color: 'blue', population: 4679000, type: 'city'},
                                                    {name: 'Santiago', color: 'yellow', population: 6015000, type: 'city'},
                                                    {name: 'Milan', color: 'blue', population: 5232000, type: 'city'},
                                                    {name: 'Ho Chi Minh City', color: 'red', population: 8314000, type: 'city'},
                                                    {name: 'Riyadh', color: 'black', population: 5037000, type: 'city'},
                                                    {name: 'Chicago', color: 'blue', population: 9121000, type: 'city'},
                                                    {name: 'Chennai', color: 'black', population: 8865000, type: 'city'},
                                                    {name: 'Airlift', description: "Move any 1 pawn to any city. Get permssion before moving another player's pawn.", type: 'event'}]
                                             }]}/>
        </div>
      </div>
    );
  }
}

export default App;
