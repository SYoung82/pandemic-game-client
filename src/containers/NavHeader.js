import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveGame,getLatestSave, newGame, logout, getGames } from '../actions/ActionCreators'

class NavHeader extends Component {
    onSaveClick(e) {
        this.props.dispatch(saveGame(this.props.gameStatus.id, this.props.gameStatus.token))
    }

    onLoadClick(e) {
        this.props.dispatch(getLatestSave(this.props.gameStatus.id, this.props.gameStatus.token))
    }

    onNewClick(e) {
        this.props.dispatch(newGame())
    }

    onLogoutClick(e) {
        this.props.dispatch(logout())
    }

    onGetGamesClick(e) {
        this.props.dispatch(getGames(this.props.gameStatus.id, this.props.gameStatus.token))
    }

    render() {
        return (
            <div className='nav-container' >
                <span>Welcome {this.props.gameStatus.user}&nbsp;</span>
                <button onClick={this.onSaveClick.bind(this)} >Save Game</button>
                <span>&nbsp;</span>
                <button onClick={this.onLoadClick.bind(this)} >Load Last Save</button>
                <span>&nbsp;</span>
                <button onClick={this.onNewClick.bind(this)} >New Game</button>
                <span>&nbsp;</span>
                <button onClick={this.onLogoutClick.bind(this)} >Logout</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameStatus: state.gameStatusReducer
    }
}

export default connect(mapStateToProps)(NavHeader)