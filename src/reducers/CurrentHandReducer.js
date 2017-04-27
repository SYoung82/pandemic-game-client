import { players } from '../constants/Players';

export function currentHandReducer(state=players.find(p => p.currentPlayer === true).hand, action) {
    
    switch(action.type) {        
        default:
            return state;
    }
}