import React, { Component } from 'react'
import { connect } from 'react-redux'
import DiseaseStatus from '../components/DiseaseStatus'

class Status extends Component {
    render() {
        return(
            <div>
                <DiseaseStatus diseaseStatus={this.props.diseaseStatus} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        diseaseStatus: state.diseaseStatusReducer
    }
}

export default connect(mapStateToProps)(Status)