import React, { Component } from 'react'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import './Alerts.css'
import './App.css'
import Board from './containers/Board'
import CurrentPlayerContainer from './containers/CurrentPlayerContainer'
import MovesList from './containers/MovesList'
import Status from './containers/Status'
import NavHeader from './containers/NavHeader'

class App extends Component {
  render() {
    return ( 
      <div id='app'>
        <div id='header'>
          <NavHeader />
        </div>
        <div id='main'>
          <div id='status'>
            <Status />
          </div>
          <div id='board'>
            <Board />
          </div>
          <div id='moves' >
            <MovesList />
          </div>
        </div>
        <div id='footer'>
          <CurrentPlayerContainer players={[{role: 'Medic',
                                             currentPlayer: true,
                                             currentCity: 'Atlanta',
                                             hand: []
                                             },
                                             {role: 'Contingency Planner',
                                             currentPlayer: false,
                                             currentCity: 'Atlanta',
                                             hand: []
                                             }
                                             ]}/>
        </div>
        <Alert stack={{limit: 5}} effect={'jelly'} timeout={5000} />
      </div>
    )
  }
}

export default App
