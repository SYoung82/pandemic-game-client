import { playersReducer } from '../reducers/PlayersReducer'
import { citiesReducer } from '../reducers/CitiesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    citiesReducer,
    playersReducer
})

export constant rootReducer