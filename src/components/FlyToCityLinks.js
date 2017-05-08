import React, { Component } from 'react'
import { checkTurnOver } from '../Game/Logic'
import { connect } from 'react-redux'
import { movePlayer, discard, getTurnOverActions, decrementTurnCount } from '../actions/ActionCreators'

class FlyToCityLinks extends Component {
    handleFlyToCityClick(e) {
        e.preventDefault();
        
        this.props.dispatch(movePlayer(e.target.innerText, this.props.currentPlayer))
        this.props.dispatch(discard(this.props.currentPlayer, e.target.innerText))
        
        if(checkTurnOver(this.props.currentPlayer)){
            const actions = getTurnOverActions(this.props.currentPlayer, this.props.playerDeck, 'Draw')
            actions.forEach( action => {
                this.props.dispatch(action)
            })
        } else {
            this.props.dispatch(decrementTurnCount(this.props.currentPlayer))
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