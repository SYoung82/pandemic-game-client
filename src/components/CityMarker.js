import React, { Component } from 'react';
import { Marker, CircleMarker } from 'react-leaflet';
import { divIcon } from 'leaflet'
import { Popup } from 'react-leaflet';
import update from 'react-addons-update';
import { connect } from 'react-redux';

class CityMarker extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: this.props.city.name,
            lat: this.props.city.lat,
            lng: this.props.city.lng,
            color: this.props.city.color,
            players: this.props.city.players,
            cubes: this.props.city.cubes,
            adjacentCities: this.props.city.adjacentCities
        }

    }

    handleClick(e) {
        console.log(`Clicked ${this.state.name}`);
    }

    dispatchUpdate() {
        this.props.dispatch({
            type: 'UPDATE_CITY',
            city: this.state
        })
    }

    addRedCube(){
        this.setState(update(this.state, {
            cubes: {red: {$set: this.state.cubes.red+1}}
        }))
        this.dispatchUpdate();
    }

    addBlackCube(){
        this.setState(update(this.state, {
            cubes: {black: {$set: this.state.cubes.black+1}}
        }))
        this.dispatchUpdate();
    }

    addYellowCube(){
        this.setState(update(this.state, {
            cubes: {yellow: {$set: this.state.cubes.yellow+1}}
        }))
        this.dispatchUpdate();
    }

    addBlueCube(){
        this.setState(update(this.state, {
            cubes: {blue: {$set: this.state.cubes.blue+1}}
        }))
        this.dispatchUpdate();
    }

    render(){
        console.log(this.state.cubes.black)

        return(
            <div>
                <Marker position={[this.state.lat, this.state.lng]} 
                        key={this.state.name} 
                        icon={divIcon({className: `${this.state.color}`})}
                        dragging={false}
                        onClick={this.handleClick.bind(this)}>
                    <Popup className={this.state.color}>
                        <span className={this.state.color}>{this.state.name}<br />
                            Black Cubes: {this.state.cubes.black}<br />
                            Red Cubes: {this.state.cubes.red}<br />
                            Blue Cubes: {this.state.cubes.blue}<br />
                            Yellow Cubes: {this.state.cubes.yellow}<br />
                            Players: {this.props.city.players ? this.props.city.players.join(", ") : 'None'}
                        </span>
                    </Popup>
                </Marker>
                {this.state.cubes.black === 0 ? null : <CircleMarker center={[this.state.lat-5, this.state.lng-5]} color='black' radius={this.state.cubes.black * 10} />}
                {this.state.cubes.red === 0 ? null :<CircleMarker center={[this.state.lat, this.state.lng]} color='red' radius={this.state.cubes.red * 10} />}
                {this.state.cubes.yellow === 0 ? null :<CircleMarker center={[this.state.lat-5, this.state.lng+5]} color='yellow' radius={this.state.cubes.yellow * 10} />}
                {this.state.cubes.blue === 0 ? null :<CircleMarker center={[this.state.lat+5, this.state.lng]} color='blue' radius={this.state.cubes.blue * 10} />}
            </div>  
        )
    }
}

function mapStateToProps(state, wrapperProps) {
    return {
        city: state.citiesReducer.find(city => city.name === wrapperProps.city.name)
    }
}

export default connect(mapStateToProps)(CityMarker)