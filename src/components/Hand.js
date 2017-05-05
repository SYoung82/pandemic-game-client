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
            padding: 5,
            float: 'left',
            position: 'static',
            width: '100px',
            whiteSpace: 'pre-line'
        }
        var currentHand = this.props.hand

        return(
            <ul style={ulStyle} className={'card'}>
                {currentHand.map( (card, index) => {
                    return <li style={liStyle} key={index}><Card card={card} /></li> 
                })}
            </ul>
        )
    }
}

export default connect()(Hand)