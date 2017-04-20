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
        const style = {
            border: '0',
            padding: '0',
            backgroundColor: 'black' 
        }
        return (
            <div style={style}>
                <Player player={this.state.player} />
            </div>
        );
    }
}
