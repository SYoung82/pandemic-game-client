import React, { Component } from 'react'
import { connect } from 'react-redux'

class MovesList extends Component {
    handleAdjacentCityClick(e) {
        e.preventDefault();
        console.log('City ' + e.target.innerText + ' clicked in AdjacentCities list' );

        this.props.dispatch({
            type: 'MOVE_PLAYER',
            city: e.target.innerText,
            currentPlayer: this.props.currentPlayer,
            currentCity: this.props.currentPlayer.currentCity
        })
    }

    render() {
        const listItems = this.props.adjacentCities.map( city => 
            <li key={city}><a key={city} style={{color: 'white'}} href='#' onClick={this.handleAdjacentCityClick.bind(this)}>{city}</a></li>
        )

        return (
            <div>
                <h2>Current City: {this.props.currentPlayer.currentCity}</h2>
                <h3>Adjacent Cities:</h3>
                <h5>Move to: </h5>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        adjacentCities: state.adjacentCitiesReducer,
        currentPlayer: state.currentPlayerReducer
    }
}

export default connect(mapStateToProps)(MovesList)