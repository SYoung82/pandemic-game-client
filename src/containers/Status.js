import React, { Component } from 'react'
import { connect } from 'react-redux'
import GamePhase from '../components/GamePhase'
import FetchedGames from '../components/FetchedGames'


class Status extends Component {
    
    render() {
        return(
            <div>
                {/*<GamePhase gameStatus={this.props.gameStatus} />*/}
                <FetchedGames games={this.props.gameStatus.games} />
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