import update from 'react-addons-update'

export function diseaseStatusReducer(state={red: 'uncured', black: 'uncured', blue: 'uncured', yellow: 'uncured'}, action) {

    switch(action.type) {
        case 'CURE_DISEASE':
            return update(state, {[action.color]: {$set: 'cured'}})
        
        default:
            return state
    }
}