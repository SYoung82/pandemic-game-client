import React, { Component } from 'react'
import { connect } from 'react-redux'

class DiseaseStatus extends Component {
    render() {
        return(
            <div>
                Black: {this.props.diseaseStatus.black}, Blue: {this.props.diseaseStatus.blue}, Red: {this.props.diseaseStatus.red}, Yellow: {this.props.diseaseStatus.yellow}
            </div>
        )
    }
}

export default connect()(DiseaseStatus)