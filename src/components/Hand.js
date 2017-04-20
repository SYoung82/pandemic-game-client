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