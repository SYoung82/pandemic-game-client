import React, { Component } from 'react'
import { checkTurnOver } from '../Game/Logic'
import { connect } from 'react-redux'
import { movePlayer, resetTurnCount, nextPlayer, drawPlayerCards, decrementTurnCount } from '../actions/ActionCreators'

class AdjacentCityLinks extends Component {
    handleAdjacentCityClick(e) {
        e.preventDefault();
        var player = this.props.currentPlayer

        this.props.dispatch(movePlayer(e.target.innerText, this.props.currentPlayer))

        if(checkTurnOver(this.props.currentPlayer)){
            this.props.dispatch(resetTurnCount(this.props.currentPlayer))
            this.props.dispatch(nextPlayer(this.props.currentPlayer))
            this.props.dispatch(drawPlayerCards(player, this.props.playerDeck))
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