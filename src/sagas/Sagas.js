import { select, takeEvery, put } from 'redux-saga/effects'
import { setGamePhase, resetTurnCount, nextPlayer, endGame } from '../actions/ActionCreators'

const getCurrentPlayer = state => state.playersReducer.find(player => player.currentPlayer === true)
const getPlayerDeck = state => state.playerDeckReducer
const getGameStatus = state => state.gameStatusReducer

export function* nextPhaseSaga() {
    yield takeEvery('DRAW_PLAYER_CARDS', nextPhase)
    yield takeEvery('DRAW_PLAYER_CARDS', checkEndGame)
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

export function* checkEndGame(action) {
    const playerDeck = yield select(getPlayerDeck)
    const gameStatus = yield select(getGameStatus)

    if (playerDeck.length === 0) {
        alert('Game over: Computer wins :(')
        yield put(endGame({winner: 'Computer'}))
    }
    if (gameStatus.red === 'Cured' && gameStatus.black === 'Cured' && gameStatus.blue === 'Cured' && gameStatus.yellow === 'Cured') {
        alert('Game over: Players win :)')
        yield put(endGame({winner: 'Players'}))
    }
}