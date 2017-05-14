const url = 'http://localhost:3000/api/v1/'

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