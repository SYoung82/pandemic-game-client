import React, { Component } from 'react'
import { connect } from 'react-redux'
import CureCubeLinks from '../components/CureCubeLinks'
import AdjacentCityLinks from '../components/AdjacentCityLinks'
import FlyToCityLinks from '../components/FlyToCityLinks'
import ResearchStationLinks from '../components/ResearchStationLinks'
import BuildResearchStationLink from '../components/BuildResearchStationLink'
import CureDiseaseLinks from '../components/CureDiseaseLinks'

class MovesList extends Component {
    render() { 
        if(this.props.gameStatus.phase === 'Move') {
                return (
                <div>
                    <h2>Current City: {this.props.currentPlayer.currentCity}</h2>
                    {this.props.currentCity.researchStation ? <h4>{"Research Station: ✓"}</h4> : null}
                    <h3>Moves Left: {this.props.currentPlayer.movesLeft}</h3>
                    <CureDiseaseLinks 
                        currentPlayer={this.props.currentPlayer} 
                        currentCity={this.props.currentCity} 
                        hand={this.props.currentPlayer.hand}  
                        playerDeck={this.props.playerDeck}
                        infectionDeck={this.props.infectionDeck}
                        gameStatus={this.props.gameStatus} />
                    <CureCubeLinks 
                        cubes={this.props.currentCity.cubes} 
                        currentCity={this.props.currentCity} 
                        currentPlayer={this.props.currentPlayer} 
                        playerDeck={this.props.playerDeck}
                        infectionDeck={this.props.infectionDeck}
                        gameStatus={this.props.gameStatus} />
                    <AdjacentCityLinks 
                        adjacentCities={this.props.currentCity.adjacentCities} 
                        currentPlayer={this.props.currentPlayer} 
                        playerDeck={this.props.playerDeck} 
                        infectionDeck={this.props.infectionDeck}
                        gameStatus={this.props.gameStatus} />
                    <FlyToCityLinks 
                        currentPlayer={this.props.currentPlayer} 
                        hand={this.props.currentPlayer.hand} 
                        playerDeck={this.props.playerDeck}
                        infectionDeck={this.props.infectionDeck}
                        gameStatus={this.props.gameStatus} />
                    <ResearchStationLinks 
                        researchStationCities={this.props.researchStationCities} 
                        currentPlayer={this.props.currentPlayer}
                        currentCity={this.props.currentCity} 
                        playerDeck={this.props.playerDeck}
                        infectionDeck={this.props.infectionDeck}
                        gameStatus={this.props.gameStatus} />
                    <BuildResearchStationLink 
                        currentPlayer={this.props.currentPlayer} 
                        currentCity={this.props.currentCity} 
                        playerDeck={this.props.playerDeck}
                        infectionDeck={this.props.infectionDeck}
                        gameStatus={this.props.gameStatus} />
                </div>
            )
        } else if(this.props.gameStatus.phase === 'Discard') {
            return <div><h2>Click {this.props.currentPlayer.hand.length - 7} card(s) to discard!</h2></div>
        } else if(this.props.gameStatus.phase === 'Epidemic' ) {
            return <div><h2>Click epidemic card(s) to continue with epidemic phase</h2></div>
        } else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return {
        adjacentCities: state.adjacentCitiesReducer,
        currentPlayer: state.playersReducer.find( player => player.currentPlayer === true),
        researchStationCities: state.researchStationCitiesReducer,
        currentCity: state.citiesReducer.find( city => city.name === state.playersReducer.find(player => player.currentPlayer === true).currentCity),
        playerDeck: state.playerDeckReducer,
        infectionDeck: state.infectionDeckReducer,
        gameStatus: state.gameStatusReducer
    }
}

export default connect(mapStateToProps)(MovesList)