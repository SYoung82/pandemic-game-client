import { players } from '../constants/Players'
import { adjacentCities } from '../constants/AdjacentCities'

const currentPlayer = players.find(p => p.currentPlayer === true)
const adjCitiesList = adjacentCities

export function adjacentCitiesReducer(state = adjacentCities.find(c => c.name === currentPlayer.currentCity).adjacentCities, action) {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return adjCitiesList.find( city => city.name === currentPlayer.currentCity ).adjacentCities

        default:
            return state;
    }
}