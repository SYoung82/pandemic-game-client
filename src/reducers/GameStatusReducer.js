import update from 'react-addons-update'

export function gameStatusReducer(state={red: 'uncured', black: 'uncured', blue: 'uncured', yellow: 'uncured', gamePhase: 'Move'}, action) {

    switch(action.type) {
        case 'CURE_DISEASE':
            return update(state, {[action.color]: {$set: 'cured'}})
        
        default:
            return state
    }
}