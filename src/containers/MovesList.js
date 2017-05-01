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

    handleFlyToCityClick(e) {
        e.preventDefault();
        console.log('City ' + e.target.innderText + ' clicked in FlyTo list' )

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
    }

    render() {
        const moveToCities = this.props.adjacentCities.map( city => 
            <li key={city}><a key={city} style={{color: 'white'}} href='#' onClick={this.handleAdjacentCityClick.bind(this)}>{city}</a></li>
        )

        const flyToCities = this.props.hand.map( card => 
            <li key={card.name}><a key={card.name} style={{color: 'white'}} href='#' onClick={this.handleFlyToCityClick.bind(this)}>{card.name}</a></li>  
        )
        
        return (
            <div>
                <h2>Current City: {this.props.currentPlayer.currentCity}</h2>
                <h3>Adjacent Cities:</h3>
                <h5>Move to: </h5>
                    <ul>{moveToCities}</ul>
                <h5>Fly to: </h5>
                    <ul>{flyToCities}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        adjacentCities: state.adjacentCitiesReducer,
        currentPlayer: state.currentPlayerReducer,
        hand: state.currentHandReducer.filter( card => card.type === 'city')
    }
}

export default connect(mapStateToProps)(MovesList)