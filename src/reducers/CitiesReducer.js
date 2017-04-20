import { UPDATE_CITY } from '../actions/Actions'
import { cities } from '../constants/Cities'

export function citiesReducer( state = cities, action){

    switch(action.type){
        case UPDATE_CITY:
            state.forEach( (city, index) => {
                if(city.name === action.city.name) {;
                    var newState = state;
                    newState[index] = action.city;
                    return newState;
                    debugger;
                }
            })
        default:
            return state
    }
}