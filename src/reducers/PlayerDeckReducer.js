import { playerDeck } from '../constants/PlayerDeck'
import { prepPlayerDeck } from '../Game/Logic'

export function playerDeckReducer(state = prepPlayerDeck(playerDeck, 4), action) {
    switch(action.type) {
        case 'DRAW_PLAYER_CARDS':
            return state.slice(2)

        default:
            return state
    }
}