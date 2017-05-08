import React, { Component } from 'react'
import { connect } from 'react-redux'

class CureDiseaseLinks extends Component {
    onCureDiseaseClick(e) {
        e.preventDefault()

        const color = e.target.innerText.toLowerCase()

    }

    render() {
        const numBlackCards = this.props.currentPlayer.hand.filter( card => card.color === 'black' ).length
        const numRedCards = this.props.currentPlayer.hand.filter(card => card.color === 'red').length
        const numBlueCards = this.props.currentPlayer.hand.filter(card => card.color === 'blue').length
        const numYellowCards = this.props.currentPlayer.hand.filter(card => card.color === 'yellow').length 

        if(numBlackCards >= 5 && this.props.currentCity.researchStation) {
            return (
                <div>
                    <h5>Cure disease: (Costs 5 cards of disease color)</h5>
                    <ul>
                        <li key={'black'}>
                            <a key={'black'} style={{color: 'white'}} href='#' onClick={this.onCureDiseaseClick.bind(this)}>Black</a>
                        </li>
                    </ul>
                </div>
            )        
        }
        if(numRedCards >= 5 && this.props.currentCity.researchStation) {
            return (
                <div>
                    <h5>Cure disease: (Costs 5 cards of disease color)</h5>
                    <ul>
                        <li key={'red'}>
                            <a key={'red'} style={{color: 'white'}} href='#' onClick={this.onCureDiseaseClick.bind(this)}>Red</a>
                        </li>
                    </ul>
                </div>
            )
        }
        if(numBlueCards >= 5 && this.props.currentCity.researchStation) {
            return (
                <div>
                    <h5>Cure disease: (Costs 5 cards of disease color)</h5>
                    <ul>
                        <li key={'blue'}>
                            <a key={'blue'} style={{color: 'white'}} href='#' onClick={this.onCureDiseaseClick.bind(this)}>Blue</a>
                        </li>
                    </ul>
                </div>
            )
        }
        if(numYellowCards >= 5 && this.props.currentCity.researchStation) {
            return (
                <div>
                    <h5>Cure disease: (Costs 5 cards of disease color)</h5>
                    <ul>
                        <li key={'yellow'}>
                            <a key={'yellow'} style={{color: 'white'}} href='#' onClick={this.onCureDiseaseClick.bind(this)}>Yellow</a>
                        </li>
                    </ul>
                </div>
            )
        }
        return null
    }
}

export default connect()(CureDiseaseLinks)