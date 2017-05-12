import React, { Component } from 'react'
import LoginForm from '../components/Login'
import SignupForm from '../components/Signup'

class LoginContainer extends Component {
    render() {
        return (
            <div id='login-container' style={{marginTop: '10%'}}>
                <h1 style={{textAlign: 'center'}}>Fandemic</h1>
                {LoginForm}
                {SignupForm}
            </div>
        )
    }
}

export default LoginContainer
