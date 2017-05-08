import React, { Component } from 'react'
import { checkTurnOver } from '../Game/Logic'
import { connect } from 'react-redux'
import { removeCube, 
         resetTurnCount, 
         nextPlayer, 
         drawPlayerCards, 
         setGamePhase,
         decrementTurnCount } from '../actions/ActionCreators'

class CureCubeLinks extends Component {
    handleCureCubeClick(e) {
        e.preventDefault()
        var player = this.props.currentPlayer
        
        this.props.dispatch(removeCube(this.props.currentCity, e.target.id))

        if(checkTurnOver(this.props.currentPlayer)){
            this.props.dispatch(resetTurnCount(this.props.currentPlayer))
            this.props.dispatch(nextPlayer(this.props.currentPlayer))
            this.props.dispatch(drawPlayerCards(player, this.props.playerDeck))
            this.props.dispatch(setGamePhase('Draw'))
        } else {
            this.props.dispatch(decrementTurnCount(this.props.currentPlayer))
        }
    }

    render() {
        const blackCubeLink = this.props.cubes.black > 0 ? <li key={'black'}><a key={'black'} id={'black'} style={{color: 'white'}} href='#' onClick={this.handleCureCubeClick.bind(this)}>Black: Remove 1 of {this.props.cubes.black}</a></li> : null
        const blueCubeLink = this.props.cubes.blue > 0 ? <li key={'blue'}><a key={'blue'} id={'blue'} style={{color: 'white'}} href='#' onClick={this.handleCureCubeClick.bind(this)}>Blue: Remove 1 of {this.props.cubes.blue}</a></li> : null
        const redCubeLink = this.props.cubes.red > 0 ? <li key={'red'}><a key={'red'} id={'red'} style={{color: 'white'}} href='#' onClick={this.handleCureCubeClick.bind(this)}>Red: Remove 1 of {this.props.cubes.red}</a></li> : null
        const yellowCubeLink = this.props.cubes.yellow > 0 ? <li key={'yellow'}><a key={'yellow'} id={'yellow'} style={{color: 'white'}} href='#' onClick={this.handleCureCubeClick.bind(this)}>Yellow: Remove 1 of {this.props.cubes.yellow}</a></li> : null
        
        return(
        <div>
            {(blackCubeLink || blueCubeLink || redCubeLink || yellowCubeLink) &&    
                <h5>Cure disease cubes:</h5>
            }
                { blackCubeLink && blackCubeLink ? <ul>{blackCubeLink}</ul> : null }
                { blueCubeLink && blueCubeLink ? <ul>{blueCubeLink}</ul> : null }
                { redCubeLink && redCubeLink ? <ul>{redCubeLink}</ul> : null }
                { yellowCubeLink && yellowCubeLink ? <ul>{yellowCubeLink}</ul> : null }
        </div>
        )
    }
}

export default connect()(CureCubeLinks)