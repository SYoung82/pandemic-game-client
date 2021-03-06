import React, { Component } from 'react'
import Hand from '../components/Hand'
import { connect } from 'react-redux'
import { drawPlayerCards } from '../actions/ActionCreators'

class Player extends Component{
    onEndTurnClick(e) {
        this.props.dispatch(drawPlayerCards(this.props.player, this.props.playerDeck))      
    }

    render() {
        return(
            <div style={{display: 'inline-flex', width: '80%'}}>
                <div style={{width: '30%', lineHeight: '15px'}}>
                    <h3>Current Player: {this.props.player.role}</h3>
                    <button onClick={this.onEndTurnClick.bind(this)} disabled={this.props.gameStatus.phase !== 'Move'}>End Turn</button>
                </div>
                <div className={'hand'} style={{width: '70%'}}>
                    <Hand hand={this.props.hand} player={this.props.player} playerDeck={this.props.playerDeck} infectionDeck={this.props.infectionDeck} gameStatus={this.props.gameStatus} />
                </div>
            </div>
        )
    }
}

export default connect()(Player)