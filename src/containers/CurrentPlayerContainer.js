import React, { Component } from 'react';
import Player from '../components/Player'

export default class CurrentPlayerContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            player: this.props.players.find( player => {
                        if(player.currentPlayer === true) {
                            return player
                        }
                        return null;   
                     })                  
        }
    }
    
    render() {
        return (
            <Player player={this.state.player} />
        );
    }
}
