import React, { Component } from 'react'
import { connect } from 'react-redux'

class MovesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adjacentCities: this.props.adjacentCities
        }
    }

    render() {
        const listItems = this.props.adjacentCities.map( city => <li key={city}>{city}</li>)
        return (
            <div>
                <h3>Adjacent Cities:</h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        adjacentCities: state.adjacentCitiesReducer
    }
}

export default connect(mapStateToProps)(MovesList)