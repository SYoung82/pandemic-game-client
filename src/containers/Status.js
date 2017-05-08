import React, { Component } from 'react'
import { connect } from 'react-redux'
import GamePhase from '../components/GamePhase'

class Status extends Component {
    render() {
        return(
            <div>
                <GamePhase gameStatus={this.props.gameStatus} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        gameStatus: state.gameStatusReducer
    }
}

export default connect(mapStateToProps)(Status)