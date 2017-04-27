import { players } from '../constants/Players'

export function currentPlayerReducer(state=players.find(p => p.currentPlayer === true), action) {
    
    switch(action.type) {
        case 'NEXT_PLAYER':
            return players.find(p => p.currentPlayer === true)
        default:
            return state
    }
}