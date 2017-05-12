import React, { Component } from 'react'

class Login extends Component {
    onSubmit(e) {
        e.preventDefault()
        console.log(e)
    }

    render() {
        const customStyle={
            float: 'left',
            marginLeft: '15%'
        }

        return(
            <div style={customStyle}>
                <form id='login-form' onSubmit={this.onSubmit.bind(this)}>
                    <h1>Login</h1>
                    <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input id='email-input' type='text' placeholder='Mail@Email.com' /><br />
                    <label>Password:&nbsp;</label>
                    <input id='password-input' type='password' placeholder='*********' /><br />
                    <button id='signup-button' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}



export default Login