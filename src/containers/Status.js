import React, { Component } from 'react'
import { connect } from 'react-redux'
import DiseaseStatus from '../components/DiseaseStatus'

class Status extends Component {
    render() {
        return(
            <div>
                <DiseaseStatus gameStatus={this.props.gameStatus} />
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