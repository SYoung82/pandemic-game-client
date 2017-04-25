import React, { Component } from 'react';
import Player from '../components/Player';
import { connect } from 'react-redux';

class CurrentPlayerContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            player: props.players.find(p => p.currentPlayer === true)                  
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

function mapStateToProps(state) {
    debugger;
    return {
        player: state.playersReducer.find(p => p.currentPlayer === true)
    }
}

export default connect(mapStateToProps)(CurrentPlayerContainer)
