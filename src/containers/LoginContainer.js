import React, { Component } from 'react'
import LoginFormContainer from '../components/Login'
import SignupFormContainer from '../components/Signup'


class LoginContainer extends Component {
    render() {
        return (
            <div id='login-container' style={{marginTop: '10%'}}>
                <h1 style={{textAlign: 'center'}}>Fandemic</h1>
                <LoginFormContainer />
                <SignupFormContainer />
            </div>
        )
    }
}

export default LoginContainer
