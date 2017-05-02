import { cityCards } from '../constants/Cards'

export function prepInfectionDeck() {
    let deck = cityCards
    var shuffledDeck = []
    for(let i=0; k<deck.length - 1, i++) {
        shuffledDeck.push(arr.splice(Math.floor(Math.random()*deck.length),1)[0])
    }
    shuffledDeck.push(deck[0])
    return shuffledDeck
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