import { select, takeEvery, put } from 'redux-saga/effects'
import { setGamePhase, resetTurnCount, nextPlayer, endGame, drawInfectionCards, placeCube } from '../actions/ActionCreators'

const getCurrentPlayer = state => state.playersReducer.find(player => player.currentPlayer === true)
const getPlayerDeck = state => state.playerDeckReducer
const getInfectionDeck = state => state.infectionDeckReducer
const getGameStatus = state => state.gameStatusReducer
const getCities = state => state.citiesReducer


export function* nextPhaseSaga() {
    yield takeEvery('DRAW_PLAYER_CARDS', nextPhase)
    yield takeEvery('DRAW_PLAYER_CARDS', checkEndGame)
    yield takeEvery('SET_GAME_PHASE', infect)
}

export function* nextPhase(action) {
    const currentPlayer = yield select(getCurrentPlayer)
    
    if(currentPlayer.hand.filter(card => card.name === 'Epidemic').length > 0 ) {
        yield put(setGamePhase('Epidemic'))
    } 
     else if((currentPlayer.hand.filter(card => card.name !== 'Epidemic').length > 7 )) {
        yield put(setGamePhase('Discard'))    
     } else {
        yield put(setGamePhase('Infect'))
     }
}

export function* checkEndGame(action) {
    const playerDeck = yield select(getPlayerDeck)
    const gameStatus = yield select(getGameStatus)

    if (playerDeck.length === 0) {
        alert('Game over: Computer wins :( \nInfection Deck empty. ')
        yield put(endGame({winner: 'Computer'}))
    }
    if (gameStatus.red === 'Cured' && gameStatus.black === 'Cured' && gameStatus.blue === 'Cured' && gameStatus.yellow === 'Cured') {
        alert('Game over: Players win :) \nAll disease colors cured!')
        yield put(endGame({winner: 'Players'}))
    }
}

export function* infect(action) {
    const infectionDeck = yield select(getInfectionDeck)
    const infectionCards = infectionDeck.slice(0, 2)
    const currentPlayer = yield select(getCurrentPlayer)
    const cities = yield select(getCities)

    if(action.phase === 'Infect') {
        for(let i=0; i<infectionCards.length; i++) {
            let city = cities.find( city => city.name === infectionCards[i].name)
            let name = infectionCards[i].name
            let color = infectionCards[i].color

            console.log('Placing ', name, 'cube to ', color)
            yield put(placeCube(city, color))
        }
        yield [
            put(drawInfectionCards(2)),
            put(setGamePhase('Move')),
            put(resetTurnCount(currentPlayer)),
            put(nextPlayer(currentPlayer))
        ]
    }
}