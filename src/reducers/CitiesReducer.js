
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

        case 'REMOVE_CUBE':
            console.log('Removing cube ', action.color)
            debugger
            newState = state
            return newState.map( (city, index) => {
                if(city.name !== action.currentCity) {
                    return city
                }
                return update(city, {
                        cubes: {[action.color]: {$set: city.cubes[action.color]- 1}}
                    })
                }
            )

        default:
            return state
    }
}