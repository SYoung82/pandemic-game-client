import { UPDATE_USER, CREATE_USER } from '../actions/Actions'

export default function playersReducer(state=[], action){
    switch(action.type){
        case CREATE_USER:
            return [...state, action.state];
        case UPDATE_USER:
            return state.forEach( player => {
                if(player === action.player){
                    return Object.assign({}, state, player)
                }
            })
        default:
            return state;
    }
}