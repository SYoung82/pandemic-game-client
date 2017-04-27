import { players } from '../constants/Players'

export function currentPlayerReducer(state=players.find(p => p.currentPlayer === true), action) {
    
    switch(action.type) {
        
        default:
            return state
    }
}