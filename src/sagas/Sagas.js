import { select, takeEvery, put, call } from 'redux-saga/effects'
import { setGamePhase, resetTurnCount, nextPlayer, endGame, drawInfectionCards, placeCube, openEndGameModal, loginSuccess } from '../actions/ActionCreators'
import { fetchLogin } from '../api/Api'
import Alert from 'react-s-alert'

const getCurrentPlayer = state => state.playersReducer.find(player => player.currentPlayer === true)
const getPlayerDeck = state => state.playerDeckReducer
const getInfectionDeck = state => state.infectionDeckReducer
const getGameStatus = state => state.gameStatusReducer
const getCities = state => state.citiesReducer


export function* nextPhaseSaga() {
    yield takeEvery('DRAW_PLAYER_CARDS', nextPhase)
    yield takeEvery('DRAW_PLAYER_CARDS', checkEndGame)
    yield takeEvery('SET_GAME_PHASE', infect)
    yield takeEvery('LOGIN', login)
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
        yield put(endGame({winner: 'Diseases'}))
        yield put(openEndGameModal())
    }
    if (gameStatus.red === 'Cured' && gameStatus.black === 'Cured' && gameStatus.blue === 'Cured' && gameStatus.yellow === 'Cured') {
        yield put(endGame({winner: 'Players'}))
        yield put(openEndGameModal())
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
            console.log(`Infection Phase: Placing ${color} cube in ${name}`)
            Alert.info(`Infection Phase: Placing ${color} cube in ${name}`,{
                position: 'bottom-left'
            })
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

export function* login(action) {
    const response = yield call(fetchLogin, action)
    if(response.token) { 
        yield put(loginSuccess(response)) 
    }
}