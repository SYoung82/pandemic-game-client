import { playersReducer } from '../reducers/PlayersReducer'
import { citiesReducer } from '../reducers/CitiesReducer'

function rootReducer(state = {}, action) {
    return {
        players: playersReducer(state.players, action),
        cities: citiesReducer(state.cities, action)
    }
}