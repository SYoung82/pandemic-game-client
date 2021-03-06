import React, { Component } from 'react'
import { checkTurnOver } from '../Game/Logic'
import { connect } from 'react-redux'
import { movePlayer, decrementTurnCount, drawPlayerCards } from '../actions/ActionCreators'

class AdjacentCityLinks extends Component {
    handleAdjacentCityClick(e) {
        e.preventDefault();

        this.props.dispatch(movePlayer(e.target.innerText, this.props.currentPlayer))

        if(checkTurnOver(this.props.currentPlayer)){
            this.props.dispatch(drawPlayerCards(this.props.currentPlayer, this.props.playerDeck))
        } else {
            this.props.dispatch(decrementTurnCount(this.props.currentPlayer))
        }
    }

    render() {
        const moveToCities = this.props.adjacentCities.map( city => 
            <li key={city}><a key={city} style={{color: 'white'}} href={city} onClick={this.handleAdjacentCityClick.bind(this)}>{city}</a></li>
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