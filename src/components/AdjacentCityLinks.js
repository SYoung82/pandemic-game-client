import React, { Component } from 'react'
import { checkTurnOver } from '../Game/Logic'
import { connect } from 'react-redux'

class AdjacentCityLinks extends Component {
    handleAdjacentCityClick(e) {
        e.preventDefault();

        this.props.dispatch({
            type: 'MOVE_PLAYER',
            city: e.target.innerText,
            currentPlayer: this.props.currentPlayer,
            currentCity: this.props.currentPlayer.currentCity
        })

        if(checkTurnOver(this.props.currentPlayer)){
            this.props.dispatch({
                type: 'RESET_TURN_COUNT',
                currentPlayer: this.props.currentPlayer
            })

            this.props.dispatch({
                type: 'NEXT_PLAYER',
            })
        } else {
            this.props.dispatch({
                type: 'DECREMENT_TURN_COUNT',
                currentPlayer: this.props.currentPlayer
            })
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