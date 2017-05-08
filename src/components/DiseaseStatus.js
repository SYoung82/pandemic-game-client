import React, { Component } from 'react'
import { connect } from 'react-redux'

class DiseaseStatus extends Component {
    render() {
        return(
            <div>
                Black: {this.props.gameStatus.black}, Blue: {this.props.gameStatus.blue}, Red: {this.props.gameStatus.red}, Yellow: {this.props.gameStatus.yellow}
            </div>
        )
    }
}

export default connect()(DiseaseStatus)