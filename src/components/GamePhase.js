import React, { Component } from 'react'
import { connect } from 'react-redux'

class GamePhase extends Component {
    render() {
        const blackStatus = this.props.gameStatus.black.charAt(0).toUpperCase()
        return(
            <div>
                Current Phase: {this.props.gameStatus.phase},
                 Black: {this.props.gameStatus.black},
                  Red: {this.props.gameStatus.red},
                   Blue: {this.props.gameStatus.blue},
                    Yellow: {this.props.gameStatus.yellow}
            </div>
        )
    }
}

export default connect()(GamePhase)