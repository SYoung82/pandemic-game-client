import { cityCards } from '../constants/Cards'
import { prepInfectionDeck } from '../Game/Logic'

export function infectionDeckReducer(state = prepInfectionDeck(cityCards), action) {
    switch(action.type) {
        default:
            return state
    }
}