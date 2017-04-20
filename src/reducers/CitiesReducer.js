import { UPDATE_CITY } from '../actions/Actions'
import { cities } from '../constants/Cities'

export function citiesReducer( state = cities, action){

    switch(action.type){

        case UPDATE_CITY:
        var newState = state;
            state.forEach( (city, index) => {
                if(city.name === action.city.name) {;
                    newState[index] = action.city;
                }
            })
            return newState;

        default:
            return state
    }
}