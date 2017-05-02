import React, { Component } from 'react';
import Hand from '../components/Hand';
import { connect } from 'react-redux';

class Player extends Component{
    onEndTurnClick(e) {        
        this.props.dispatch({
            type: 'NEXT_PLAYER'
        })

        this.props.dispatch({
            type: 'RESET_TURN_COUNT',
            currentPlayer: this.props.player
        })
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