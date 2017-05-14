import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import About from './containers/About'
import LoginContainer from './containers/LoginContainer'
import './index.css'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import combinedReducer from './reducers/index'
import { nextPhaseSaga } from './sagas/Sagas'

const sagaMiddleWare = createSagaMiddleware()

const appReducer = combinedReducer

const rootReducer = (state, action) => {
  if (action.type === 'NEW_GAME') {
    state = Object.assign({}, undefined, {gameStatusReducer: Object.assign({}, state.gameStatusReducer, {isGameOver: false, phase: 'Move'})})
  }
  if (action.type === 'GET_SAVE_SUCCESS') {
    state = JSON.parse(action.state)
  }
  return appReducer(state, action)
}

const persistedState = loadState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, persistedState ,composeEnhancers(applyMiddleware(sagaMiddleWare)))
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
