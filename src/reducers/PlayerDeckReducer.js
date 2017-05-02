import { playerDeck } from '../constants/PlayerDeck'
import { prepPlayerDeck } from '../Game/Logic'

export function playerDeckReducer(state = prepPlayerDeck(playerDeck, 4), action) {
    switch(action.type) {
        default:
            return state
    }
}