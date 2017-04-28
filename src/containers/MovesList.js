import React, { Component } from 'react'
import { connect } from 'react-redux'

class MovesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adjacentCities: this.props.adjacentCities
        }
    }

    handleAdjacentCityClick(e) {
        e.preventDefault();
        console.log('City ' + e.target.innerText + ' clicked in AdjacentCities list' );
    }

    render() {
        const listItems = this.props.adjacentCities.map( city => 
            <li key={city}><a key={city} style={{color: 'white'}} href='#' onClick={this.handleAdjacentCityClick.bind(this)}>Move to {city}</a></li>
        )

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