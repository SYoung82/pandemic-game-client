import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers } from 'redux'
import { playersReducer } from './reducers/PlayersReducer'
import { citiesReducer } from './reducers/CitiesReducer'
import { adjacentCitiesReducer } from './reducers/AdjacentCitiesReducer'
import { infectionDeckReducer } from './reducers/InfectionDeckReducer'
import { playerDeckReducer } from './reducers/PlayerDeckReducer'
import { researchStationCitiesReducer } from './reducers/ResearchStationCitiesReducer.js'
import { Provider } from 'react-redux'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './containers/About'



const rootReducer = combineReducers({
  infectionDeckReducer,
  playersReducer,
  citiesReducer,
  adjacentCitiesReducer,
  playerDeckReducer,
  researchStationCitiesReducer
})

const persistedState = loadState();
const store = createStore(rootReducer, persistedState ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(throttle(() => {
  saveState(store.getState());
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

store.subscribe(render);
render();
