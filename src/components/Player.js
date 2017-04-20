import React, { Component } from 'react';

export default class Player extends Component{
    render() {
        debugger;
        return(
            <div>
                <h3>Current Player: {this.props.player.role}</h3>
                <p>Current City: {this.props.player.currentCity}</p>
            </div>
        )
    }
}