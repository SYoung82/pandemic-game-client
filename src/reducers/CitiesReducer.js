
import { cities } from '../constants/Cities'

export function citiesReducer( state = cities, action){

    switch(action.type){

        case 'UPDATE_CITY':
            var newState = state;
            state.forEach( (city, index) => {
                if(city.name === action.city.name) {;
                    newState[index] = action.city;
                }
            })
            return newState;

        case 'MOVE_PLAYER':
            newState = state;
            state.forEach( (city, index) => {
                if (city.name === action.currentCity) {
                    newState[index].players = state[index].players.filter( player => player !== action.currentPlayer.id)
                }
                if (city.name === action.city) {
                    if (city.players) { newState[index].players.push(action.currentPlayer.id) }
                    else { newState[index].players = [action.currentPlayer.id]}
                }
            })
            return newState

        default:
            return state
    }
}