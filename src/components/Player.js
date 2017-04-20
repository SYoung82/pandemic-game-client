import React, { Component } from 'react';
import Hand from '../components/Hand';

export default class Player extends Component{
    render() {
        return(
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <h3>Current Player: {this.props.player.role}</h3>
                </div>
                <div className={'hand'} style={{flex: 1}}>
                    <Hand hand={this.props.player.hand}/>
                </div>
                <div style={{flex: 1}}>
                    <p>Current City: {this.props.player.currentCity}</p>
                </div>
            </div>
        )
    }
}