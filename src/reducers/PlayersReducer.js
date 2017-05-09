import { players } from '../constants/Players'
import update from 'react-addons-update'

export function playersReducer(state=players, action){
    switch(action.type){
        
        case 'MOVE_PLAYER':
            var newState = state

            newState.map( (player,index) => {
                if(player.currentPlayer === true) {
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

        case 'DISCARD':
            var stateToReturn = state
            
            stateToReturn.forEach( (player, index) => {
                if(player.name === action.currentPlayer.name) {
                    stateToReturn[index].hand = state[index].hand.filter( card => card.name !== action.card)
                }
            })
            return stateToReturn
        
        case 'RESET_TURN_COUNT':
            stateToReturn = state
            stateToReturn.forEach( (player, index) => {
                if(player === action.currentPlayer) {
                    stateToReturn[index].movesLeft = 4
                }
            })
            return stateToReturn

        case 'DECREMENT_TURN_COUNT':
            stateToReturn = state
            stateToReturn.forEach( (player, index) => {
                if(player === action.currentPlayer) {
                    stateToReturn[index].movesLeft--
                }
            })
            return stateToReturn

        case 'DRAW_PLAYER_CARDS':
            const index = state.findIndex( player => player === action.currentPlayer )
            
            return update(state, {
                [index]: {
                    hand: {$set: state[index].hand.concat(action.cards)}
                }
            })

        default:
            return state
    }
}