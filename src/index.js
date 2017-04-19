import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers } from 'redux'
import { playersReducer } from './reducers/PlayersReducer'
import { citiesReducer } from './reducers/CitiesReducer'

const rootReducer = combineReducers({
  citiesReducer,
  playersReducer
})

const store = createStore(rootReducer)
console.log(store.getState())

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
