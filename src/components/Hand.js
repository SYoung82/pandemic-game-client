import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';

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
            border: 'solid',
            padding: 0,
            width: '10%',
            float: 'left',
            position: 'static'
        }
        var currentHand = this.props.hand

        return(
            <ul style={ulStyle} className={'card'}>
                {currentHand.map( (card, index) => {
                    return <li style={liStyle} key={card.name}><Card card={card} /></li> 
                })}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        hand: state.playersReducer.find(p => p.currentPlayer === true).hand
    }
}

export default connect(mapStateToProps)(Hand)