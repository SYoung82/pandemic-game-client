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
        var currentHand = this.state.hand
        return(
            <ul className={'card'}>
                {currentHand.map( (card, index) => {
                    return <Card key={index} card={card} /> 
                })}
            </ul>
        )
    }
}