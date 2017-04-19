import { UPDATE_CITY, CREATE_CITY } from '../actions/Actions'

export default function cities( state = [], action){
    switch(action.type){
        case CREATE_CITY:
            return [...state, action.state]
        case UPDATE_CITY:
            return state.forEach( city => {
                if(city === action.city) {
                    return Object.assign({}, state, city)
                }
            })
    }
}