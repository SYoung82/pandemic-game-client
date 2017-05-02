import { cities } from '../constants/Cities';

export function researchStationCitiesReducer(state=cities.find(c => c.researchStation === true), action) {
    
    switch(action.type) {
        default:
            return state;
    }
}