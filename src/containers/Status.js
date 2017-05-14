import React, { Component } from 'react'
import { connect } from 'react-redux'
import GamePhase from '../components/GamePhase'
import { getLatestSave } from '../actions/ActionCreators'

class Status extends Component {
    onGetLastSaveClick(e) {
        console.log('Get save clicked')
        this.props.dispatch(getLatestSave(this.props.gameStatus.id, this.props.gameStatus.token))      
    }

    render() {
        return(
            <div>
                <button onClick={this.onGetLastSaveClick.bind(this)} >Get Last Save</button>
                <GamePhase gameStatus={this.props.gameStatus} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        gameStatus: state.gameStatusReducer
    }
}

export default connect(mapStateToProps)(Status)