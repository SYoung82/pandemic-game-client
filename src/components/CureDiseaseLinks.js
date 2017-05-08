import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkTurnOver } from '../Game/Logic'

class CureDiseaseLinks extends Component {
    onCureDiseaseClick(e) {
        e.preventDefault()

        const color = e.target.innerText.toLowerCase()
        const player = this.props.currentPlayer

        this.props.dispatch({
            type: 'CURE_DISEASE',
            color: color,
            currentPlayer: this.props.currentPlayer
        })

        for(let i=0; i<5; i++) {
            debugger
            this.props.dispatch({
                type: 'DISCARD',
                currentPlayer: this.props.currentPlayer,
                card: this.props.currentPlayer.hand.find( card => card.color === color).name
            })
        }

        if(checkTurnOver(this.props.currentPlayer)){
            this.props.dispatch({
                type: 'RESET_TURN_COUNT',
                currentPlayer: this.props.currentPlayer
            })

            this.props.dispatch({
                type: 'NEXT_PLAYER',
                currentPlayer: this.props.currentPlayer
            })

            this.props.dispatch({
                type: 'DRAW_PLAYER_CARDS',
                currentPlayer: player,
                cards: this.props.playerDeck.slice(0,2)
            })
        } else {
            this.props.dispatch({
                type: 'DECREMENT_TURN_COUNT',
                currentPlayer: this.props.currentPlayer
            })
        }

    }

    render() {
        const numBlackCards = this.props.currentPlayer.hand.filter( card => card.color === 'black' ).length
        const numRedCards = this.props.currentPlayer.hand.filter(card => card.color === 'red').length
        const numBlueCards = this.props.currentPlayer.hand.filter(card => card.color === 'blue').length
        const numYellowCards = this.props.currentPlayer.hand.filter(card => card.color === 'yellow').length 

        if(numBlackCards >= 5 && this.props.currentCity.researchStation && this.props.diseaseStatus.black === 'uncured') {
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
        if(numRedCards >= 5 && this.props.currentCity.researchStation && this.props.diseaseStatus.red === 'uncured') {
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
        if(numBlueCards >= 5 && this.props.currentCity.researchStation && this.props.diseaseStatus.blue === 'uncured') {
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
        if(numYellowCards >= 5 && this.props.currentCity.researchStation && this.props.diseaseStatus.yellow === 'uncured') {
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