import { cities } from '../constants/Cities';

export function researchStationCitiesReducer(state=cities.filter(c => c.researchStation === true), action) {
    
    switch(action.type) {
        default:
            return state;
    }
}