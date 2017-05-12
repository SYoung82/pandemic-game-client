import React from 'react'
import { Form, Text } from 'react-form'

const SignupForm = (
    <Form
        onSubmit={ values => console.log('Success!', values)}
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
                <Text field='password' type='password' placeholder='*********' /><br />
                <Text field='passwordConfirm' type='password' /><br />
                <button id='signup-button' type='submit'>Submit</button>
            </form>
        )
    }}
    </Form>
)


export default SignupForm