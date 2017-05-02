import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers } from 'redux'
import { playersReducer } from './reducers/PlayersReducer'
import { citiesReducer } from './reducers/CitiesReducer'
import { currentHandReducer } from './reducers/CurrentHandReducer'
import { currentPlayerReducer} from './reducers/CurrentPlayerReducer'
import { adjacentCitiesReducer } from './reducers/AdjacentCitiesReducer'
import { infectionDeckReducer } from './reducers/InfectionDeckReducer'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  infectionDeckReducer,
  playersReducer,
  citiesReducer,
  currentPlayerReducer,
  currentHandReducer,
  adjacentCitiesReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store.getState())
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
