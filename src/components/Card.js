import React, { Component } from 'react';

export default class Card extends Component{
    constructor(props){
        super(props);

        this.state = {
            card: this.props.card
        }
    }
    render() {
        debugger;
        return(
            <div>Card</div>
        )
    }
}