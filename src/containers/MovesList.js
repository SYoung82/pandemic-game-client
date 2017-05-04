import React, { Component } from 'react'
import { connect } from 'react-redux'
import CureCubeLinks from '../components/CureCubeLinks'
import AdjacentCityLinks from '../components/AdjacentCityLinks'
import FlyToCityLinks from '../components/FlyToCityLinks'
import ResearchStationLinks from '../components/ResearchStationLinks'

class MovesList extends Component {
    render() {
        return (
            <div>
                <h2>Current City: {this.props.currentPlayer.currentCity}</h2>
                {this.props.currentCity.researchStation ? <h4>{"Research Station: ✓"}</h4> : null}
                <h3>Moves Left: {this.props.currentPlayer.movesLeft}</h3>
                <CureCubeLinks cubes={this.props.currentCity.cubes} currentCity={this.props.currentCity} currentPlayer={this.props.currentPlayer} />
                <AdjacentCityLinks adjacentCities={this.props.adjacentCities} currentCity={this.props.currentCity} currentPlayer={this.props.currentPlayer} playerDeck={this.props.playerDeck} />
                <FlyToCityLinks currentCity={this.props.currentCity} currentPlayer={this.props.currentPlayer} />
                <ResearchStationLinks researchStationCities={this.props.researchStationCities} currentPlayer={this.props.currentPlayer} currentCity={this.props.currentCity} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        adjacentCities: state.citiesReducer.find( city => city.name === state.playersReducer.find( player => player.currentPlayer === true).currentCity).adjacentCities,
        currentPlayer: state.playersReducer.find( player => player.currentPlayer === true),
        researchStationCities: state.researchStationCitiesReducer,
        currentCity: state.citiesReducer.find( city => city.name === state.playersReducer.find(player => player.currentPlayer === true).currentCity),
        playerDeck: state.playerDeckReducer
    }
}

export default connect(mapStateToProps)(MovesList)