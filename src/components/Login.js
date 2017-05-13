import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'
import { login } from '../actions/ActionCreators'

class LoginFormComponent extends Component {
    render() {
        const LoginForm = <Form
            onSubmit={ (values, state, props, instance) => {
                const { email, password } = values
                this.props.dispatch(login(email, password))
            }}

            validate={ values => {
                const { email, password } = values
                        
                return {
                    email: !email ? 'An email is required' : undefined,
                    password: !password ? 'A password is required' : undefined
                }
            }}


        >

            {({submitForm}) => {
                if(this.props.isLoggedIn) {
                    return <Redirect to='/' />
                }
                else {
                    return (
                        <div>
                            <form id='login-form' onSubmit={submitForm} style={{marginLeft: '15%', float: 'left'}}>
                                <h1>Login</h1>
                                <Text field='email' type='text' placeholder='Email' /><br />
                                <Text field='password' type='password' placeholder='Password' /><br />
                                <button id='login-button' type='submit'>Submit</button>
                            </form>
                        </div>
                    )
                }
            }}
        </Form>

        return(LoginForm)
    }
}

export default connect()(LoginFormComponent)