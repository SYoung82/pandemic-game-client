import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import About from './containers/About'
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

const rootReducer = combineReducers({
  infectionDeckReducer,
  playersReducer,
  citiesReducer,
  adjacentCitiesReducer,
  playerDeckReducer,
  researchStationCitiesReducer,
  gameStatusReducer
})

const persistedState = loadState()
const store = createStore(rootReducer, persistedState ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 3000))
console.log(store.getState())

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={history}>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

store.subscribe(render)
render()
