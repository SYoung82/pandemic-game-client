import { cities } from '../constants/Cities'
import { players } from '../constants/Players'

const currentPlayer = players.find(p => p.currentPlayer === true)

export function adjacentCitiesReducer(state = cities.find(c => c.name === currentPlayer.currentCity).adjacentCities, action) {
    debugger
    switch(action.type) {   
        default:
            return state;
    }
}