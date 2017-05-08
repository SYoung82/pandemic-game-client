import update from 'react-addons-update'

export function gameStatusReducer(state={red: 'Uncured', black: 'Uncured', blue: 'Uncured', yellow: 'Uncured', phase: 'Move'}, action) {

    switch(action.type) {
        case 'CURE_DISEASE':
            return update(state, {[action.color]: {$set: 'Cured'}})

        case 'SET_GAME_PHASE':
            return update(state, {phase: {$set: action.phase}})
        
        default:
            return state
    }
}