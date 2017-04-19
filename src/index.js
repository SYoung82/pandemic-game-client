import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers } from 'redux'
import { playersReducer } from './reducers/PlayersReducer'
import { citiesReducer } from './reducers/CitiesReducer'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  citiesReducer,
  playersReducer
})

const store = createStore(rootReducer)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
