import { UPDATE_CITY } from '../actions/Actions'

export default function updateCity(city){
    return {
        type: UPDATE_CITY,
        city
    }
}