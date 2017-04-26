import React, { Component } from 'react';
import Player from '../components/Player';
import { connect } from 'react-redux';

class CurrentPlayerContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            players: props.players                  
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
                <Player player={this.state.players.find(p => p.currentPlayer === true)} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        players: state.playersReducer
    }
}

export default connect(mapStateToProps)(CurrentPlayerContainer)
