import { UPDATE_USER, CREATE_USER } from '../actions/Actions'

export default function playersReducer(state=[], action){
    switch(action.type){
        case CREATE_PLAYER:
            return [...state, action.state];
        case UPDATE_PLAYER:
            return state.forEach( player => {
                if(player === action.player){
                    return Object.assign({}, state, player)
                }
            })
        default:
            return state;
    }
}