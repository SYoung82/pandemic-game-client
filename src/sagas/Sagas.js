import { select, takeEvery, put } from 'redux-saga/effects'
import { setGamePhase, resetTurnCount, nextPlayer } from '../actions/ActionCreators'

const getCurrentPlayer = state => state.playersReducer.find(player => player.currentPlayer === true)

export function* nextPhaseSaga() {
    yield takeEvery('DRAW_PLAYER_CARDS', nextPhase)
}

export function* nextPhase(action) {
    const currentPlayer = yield select(getCurrentPlayer)
    
    if(currentPlayer.hand.filter(card => card.name === 'Epidemic').length > 0 ) {
        yield put(setGamePhase('Epidemic'))
    } 
     else if((currentPlayer.hand.filter(card => card.name !== 'Epidemic').length > 7 )) {
        yield put(setGamePhase('Discard'))    
     } else {
        yield [
            put(setGamePhase('Move')),
            put(resetTurnCount(currentPlayer)),
            put(nextPlayer(currentPlayer))
        ]
     }
}