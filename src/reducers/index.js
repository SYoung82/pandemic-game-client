import { playersReducer } from '../reducers/PlayersReducer'
import { citiesReducer } from '../reducers/CitiesReducer'
import { adjacentCitiesReducer } from '../reducers/AdjacentCitiesReducer'
import { infectionDeckReducer } from '../reducers/InfectionDeckReducer'
import { playerDeckReducer } from '../reducers/PlayerDeckReducer'
import { researchStationCitiesReducer } from '../reducers/ResearchStationCitiesReducer'
import { gameStatusReducer } from '../reducers/GameStatusReducer'

import { combineReducers } from 'redux'

const combinedReducer = combineReducers({
    infectionDeckReducer,
    playerDeckReducer,
    playersReducer,
    citiesReducer,
    adjacentCitiesReducer,
    researchStationCitiesReducer,
    gameStatusReducer
})

export default combinedReducer