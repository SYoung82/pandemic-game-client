import { players } from '../constants/Players'
import { cities } from '../constants/Cities'

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
        dealInfectionCards(cards)
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
        dealPlayerCards(completedDeck)

        return completedDeck
    }
    return cards
}

export function checkTurnOver(player) {
    if(player.movesLeft <= 1) {
        return true
    }
    return false
}

export function checkGameOver(state) {
    return false
}

//Returns the number of epidemic cards in players hand. Usually 0 or 1
//but could very rarely be 2.
export function checkEpidemicCard(player) {
    return player.hand.filter( card => card.type === 'epidemic').length
}

//Returns number of cards over or under the limit (7) the players hand is
export function checkHandLimit(player) {
    return player.hand.length - 7
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function insertEpidemicCards(deck, difficulty = 4) {
    var randomIndex
    for(let j=0; j<difficulty; j++) {
        randomIndex = randomIntFromInterval(j*12, (j*12)+12)
        deck.splice(randomIndex, 0, {name: 'Epidemic', color: 'green', type: 'epidemic'})
    }
}

function dealPlayerCards(deck) {
    const numPlayers = players.length
    var numCardsPerPlayer = 4
    
    switch(numPlayers) {
        case 2:
            numCardsPerPlayer = 4
            break
        case 3:
            numCardsPerPlayer = 3
            break
        case 4:
            numCardsPerPlayer = 2
            break
        default:
            numCardsPerPlayer = 4
    }

    for(let i=0; i<numCardsPerPlayer; i++) {
        for(let j=0; j<numPlayers; j++) {
            players[j].hand.push(deck.shift())
        }
    }
}

function dealInfectionCards(deck) {
    for(let cubeCount=3; cubeCount>0; cubeCount--) {
        for(let city=0; city<3; city++) {
            let card = deck.shift()
            cities.find( (city) => city.name === card.name ).cubes[card.color] = cubeCount
        }
    }
}