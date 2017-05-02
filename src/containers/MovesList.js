import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkTurnOver } from '../Game/Logic'
import { cities } from '../constants/Cities'

class MovesList extends Component {
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

    handleFlyToCityClick(e) {
        e.preventDefault();

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

    handleCureCubeClick(e) {
        e.preventDefault()

        this.props.dispatch({
            type: 'REMOVE_CUBE',
            currentCity: this.props.currentPlayer.currentCity,
            color: e.target.id
        })
    }


    render() {
        const CITIES = cities
        const moveToCities = this.props.adjacentCities.map( city => 
            <li key={city}><a key={city} style={{color: 'white'}} href='#' onClick={this.handleAdjacentCityClick.bind(this)}>{city}</a></li>
        )

        const flyToCities = this.props.hand.map( card => 
            <li key={card.name}><a key={card.name} style={{color: 'white'}} href='#' onClick={this.handleFlyToCityClick.bind(this)}>{card.name}</a></li>  
        )

        const cubeCount = CITIES.find( city => city.name === this.props.currentPlayer.currentCity ).cubes
        const blackCubeLink = cubeCount.black > 0 ? <li key={'black'}><a key={'black'} id={'black'} style={{color: 'white'}} href='#' onClick={this.handleCureCubeClick.bind(this)}>Black: Remove 1 of {cubeCount.black}</a></li> : null
        const blueCubeLink = cubeCount.blue > 0 ? <li key={'blue'}><a key={'blue'} id={'blue'} style={{color: 'white'}} href='#' onClick={this.handleCureCubeClick.bind(this)}>Blue: Remove 1 of {cubeCount.blue}</a></li> : null
        const redCubeLink = cubeCount.red > 0 ? <li key={'red'}><a key={'red'} id={'red'} style={{color: 'white'}} href='#' onClick={this.handleCureCubeClick.bind(this)}>Red: Remove 1 of {cubeCount.red}</a></li> : null
        const yellowCubeLink = cubeCount.yellow > 0 ? <li key={'yellow'}><a key={'yellow'} id={'yellow'} style={{color: 'white'}} href='#' onClick={this.handleCureCubeClick.bind(this)}>Yellow: Remove 1 of {cubeCount.yellow}</a></li> : null
        
        const researchStation = cities.find( city => city.name === this.props.currentPlayer.currentCity ).researchStation
        
        return (
            <div>
                <h2>Current City: {this.props.currentPlayer.currentCity}</h2>
                <h3>Moves Left: {this.props.currentPlayer.movesLeft}</h3>
                <h5>Move to adjacent city: </h5>
                    <ul>{moveToCities}</ul>
                <h5>Fly to: (Costs that city card)</h5>
                    <ul>{flyToCities}</ul>
                <h5>Cure disease cubes:</h5>
                    {blackCubeLink ? <ul>{blackCubeLink}</ul> : null}
                    {blueCubeLink ? <ul>{blueCubeLink}</ul> : null}
                    {redCubeLink ? <ul>{redCubeLink}</ul> : null}
                    {yellowCubeLink ? <ul>{yellowCubeLink}</ul> : null}
                    {!blackCubeLink && !blueCubeLink && !redCubeLink && !yellowCubeLink ? <ul>No curable disease cubes</ul> : null}
                {researchStation && 
                    <h5>researchStation here!</h5>
                }
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