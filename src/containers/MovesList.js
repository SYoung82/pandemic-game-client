import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkTurnOver } from '../Game/Logic'
import CureCubeLinks from '../components/CureCubeLinks'
import AdjacentCityLinks from '../components/AdjacentCityLinks'
import FlyToCityLinks from '../components/FlyToCityLinks'

class MovesList extends Component {
    handleOtherStationsClick(e) {
        e.preventDefault()

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
        const researchStationLinks = this.props.researchStationCities.filter( city => city.name !== this.props.currentPlayer.currentCity ).map( city => 
            <li key={city.name}><a key={city.name} style={{color: 'white'}} href='#' onClick={this.handleOtherStationsClick.bind(this)}>{city.name}</a></li>
        ) 

        return (
            <div>
                <h2>Current City: {this.props.currentPlayer.currentCity}</h2>
                {this.props.currentCity.researchStation ? <h4>{"Research Station: ✓"}</h4> : null}
                <h3>Moves Left: {this.props.currentPlayer.movesLeft}</h3>
                <CureCubeLinks cubes={this.props.currentCity.cubes} currentCity={this.props.currentCity} currentPlayer={this.props.currentPlayer} />
                <AdjacentCityLinks adjacentCities={this.props.adjacentCities} currentCity={this.props.currentCity} currentPlayer={this.props.currentPlayer} />
                <FlyToCityLinks currentCity={this.props.currentCity} currentPlayer={this.props.currentPlayer} />
                {(researchStationLinks.length > 0 && this.props.currentCity.researchStation) && 
                    <div>
                        <h5>Fly to another research station:</h5>
                        <ul>{researchStationLinks}</ul>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        adjacentCities: state.adjacentCitiesReducer,
        currentPlayer: state.currentPlayerReducer,
        hand: state.currentHandReducer.filter( card => card.type === 'city'),
        researchStationCities: state.researchStationCitiesReducer,
        currentCity: state.citiesReducer.find( city => city.name === state.currentPlayerReducer.currentCity)
    }
}

export default connect(mapStateToProps)(MovesList)