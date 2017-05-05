import React, { Component } from 'react'
import { connect } from 'react-redux'

class BuildResearchStationLink extends Component {
    handleBuildResearchStationLinkClick(e) {
        e.preventDefault()
        
        console.log(e.target.innerText)
        this.props.dispatch({
            type: 'BUILD_RESEARCH_STATION',
            city: this.props.currentCity,
            currentPlayer: this.props.currentPlayer
        })

        this.props.dispatch({
            type: 'DISCARD',
            currentPlayer: this.props.currentPlayer,
            card: e.target.innerText
        })
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