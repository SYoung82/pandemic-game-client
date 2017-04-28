import { players } from '../constants/Players'

export function playersReducer(state=players, action){
    switch(action.type){
        
        case 'MOVE_PLAYER':
            var newState = state

            newState.map( (player,index) => {
                if(player.currentPlayer) {
                    player.currentCity = action.city
                    return self  
                } else {
                    return state
                }
            })
            return newState
        
        case 'NEXT_PLAYER':
            var returnState = state
            returnState.forEach( player =>
                player.currentPlayer = !player.currentPlayer
            )
            return returnState
        
        default:
            return state;
    }
}