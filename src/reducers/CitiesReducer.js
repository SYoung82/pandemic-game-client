import { UPDATE_CITY, CREATE_CITY } from '../actions/Actions'
import { cities } from '../constants/Cities'

export function citiesReducer( state = cities, action){
    switch(action.type){
        case CREATE_CITY:
            return [...state, action.state]
        case UPDATE_CITY:
            return state.forEach( city => {
                if(city === action.city) {
                    return Object.assign({}, state, city)
                }
            })
        default:
            return state
    }
}