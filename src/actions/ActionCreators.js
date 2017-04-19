import { UPDATE_CITY, CREATE_CITY, UPDATE_PLAYER, CREATE_PLAYER } from '../actions/Actions'

export default function updateCity(city){
    return {
        type: UPDATE_CITY,
        city
    }
}

export default function createCity(city){
    return {
        type: CREATE_CITY,
        city
    }
}

export default function updatePlayer(player){
    return {
        type: UPDATE_PLAYER,
        player
    }
}

export default function createPlayer(player){
    return {
        type: CREATE_PLAYER,
        player
    }
}