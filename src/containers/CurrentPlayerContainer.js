import React, { Component } from 'react';

export default class CurrentPlayerContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            player: this.props.players.find( player => {
                
                        if(player.currentPlayer === true) {
                            return player
                        }   
                     })
        }
    }
    
    render() {
    return (
        <div>
            {this.state.player.role}
        </div>
    );
  }
}
