import React, { Component } from 'react'

class Signup extends Component {
    onSubmit(e) {
        e.preventDefault()
        debugger
        console.log(e)
    }

    render() {
        const customStyle = {
            float: 'right',
            marginRight: '15%'
        }

        return(
            <div style={customStyle}>
                <form id='signup-form' onSubmit={this.onSubmit.bind(this)}>
                    <h1>Signup</h1>
                    <label>Email: &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</label>
                    <input id='email-input' type='text' placeholder='Mail@Email.com' /><br />
                    <label>Password: &emsp;&emsp;&emsp;&emsp;&emsp;</label>
                    <input id='password-input' type='password' placeholder='*********' /><br />
                    <label>Confirm Password:&emsp;</label>
                    <input id='password-confirm' type='password' /><br />
                    <button id='signup-button' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}



export default Signup