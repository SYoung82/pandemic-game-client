import { UPDATE_CITY, CREATE_CITY } from '../actions/Actions'
import { cities } from '../constants/Cities'

export function citiesReducer( state = cities, action){
    switch(action.type){
        case CREATE_CITY:
            return [...state, action.state]
        case UPDATE_CITY:
            state.forEach( (city, index) => {
                if(city.name === action.city.name) {
                    let newState = state;
                    newState[index] = action.city;
                    return newState;
                }
            })
            break;
        default:
            return state
    }
}