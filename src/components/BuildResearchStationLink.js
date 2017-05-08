import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkTurnOver } from '../Game/Logic'
import { buildResearchStation, discard, getTurnOverActions, decrementTurnCount } from '../actions/ActionCreators'

class BuildResearchStationLink extends Component {
    handleBuildResearchStationLinkClick(e) {
        e.preventDefault()

        this.props.dispatch(buildResearchStation(this.props.currentCity, this.props.currentPlayer))
        this.props.dispatch(discard(this.props.currentPlayer, e.target.innerText))

        if(checkTurnOver(this.props.currentPlayer)){
            const actions = getTurnOverActions(this.props.currentPlayer, this.props.playerDeck, 'Draw')
            actions.forEach( action => {
                this.props.dispatch(action)
            })
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