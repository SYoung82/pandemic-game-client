import React, { Component } from 'react';
import Player from '../components/Player';
import { connect } from 'react-redux';

class CurrentPlayerContainer extends Component{ 
    render() {
        const style = {
            border: '0',
            padding: '0',
            backgroundColor: 'black' 
        }
        return (
            <div style={style}>
                <Player player={this.props.player} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        player: state.currentPlayerReducer,
        hand: state.currentHandReducer
    }
}

export default connect(mapStateToProps)(CurrentPlayerContainer)
