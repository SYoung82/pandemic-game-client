import { players } from '../constants/Players'
import { adjacentCities } from '../constants/AdjacentCities'

var initialPlayer = players.find(p => p.currentPlayer === true)
const adjCitiesList = adjacentCities

export function adjacentCitiesReducer(state = adjCitiesList.find( city => city.name === initialPlayer.currentCity).adjacentCities, action) {
    switch(action.type) {
        case 'NEXT_PLAYER':
            var currentPlayer = action.currentPlayer
            debugger
            return adjCitiesList.find( c => c.name === currentPlayer.currentCity).adjacentCities

        case 'MOVE_PLAYER':
            currentPlayer = action.currentPlayer
            return adjCitiesList.find( city => city.name === currentPlayer.currentCity ).adjacentCities

        default:
            return state;
    }
}