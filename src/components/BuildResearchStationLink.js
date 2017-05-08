import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkTurnOver } from '../Game/Logic'
import { buildResearchStation,
         discard,
         resetTurnCount,
         nextPlayer,
         drawPlayerCards,
         setGamePhase,
         decrementTurnCount } from '../actions/ActionCreators'

class BuildResearchStationLink extends Component {
    handleBuildResearchStationLinkClick(e) {
        e.preventDefault()
        var player = this.props.currentPlayer

        this.props.dispatch(buildResearchStation(this.props.currentCity, this.props.currentPlayer))
        this.props.dispatch(discard(this.props.currentPlayer, e.target.innerText))

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
        var cityLink = null
        this.props.currentPlayer.hand.forEach( card => {
            if(card.name === this.props.currentCity.name && this.props.currentCity.researchStation === false) {
                cityLink = <li key={card.name}><a key={card.name} style={{color: 'white'}} href='#' onClick={this.handleBuildResearchStationLinkClick.bind(this)}>{card.name}</a></li>
            }
        })
        
        return(
            cityLink &&
            <div>
                <h5>Build research station here:(Costs that city card)</h5>
                <ul>{cityLink}</ul>
            </div>
        )
    }
}

export default connect()(BuildResearchStationLink)