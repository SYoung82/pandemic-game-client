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
            padding: 0,
            display: "inline-block", /*needed so that bottom border clears floats*/
            width: "100%"
        }
        var liStyle = {
            width: '25%',
            float: 'left', 
        }
        var currentHand = this.state.hand
        return(
            <ul style={ulStyle} className={'card'}>
                {currentHand.map( (card, index) => {
                    return <li style={liStyle} key={index}><Card card={card} /></li> 
                })}
            </ul>
        )
    }
}