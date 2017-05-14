import React, { Component } from 'react'
import { connect } from 'react-redux'
import GamePhase from '../components/GamePhase'
import { getLatestSave, saveGame } from '../actions/ActionCreators'

class Status extends Component {
    onSaveClick(e) {
        this.props.dispatch(saveGame(this.props.gameStatus.id, this.props.gameStatus.token))
    }

    render() {
        return(
            <div>
                <button onClick={this.onSaveClick.bind(this)} >Save Game</button><br />
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