import React, { Component } from 'react'
import { checkTurnOver } from '../Game/Logic'
import { connect } from 'react-redux'
import { movePlayer, drawPlayerCards, decrementTurnCount } from '../actions/ActionCreators'

class ResearchStationLinks extends Component {
    handleOtherStationsClick(e) {
        e.preventDefault()
        
        this.props.dispatch(movePlayer(e.target.innerText, this.props.currentPlayer))

        if(checkTurnOver(this.props.currentPlayer)){
            this.props.dispatch(drawPlayerCards(this.props.currentPlayer, this.props.playerDeck))
        } else {
            this.props.dispatch(decrementTurnCount(this.props.currentPlayer))
        }
    }

    render() {
        const researchStationLinks = this.props.researchStationCities.filter( city => city.name !== this.props.currentPlayer.currentCity ).map( city => 
            <li key={city.name}><a key={city.name} style={{color: 'white'}} href={city.name} onClick={this.handleOtherStationsClick.bind(this)}>{city.name}</a></li>
        ) 

        return(
            researchStationLinks.length > 0 && this.props.currentCity.researchStation && 
                    <div>
                        <h5>Fly to another research station:</h5>
                        <ul>{researchStationLinks}</ul>
                    </div>
        )
    }
}

export default connect()(ResearchStationLinks)