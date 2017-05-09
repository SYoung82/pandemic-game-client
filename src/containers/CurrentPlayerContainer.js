import React, { Component } from 'react'
import Player from '../components/Player'
import { connect } from 'react-redux'

class CurrentPlayerContainer extends Component{ 
    render() {
        const style = {
            border: '0',
            padding: '0',
            backgroundColor: 'black' 
        }
        
        return (
            <div style={style}>
                <Player 
                    player={this.props.player} 
                    playerDeck={this.props.playerDeck}
                    infectionDeck={this.props.infectionDeck} 
                    hand={this.props.player.hand} 
                    gameStatus={this.props.gameStatus} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.playersReducer.find(player => player.currentPlayer === true),
        playerDeck: state.playerDeckReducer,
        infectionDeck: state.infectionDeckReducer,
        gameStatus: state.gameStatusReducer
    }
}

export default connect(mapStateToProps)(CurrentPlayerContainer)
