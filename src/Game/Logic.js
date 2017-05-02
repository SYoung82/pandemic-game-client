export function prepInfectionDeck(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex
    if(!cards.prepped) {
        while( 0 !== currentIndex ) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            temporaryValue = cards[currentIndex]
            cards[currentIndex] = cards[randomIndex]
            cards[randomIndex] = temporaryValue
        }
        cards.prepped = true
        return cards
    }
    return cards
}

export function prepPlayerDeck(cards, difficulty=4) {
    if(!cards.prepped) {
        var completedDeck = cards
        var currentIndex = cards.length, temporaryValue, randomIndex

        while( 0 !== currentIndex ) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            temporaryValue = completedDeck[currentIndex]
            completedDeck[currentIndex] = completedDeck[randomIndex]
            completedDeck[randomIndex] = temporaryValue
        }
        
        insertEpidemicCards(completedDeck, difficulty)
        completedDeck.prepped = true

        return completedDeck
    }
    return cards
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

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function insertEpidemicCards(deck, difficulty = 4) {
    var randomIndex
    for(let j=0; j<difficulty; j++) {
        randomIndex = randomIntFromInterval(j*12, (j*12)+12)
        console.log(randomIndex)
        console.log('j: ', j)
        deck.splice(randomIndex, 0, {name: 'Epidemic', color: 'green', type: 'epidemic'})
    }
}