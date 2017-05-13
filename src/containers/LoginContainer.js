import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginFormComponent from '../components/Login'
import SignupFormComponent from '../components/Signup'


class LoginContainer extends Component {
    render() {
        return (
            <div id='login-container' style={{marginTop: '10%'}}>
                <h1 style={{textAlign: 'center'}}>Fandemic</h1>
                <LoginFormComponent isLoggedIn={this.props.isLoggedIn} />
                <SignupFormComponent isLoggedIn={this.props.isLoggedIn} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.gameStatusReducer.isLoggedIn
    }
}

export default connect(mapStateToProps)(LoginContainer)
