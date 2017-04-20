import React, { Component } from 'react';

export default class Player extends Component{
    render() {
        debugger;
        return(
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <h3>Current Player: {this.props.player.role}</h3>
                </div>
                <div style={{flex: 1}}>
                    <p>Current City: {this.props.player.currentCity}</p>
                </div>
            </div>
        )
    }
}