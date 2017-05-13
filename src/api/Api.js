export function fetchLogin(action) {
    return fetch('http://localhost:3000/api/v1/auth', {
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