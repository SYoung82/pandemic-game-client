import React, { Component } from 'react'
import { checkTurnOver } from '../Game/Logic'
import { connect } from 'react-redux'
import { movePlayer, decrementTurnCount, getBeginTurnOverActions, getEpidemicActions, getDiscardActions, nextPlayer, resetTurnCount } from '../actions/ActionCreators'

class AdjacentCityLinks extends Component {
    handleAdjacentCityClick(e) {
        e.preventDefault();

        this.props.dispatch(movePlayer(e.target.innerText, this.props.currentPlayer))

        if(checkTurnOver(this.props.currentPlayer)){
            var actions = getBeginTurnOverActions(this.props.currentPlayer, this.props.playerDeck)
            actions.forEach( action => this.props.dispatch(action) )
            actions = getEpidemicActions(this.props.currentPlayer, this.props.infectionDeck)
            actions.forEach( action => this.props.dispatch(action) )
            actions = getDiscardActions(this.props.currentPlayer)
            actions.forEach( action => this.props.dispatch(action) )
            
            //TODO TODO TODO 
            //Implement discard excess cards in hand feature
            
            this.props.dispatch(resetTurnCount(this.props.currentPlayer))
            this.props.dispatch(nextPlayer(this.props.currentPlayer))
        } else {
            this.props.dispatch(decrementTurnCount(this.props.currentPlayer))
        }
    }

    render() {
        const moveToCities = this.props.adjacentCities.map( city => 
            <li key={city}><a key={city} style={{color: 'white'}} href='#' onClick={this.handleAdjacentCityClick.bind(this)}>{city}</a></li>
        )

        return(
            <div>
                <h5>Move to adjacent city: </h5>
                    <ul>{moveToCities}</ul>
            </div>
        )
    }
}

export default connect()(AdjacentCityLinks)