
import { cities } from '../constants/Cities'
import update from 'react-addons-update';

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
            newState.forEach( city => {
                if (city.name === action.currentCity) {
                    update(city, {players: {$splice: [[city.players.indexOf(action.currentPlayer.id), 1]]}})
                }
                if (city.name === action.city) {
                    if (city.players) { city.players.push(action.currentPlayer.id) }
                    else { city.players = [action.currentPlayer.id]}
                }
            })
            return newState

        default:
            return state
    }
}