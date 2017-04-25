import { UPDATE_PLAYER, CREATE_PLAYER } from '../actions/Actions'
import { players } from '../constants/Players'

export function playersReducer(state=players, action){
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