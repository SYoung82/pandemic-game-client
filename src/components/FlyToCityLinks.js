import React, { Component } from 'react'
import { checkTurnOver } from '../Game/Logic'
import { connect } from 'react-redux'

class FlyToCityLinks extends Component {
    handleFlyToCityClick(e) {
        e.preventDefault();
        var player = this.props.currentPlayer
        
        this.props.dispatch({
            type: 'MOVE_PLAYER',
            city: e.target.innerText,
            currentPlayer: this.props.currentPlayer,
            currentCity: this.props.currentPlayer.currentCity
        })

        this.props.dispatch({
            type: 'DISCARD',
            currentPlayer: this.props.currentPlayer,
            card: e.target.innerText
        })
        
        if(checkTurnOver(this.props.currentPlayer)){
            this.props.dispatch({
                type: 'RESET_TURN_COUNT',
                currentPlayer: this.props.currentPlayer
            })

            this.props.dispatch({
                type: 'NEXT_PLAYER',
                currentPlayer: this.props.currentPlayer
            })

            this.props.dispatch({
                type: 'DRAW_PLAYER_CARDS',
                currentPlayer: player,
                cards: this.props.playerDeck.slice(0,2)
            })

        } else {
            this.props.dispatch({
                type: 'DECREMENT_TURN_COUNT',
                currentPlayer: this.props.currentPlayer
            })
        }
    }

    render(){
        const flyToCities = this.props.hand.map( card => 
            card.type !== 'city' ? null : <li key={card.name}><a key={card.name} style={{color: 'white'}} href='#' onClick={this.handleFlyToCityClick.bind(this)}>{card.name}</a></li>  
        )

        return(
            <div>
                <h5>Fly to: (Costs that city card)</h5>
                    <ul>{flyToCities}</ul>
            </div>
        )
    }
}

export default connect()(FlyToCityLinks)