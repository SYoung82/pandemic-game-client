import React, { Component } from 'react'
import Card from '../components/Card'
import { connect } from 'react-redux'

class Hand extends Component{
    render() {
        var ulStyle = {
            backgroundColor: 'black',
            listStyleType: 'none',
            padding: 0,
            display: "inline-block", /*needed so that bottom border clears floats*/
            width: "100%"
        }
        var liStyle = {
            padding: 5,
            float: 'left',
            position: 'static',
            width: '100px',
            whiteSpace: 'pre-line'
        }
        var currentHand = this.props.hand.sort( (a,b) => {
            if(a.color === 'green' || b.color === 'green') return 1;
            if(a.color < b.color) return -1;
            if(a.color > b.color) return 1;
            return 0
        })

        return(
            <ul style={ulStyle} className={'card'}>
                {currentHand.map( (card, index) => {
                    return <li style={liStyle} key={index}><Card card={card} player={this.props.player} playerDeck={this.props.playerDeck} infectionDeck={this.props.infectionDeck} gameStatus={this.props.gameStatus} /></li> 
                })}
            </ul>
        )
    }
}

export default connect()(Hand)