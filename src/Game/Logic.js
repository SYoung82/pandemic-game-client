export function prepInfectionDeck(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex

    while( 0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = cards[currentIndex]
        cards[currentIndex] = cards[randomIndex]
        cards[randomIndex] = temporaryValue
    }
    return cards
}

export function prepPlayerDeck() {
    
}

export function checkTurnOver(state) {
    if(state.movesLeft <= 1) {
        return true
    }
    return false
}

export function checkGameOver(state) {
    return false
}