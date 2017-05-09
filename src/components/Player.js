import React, { Component } from 'react'
import Hand from '../components/Hand'
import { connect } from 'react-redux'
import { getBeginTurnOverActions } from '../actions/ActionCreators'

class Player extends Component{
    onEndTurnClick(e) {
        var actions = getBeginTurnOverActions(this.props.player, this.props.playerDeck)
        actions.forEach( action => this.props.dispatch(action) )      
    }

    render() {
        return(
            <div style={{display: 'inline-flex'}}>
                <div style={{width: '25%', lineHeight: '15px'}}>
                    <h3>Current Player: {this.props.player.role}</h3>
                    <button onClick={this.onEndTurnClick.bind(this)}>End Turn</button>
                </div>
                <div className={'hand'} style={{width: '100%'}}>
                    <Hand hand={this.props.hand} player={this.props.player} playerDeck={this.props.playerDeck} infectionDeck={this.props.infectionDeck} gameStatus={this.props.gameStatus} />
                </div>
            </div>
        )
    }
}

export default connect()(Player)