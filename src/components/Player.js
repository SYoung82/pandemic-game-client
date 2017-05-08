import React, { Component } from 'react';
import Hand from '../components/Hand';
import { connect } from 'react-redux';
import { nextPlayer, resetTurnCount, drawPlayerCards, setGamePhase } from '../actions/ActionCreators'

class Player extends Component{
    onEndTurnClick(e) {
        var player = this.props.player
                
        this.props.dispatch(resetTurnCount(this.props.player))
        this.props.dispatch(nextPlayer(this.props.player))
        this.props.dispatch(drawPlayerCards(player, this.props.playerDeck)) 
        this.props.dispatch(setGamePhase('Draw'))       
    }

    render() {
        return(
            <div style={{display: 'inline-flex'}}>
                <div style={{width: '25%', lineHeight: '15px'}}>
                    <h3>Current Player: {this.props.player.role}</h3>
                    <button onClick={this.onEndTurnClick.bind(this)}>End Turn</button>
                </div>
                <div className={'hand'} style={{width: '100%'}}>
                    <Hand hand={this.props.hand}/>
                </div>
            </div>
        )
    }
}

export default connect()(Player)