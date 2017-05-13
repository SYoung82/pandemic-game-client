import update from 'react-addons-update'

export function gameStatusReducer(state={
    red: 'Uncured', 
    black: 'Uncured', 
    blue: 'Uncured', 
    yellow: 'Uncured', 
    phase: 'Move', 
    isGameOver: false, 
    winner: null, 
    isGameEndModalOpen: false, 
    isLoggedIn:false,
    user: null,
    token: null
}, action) {

    switch(action.type) {
        case 'CURE_DISEASE':
            return update(state, {[action.color]: {$set: 'Cured'}})

        case 'SET_GAME_PHASE':
            return update(state, {phase: {$set: action.phase}})

        case 'END_GAME':
            return update(state, {isGameOver: {$set: true}})

        case 'OPEN_END_GAME_MODAL':
            return update(state, {isGameEndModalOpen: {$set: true}})

        case 'CLOSE_END_GAME_MODAL':
            return update(state, {isGameEndModalOpen: {$set: false}})
        
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {isLoggedIn: true, user: action.email.user.email, token: action.email.token})

        default:
            return state
    }
}