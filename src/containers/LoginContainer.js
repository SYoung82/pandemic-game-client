import React, { Component } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

class LoginContainer extends Component {
    render() {
        return (
            <div id='login-container' style={{marginTop: '15%'}}>
                <h1 style={{textAlign: 'center'}}>Fandemic</h1>
                <Login style={{float: 'left'}}/>
                <Signup style={{float: 'left'}}/>
            </div>
        )
    }
}

export default LoginContainer
