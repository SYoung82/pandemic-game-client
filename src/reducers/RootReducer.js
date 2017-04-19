import { playersReducer } from '../reducers/PlayersReducer'

function rootReducer(state = {}, action) {
    return {
        players: playersReducer(state.players, action),
        cities: citiesReducer(state.cities, action)
    }
}