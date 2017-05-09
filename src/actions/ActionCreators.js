import { checkEpidemicCard } from '../Game/Logic'
//getTurnOverActions, returns an array of the actions necessary for all components
//to run when an end of turn is detected, you can then dispatch the actions in array order
export function getTurnOverActions(currentPlayer, playerDeck, infectionDeck, gamePhase) {
    const player = currentPlayer
    let dispatchesArray = []
    
    const numEpidemicCards = checkEpidemicCard(currentPlayer)
    for(let i=0; i<numEpidemicCards; i++) {
        dispatchesArray.push(discard(currentPlayer, 'Epidemic'))
        const bottomInfectionDeckCard = infectionDeck[infectionDeck.length - 1];
        dispatchesArray.push(drawBottomInfectionCard(currentPlayer, infectionDeck))
    }

    dispatchesArray.push(resetTurnCount(currentPlayer))
    dispatchesArray.push(nextPlayer(currentPlayer))
    dispatchesArray.push(drawPlayerCards(player, playerDeck))
    // dispatchesArray.push(setGamePhase('Draw'))
    
    return dispatchesArray
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
