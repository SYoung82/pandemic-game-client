const url = 'https://safe-badlands-45374.herokuapp.com/api/v1/'

export function fetchLogin(action) {
    return fetch(url + 'auth', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: action.email,
                password: action.password
            })
        })
            .then( resp => { 
                return resp.json() 
            })
            .catch( resp => console.log(resp) )
}

export function fetchSignup(action) {
    return fetch(url + 'users', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: action.email,
            password: action.password
        })
    })
        .then( resp => { return resp.json() })
        .catch( resp => console.log(resp) )
}

export function fetchLatestGame(action) {
    return fetch(url + 'users/' + action.id, {
        method: 'get',
        headers: { 
            'Authorization': 'Basic ' + action.token,
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
    })
        .then( resp => { return resp.json() })
        .catch( resp => console.log(resp))
}

export function fetchSaveGame(action, state) {
    return fetch(url + 'users/' + action.id + '/games', {
        method: 'post',
        headers: {
            'Authorization': 'Basic ' + action.token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                state: {state}
        })
    })
        .then( resp => { return resp.json() })
        .catch( resp => console.log(resp))
}