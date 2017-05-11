import { cityCards } from '../constants/Cards'
import { prepInfectionDeck } from '../Game/Logic'


export function infectionDeckReducer(state = prepInfectionDeck(cityCards), action) {
    switch(action.type) {
        case 'DRAW_BOTTOM_INFECTION_CARD':
            return state.splice(0, state.length-1)

        case 'DRAW_INFECTION_CARDS':
            return state.splice(action.number, state.length-1)
            
        default:
            return state
    }
}