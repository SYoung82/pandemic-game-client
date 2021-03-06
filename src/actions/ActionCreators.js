import { checkEpidemicCard } from '../Game/Logic'
import Alert from 'react-s-alert'

export function getEpidemicActions(currentPlayer, infectionDeck) {
    let actionsArray = []
    
    const numEpidemicCards = checkEpidemicCard(currentPlayer)

    for(let i=0; i<numEpidemicCards; i++) {
        if(infectionDeck.length === 0) {
            actionsArray.push(endGame('Computer'))
        }
        else {
            //Grab the bottom card fro the infection deck for our reference
            const bottomInfectionDeckCard = infectionDeck[infectionDeck.length - 1];
            //Then push the action to actually draw it and discard
            actionsArray.push(drawBottomInfectionCard(currentPlayer, infectionDeck))
            Alert.info(`Epidemic Phase: Placing cubes in ${bottomInfectionDeckCard.name}`,{
                    position: 'bottom-left'
                })
            for(let j=0; j<3; j++) {
                actionsArray.push(placeCube(bottomInfectionDeckCard, bottomInfectionDeckCard.color))
            }
            actionsArray.push(discard(currentPlayer, 'Epidemic'))
        }
    }
    return actionsArray
}

export function getAfterEpidemicActions(currentPlayer, playerDeck) {
    let actionsArray = []
 
    if((currentPlayer.hand.filter(card => card.name !== 'Epidemic').length) > 7) {
        actionsArray.push(setGamePhase('Discard'))
    } else {
        actionsArray.push(setGamePhase('Infect'))
    }

    return actionsArray
}

export function resetTurnCount(player) {
    return {
        type: 'RESET_TURN_COUNT',
        currentPlayer: player
    }
}

export function decrementTurnCount(player) {
    return {
        type: 'DECREMENT_TURN_COUNT',
        currentPlayer: player
    }
}

export function nextPlayer(player) {
    return {
        type: 'NEXT_PLAYER',
        currentPlayer: player
    }
}

export function setGamePhase(phase) {
    return {
        type: 'SET_GAME_PHASE',
        phase: phase
    }
}

export function removeCube(city, color) {
    return {
        type: 'REMOVE_CUBE',
        currentCity: city,
        color: color
    }
}

export function placeCube(city, color) {
    return {
        type: 'PLACE_CUBE',
        currentCity: city,
        color: color
    }
}

export function discard(player, card) {
    return {
        type: 'DISCARD',
        currentPlayer: player,
        card: card
    }
}

export function drawPlayerCards(player, playerDeck) {
    return {
        type: 'DRAW_PLAYER_CARDS',
        currentPlayer: player,
        cards: playerDeck.slice(0,2)
    }
}

export function drawBottomInfectionCard(player, infectionDeck) {
    return {
        type: 'DRAW_BOTTOM_INFECTION_CARD',
        currentPlayer: player,
        infectionDeck: infectionDeck
    }
}

export function drawInfectionCards(number) {
    return {
        type: 'DRAW_INFECTION_CARDS',
        number: number
    }
}

export function movePlayer(city, player) {
    return {
        type: 'MOVE_PLAYER',
        city: city,
        currentPlayer: player
    }
}

export function buildResearchStation(city, player) {
    return {
        type: 'BUILD_RESEARCH_STATION',
        city: city,
        currentPlayer: player
    }
}

export function cureDisease(color, player) {
    return {
        type: 'CURE_DISEASE',
        color: color,
        currentPlayer: player
    }
}

export function endGame(winner) {
    return {
        type: 'END_GAME',
        winner: winner
    }
}

export function newGame() {
    return {
        type: 'NEW_GAME'
    }
}

export function openEndGameModal() {
    return { 
        type: 'OPEN_END_GAME_MODAL',
        isGameEndModalOpen: true
    }
}

export function closeEndGameModal() {
    return {
        type: 'CLOSE_END_GAME_MODAL',
        isGameEndModalOpen: false
    }
}

export function openLoginModal() {
    return {
        type: 'OPEN_LOGIN_MODAL',
        isLoginModalOpen: true
    }
}

export function closeLoginModal() {
    return {
        type: 'CLOSE_LOGIN_MODAL',
        isLoginModalOpen: false
    }
}

export function login(email, password) {
    return {
        type: 'LOGIN',
        email: email,
        password: password
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}

export function signup(email, password) {
    return {
        type: 'SIGNUP',
        email: email,
        password: password
    }
}

export function loginSuccess(email, token, id) {
    return {
        type: 'LOGIN_SUCCESS',
        email: email,
        token: token,
        id: id
    }
}

export function getLatestSave(id, token) {
    return {
        type: 'GET_LATEST_SAVE',
        id: id,
        token: token
    }
}

export function saveGame(id, token, state) {
    return {
        type: 'SAVE_GAME',
        id: id,
        token: token,
        state: state
    }
}

export function getSaveSuccess(state) {
    return {
        type: 'GET_SAVE_SUCCESS',
        state: state
    }
}

export function getGames(id, token) {
    return {
        type: 'GET_GAMES',
        id: id,
        token: token
    }
}

export function getGameSuccess(games) {
    return {
        type: 'GET_GAME_SUCCESS',
        games: games
    }
}