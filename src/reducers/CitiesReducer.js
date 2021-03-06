
import { cities } from '../constants/Cities'
import update from 'react-addons-update'

export function citiesReducer( state = cities, action){

    switch(action.type){

        case 'UPDATE_CITY':
            var newState = state;
            state.forEach( (city, index) => {
                if(city.name === action.city.name) {
                    newState[index] = action.city
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
            newState = state
            return newState.map( (city, index) => {
                if(city.name !== action.currentCity) {
                    return city
                } else {
                    return update(city, {
                            cubes: {[action.color]: {$set: city.cubes[action.color]- 1}}
                        })
                    }
            })

        case 'PLACE_CUBE':
            newState = state

            return newState.map( (city, index) => {
                if(city.name !== action.currentCity.name) {
                    return city
                } else if(city.name === action.currentCity.name && city.cubes[action.color] < 3) {
                    return update(city, {
                        cubes: {[action.color]: {$set: city.cubes[action.color] + 1}}
                    })
                } else return state
            })

        case 'BUILD_RESEARCH_STATION':
            return state.map( city => {
                if( city !== action.city ) {
                    return city
                } else {
                    return update(city, {
                        researchStation: {$set: true}
                    })
                }
            })

        default:
            return state
    }
}