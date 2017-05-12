import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'
import { signup } from '../actions/ActionCreators'

class SignupFormComponent extends Component {
    render() {
        const SubmitForm = 
            <Form
                onSubmit={ values => {
                    const { email, password, passwordConfirm } = values

                    console.log('Success!', values)
                    this.props.dispatch(signup(email, password))
                }}
                validate={ values => {
                    const { email, password, passwordConfirm } = values

                    return {
                        email: !email ? 'An email is required' : undefined,
                        password: !password ? 'A password is required' : undefined,
                        passwordConfirm: password !== passwordConfirm ? 'Passwords must match' : undefined
                    }
                }}
            >

            {({submitForm}) => {
                return(
                    <form id='signup-form' onSubmit={submitForm} style={{marginRight: '15%', float: 'right'}}>
                        <h1>Signup</h1>
                        <Text field='email' type='text' placeholder='Mail@Email.com' /><br />
                        <Text field='password' type='password' placeholder='Password' /><br />
                        <Text field='passwordConfirm' type='password' placeholder='Confirm' /><br />
                        <button id='signup-button' type='submit'>Submit</button>
                    </form>
                )
            }}
            </Form>
        
        return(SubmitForm)
    }
}


export default connect()(SignupFormComponent)