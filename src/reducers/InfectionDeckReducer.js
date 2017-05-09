import { cityCards } from '../constants/Cards'
import { prepInfectionDeck } from '../Game/Logic'


export function infectionDeckReducer(state = prepInfectionDeck(cityCards), action) {
    switch(action.type) {
        case 'DRAW_BOTTOM_INFECTION_CARD':
        debugger
            return state.splice(0, state.length-1)

        default:
            return state
    }
}