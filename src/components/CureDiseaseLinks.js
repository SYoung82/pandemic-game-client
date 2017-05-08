import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkTurnOver } from '../Game/Logic'
import { cureDisease,
         discard,
         resetTurnCount, 
         nextPlayer, 
         drawPlayerCards,
         decrementTurnCount } from '../actions/ActionCreators'

class CureDiseaseLinks extends Component {
    onCureDiseaseClick(e) {
        e.preventDefault()

        const color = e.target.innerText.toLowerCase()
        const player = this.props.currentPlayer

        this.props.dispatch(cureDisease(color, this.props.currentPlayer))

        for(let i=0; i<5; i++) {
            this.props.dispatch(discard(this.props.currentPlayer, 
                                        this.props.currentPlayer.hand.find( card => card.color === color).name))
        }

        if(checkTurnOver(this.props.currentPlayer)){
            this.props.dispatch(resetTurnCount(this.props.currentPlayer))
            this.props.dispatch(nextPlayer(this.props.currentPlayer))
            this.props.dispatch(drawPlayerCards(player, this.props.playerDeck))
        } else {
            this.props.dispatch(decrementTurnCount(this.props.currentPlayer))
        }

    }

    render() {
        const numBlackCards = this.props.currentPlayer.hand.filter( card => card.color === 'black' ).length
        const numRedCards = this.props.currentPlayer.hand.filter(card => card.color === 'red').length
        const numBlueCards = this.props.currentPlayer.hand.filter(card => card.color === 'blue').length
        const numYellowCards = this.props.currentPlayer.hand.filter(card => card.color === 'yellow').length 

        if(numBlackCards >= 5 && this.props.currentCity.researchStation && this.props.gameStatus.black === 'uncured') {
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
        if(numRedCards >= 5 && this.props.currentCity.researchStation && this.props.gameStatus.red === 'uncured') {
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
        if(numBlueCards >= 5 && this.props.currentCity.researchStation && this.props.gameStatus.blue === 'uncured') {
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
        if(numYellowCards >= 5 && this.props.currentCity.researchStation && this.props.gameStatus.yellow === 'uncured') {
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
        if(!this.props.currentCity.researchStation && (numBlackCards >= 5 ||
                                                      numBlueCards >= 5 ||
                                                      numRedCards >= 5 ||
                                                      numYellowCards >= 5)){
                                                        return<div style={{color: 'red'}}>You have enough cards to cure a disease. Find a research station!</div>
        }
        return null
    }
}

export default connect()(CureDiseaseLinks)