import { UPDATE_CITY, CREATE_CITY, UPDATE_PLAYER, CREATE_PLAYER } from '../actions/Actions'

export function updateCity(city){
    return {
        type: UPDATE_CITY,
        city
    }
}

export function createCity(city){
    return {
        type: CREATE_CITY,
        city
    }
}

export function updatePlayer(player){
    return {
        type: UPDATE_PLAYER,
        player
    }
}

export function createPlayer(player){
    return {
        type: CREATE_PLAYER,
        player
    }
}