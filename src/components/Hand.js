import React, { Component } from 'react';
import Card from '../components/Card'

export default class Hand extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            hand: this.props.hand
        }
    }
    render() {
        var ulStyle = {
            listStyleType: 'none',
            padding: 0,
            display: "inline-block", /*needed so that bottom border clears floats*/
            width: "100%"
        }
        var liStyle = {
            border: 'solid',
            width: '13%',
            float: 'left', 
        }
        var currentHand = this.state.hand

        return(
            <ul style={ulStyle} className={'card'}>
                {currentHand.map( (card, index) => {
                    liStyle.backgroundColor = card.color
                    return <li style={liStyle} key={index}><Card card={card} /></li> 
                })}
            </ul>
        )
    }
}