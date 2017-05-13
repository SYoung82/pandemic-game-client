import React, { Component } from 'react'
import { connect } from 'react-redux'

class GamePhase extends Component {
    render() {
        return(
            <div>
                <h3>Logged In As: {this.props.gameStatus.user.user.email}</h3>
                <h3>Current Phase: {this.props.gameStatus.phase}</h3>
                <h3>Black: {this.props.gameStatus.black}</h3>
                <h3>Red: {this.props.gameStatus.red}</h3>
                <h3>Blue: {this.props.gameStatus.blue}</h3>
                <h3>Yellow: {this.props.gameStatus.yellow}</h3>
            </div>
        )
    }
}

export default connect()(GamePhase)