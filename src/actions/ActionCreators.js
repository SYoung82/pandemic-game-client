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

export function removeCube(city, color) {
    return {
        type: 'REMOVE_CUBE',
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