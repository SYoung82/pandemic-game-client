import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import About from './containers/About'
import LoginContainer from './containers/LoginContainer'
import './index.css'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

import { playersReducer } from './reducers/PlayersReducer'
import { citiesReducer } from './reducers/CitiesReducer'
import { adjacentCitiesReducer } from './reducers/AdjacentCitiesReducer'
import { infectionDeckReducer } from './reducers/InfectionDeckReducer'
import { playerDeckReducer } from './reducers/PlayerDeckReducer'
import { researchStationCitiesReducer } from './reducers/ResearchStationCitiesReducer'
import { gameStatusReducer } from './reducers/GameStatusReducer'

import { nextPhaseSaga } from './sagas/Sagas'

const sagaMiddleWare = createSagaMiddleware()

const appReducer = combineReducers({
  infectionDeckReducer,
  playersReducer,
  citiesReducer,
  adjacentCitiesReducer,
  playerDeckReducer,
  researchStationCitiesReducer,
  gameStatusReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'NEW_GAME') {
    state = Object.assign({}, undefined, {gameStatusReducer: Object.assign({}, state.gameStatusReducer, {isGameOver: false, phase: 'Move'})})
  }
  return appReducer(state, action)
}

const persistedState = loadState()
const store = createStore(rootReducer, persistedState ,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(nextPhaseSaga)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 3000))
console.log(store.getState())

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={history}>
        <div>
          <PrivateRoute exact path='/' component={App} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    store.getState().gameStatusReducer.isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

store.subscribe(render)
render()
