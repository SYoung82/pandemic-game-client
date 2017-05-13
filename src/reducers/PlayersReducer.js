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
                }
                else {
                    return state
                }
            })
            return newState
        
        case 'NEXT_PLAYER':
            return update(state, {
                0: {currentPlayer: {$set: !state[0].currentPlayer}},
                1: {currentPlayer: {$set: !state[1].currentPlayer}}
            })

        case 'DISCARD':
            var currentPlayerIndex = state.findIndex( player => player.name === action.currentPlayer.name )
            
            return update(state, {
                [currentPlayerIndex]: {
                    hand: {$set: state[currentPlayerIndex].hand.filter(card => card.name !== action.card)}
                }
            })

        case 'RESET_TURN_COUNT':
            return update(state, {
                0: {movesLeft: {$set: 4}},
                1: {movesLeft: {$set: 4}}
            })

        case 'DECREMENT_TURN_COUNT':
            currentPlayerIndex = state.findIndex( player => player.name === action.currentPlayer.name )

            return update(state, {
                [currentPlayerIndex]: {
                    movesLeft: {$set: state[currentPlayerIndex].movesLeft-1}
                }
            })

        case 'DRAW_PLAYER_CARDS':
            const index = state.findIndex( player => player.name === action.currentPlayer.name )
            
            return update(state, {
                [index]: {
                    hand: {$set: state[index].hand.concat(action.cards)}
                }
            })

        default:
            return state
    }
}