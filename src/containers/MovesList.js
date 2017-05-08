import React, { Component } from 'react'
import { connect } from 'react-redux'
import CureCubeLinks from '../components/CureCubeLinks'
import AdjacentCityLinks from '../components/AdjacentCityLinks'
import FlyToCityLinks from '../components/FlyToCityLinks'
import ResearchStationLinks from '../components/ResearchStationLinks'
import BuildResearchStationLink from '../components/BuildResearchStationLink'
import CureDiseaseLinks from '../components/CureDiseaseLinks.js'

class MovesList extends Component {
    render() { 
        return (
            <div>
                <h2>Current City: {this.props.currentPlayer.currentCity}</h2>
                {this.props.currentCity.researchStation ? <h4>{"Research Station: ✓"}</h4> : null}
                <h3>Moves Left: {this.props.currentPlayer.movesLeft}</h3>
                <CureDiseaseLinks currentPlayer={this.props.currentPlayer} currentCity={this.props.currentCity} hand={this.props.currentPlayer.hand} gameStatus={this.props.gameStatus} playerDeck={this.props.playerDeck} />
                <CureCubeLinks cubes={this.props.currentCity.cubes} currentCity={this.props.currentCity} currentPlayer={this.props.currentPlayer} playerDeck={this.props.playerDeck} />
                <AdjacentCityLinks adjacentCities={this.props.currentCity.adjacentCities} currentPlayer={this.props.currentPlayer} playerDeck={this.props.playerDeck} />
                <FlyToCityLinks currentPlayer={this.props.currentPlayer} hand={this.props.currentPlayer.hand} playerDeck={this.props.playerDeck} />
                <ResearchStationLinks researchStationCities={this.props.researchStationCities} currentPlayer={this.props.currentPlayer} currentCity={this.props.currentCity} playerDeck={this.props.playerDeck} />
                <BuildResearchStationLink currentPlayer={this.props.currentPlayer} currentCity={this.props.currentCity} playerDeck={this.props.playerDeck} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        adjacentCities: state.adjacentCitiesReducer,
        currentPlayer: state.playersReducer.find( player => player.currentPlayer === true),
        researchStationCities: state.researchStationCitiesReducer,
        currentCity: state.citiesReducer.find( city => city.name === state.playersReducer.find(player => player.currentPlayer === true).currentCity),
        playerDeck: state.playerDeckReducer,
        gameStatus: state.gameStatusReducer
    }
}

export default connect(mapStateToProps)(MovesList)