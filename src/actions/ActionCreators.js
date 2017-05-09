import { checkEpidemicCard, checkHandLimit } from '../Game/Logic'
//getTurnOverActions, returns an array of the actions necessary for all components
//to run when an end of turn is detected, you can then dispatch the actions in array order
export function getBeginTurnOverActions(currentPlayer, playerDeck) {
    let actionsArray = []
    
    actionsArray.push(drawPlayerCards(currentPlayer, playerDeck))
    if(currentPlayer.hand.filter(card => card.name === 'Epidemic').length > 0 || 
       playerDeck.slice(0,2).filter(card => card.name === 'Epidemic').length > 0) {
        actionsArray.push(setGamePhase('Epidemic'))
    } 
     else if((currentPlayer.hand.filter(card => card.name !== 'Epidemic').length + 
        playerDeck.slice(0,2).filter(card => card.name !== 'Epidemic').length) > 7 ) {
        actionsArray.push(setGamePhase('Discard'))    
     } else {
        actionsArray.push(setGamePhase('Move'))
        actionsArray.push(resetTurnCount(currentPlayer))
        actionsArray.push(nextPlayer(currentPlayer))
     }

    return actionsArray
}

export function getEpidemicActions(currentPlayer, infectionDeck) {
    let actionsArray = []
    
    const numEpidemicCards = checkEpidemicCard(currentPlayer)

    for(let i=0; i<numEpidemicCards; i++) {
        //Grab the bottom card fro the infection deck for our reference
        const bottomInfectionDeckCard = infectionDeck[infectionDeck.length - 1];
        //Then push the action to actually draw it and discard
        actionsArray.push(drawBottomInfectionCard(currentPlayer, infectionDeck))
        for(let j=0; j<3; j++) {
            console.log("placing epidemic cube on: ", bottomInfectionDeckCard.name)
            actionsArray.push(placeCube(bottomInfectionDeckCard, bottomInfectionDeckCard.color))
        }
        actionsArray.push(discard(currentPlayer, 'Epidemic'))
    }
    
    return actionsArray
}

export function getAfterEpidemicActions(currentPlayer) {
    let actionsArray = []

    if(currentPlayer.hand.filter(card => card.name !== 'Epidemic').length > 5) {
        actionsArray.push(setGamePhase('Discard'))
    } else {
        actionsArray.push(setGamePhase('Move'))
        actionsArray.push(resetTurnCount(currentPlayer))
        actionsArray.push(nextPlayer(currentPlayer))
    }

    return actionsArray
}

export function getDiscardActions(currentPlayer) {
    let actionsArray = []

    for(let i=0; i<checkHandLimit(currentPlayer); i++) {
        console.log("You have too many cards time to discard.");
    }
    actionsArray.push(setGamePhase('Move'))
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
