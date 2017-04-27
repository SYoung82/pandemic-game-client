import { players } from '../constants/Players';

export function currentHandReducer(state=players.find(p => p.currentPlayer === true).hand, action) {
    
    switch(action.type) {
        case 'NEXT_PLAYER':
            return players.find(p => p.currentPlayer === true).hand        
        default:
            return state;
    }
}