import React, { Component } from 'react';
import { Marker, CircleMarker } from 'react-leaflet';
import { divIcon, Icon } from 'leaflet'
import { Popup } from 'react-leaflet';
import update from 'react-addons-update';
import { connect } from 'react-redux';

class CityMarker extends Component{
    handleClick(e) {
        console.log(`Clicked ${this.props.city.name}`);
    }

    dispatchUpdate() {
        this.props.dispatch({
            type: 'UPDATE_CITY',
            city: this.props.city
        })
    }

    addRedCube(){
        this.setState(update(this.props.city, {
            cubes: {red: {$set: this.props.city.cubes.red+1}}
        }))
        this.dispatchUpdate();
    }

    addBlackCube(){
        this.setState(update(this.props.city, {
            cubes: {black: {$set: this.props.city.cubes.black+1}}
        }))
        this.dispatchUpdate();
    }

    addYellowCube(){
        this.setState(update(this.props.city, {
            cubes: {yellow: {$set: this.props.city.cubes.yellow+1}}
        }))
        this.dispatchUpdate();
    }

    addBlueCube(){
        this.setState(update(this.props.city, {
            cubes: {blue: {$set: this.props.city.cubes.blue+1}}
        }))
        this.dispatchUpdate();
    }

    render(){
        var playersPresent = []

        this.props.players.forEach( player => {
            if(this.props.city.name === player.currentCity) {
                playersPresent.push(player.role)
            }
        })
        
        var icon
        if(this.props.city.researchStation){
            icon = new Icon({iconUrl: 'https://images.vexels.com/media/users/3/140527/isolated/preview/449b95d58f554656b159dd3ca21ab123-home-round-icon-by-vexels.png',
                             iconSize: [20,20]   
                        })  
        } else {
            icon = new divIcon({className: `${this.props.city.color}`})
        }

        return(
            <div>
                <Marker position={[this.props.city.lat, this.props.city.lng]} 
                        key={this.props.city.name} 
                        icon={icon}
                        dragging={false}
                        onClick={this.handleClick.bind(this)}>
                    <Popup className={this.props.city.color}>
                        <span className={this.props.city.color}>{this.props.city.name}<br />
                            Black Cubes: {this.props.city.cubes.black}<br />
                            Red Cubes: {this.props.city.cubes.red}<br />
                            Blue Cubes: {this.props.city.cubes.blue}<br />
                            Yellow Cubes: {this.props.city.cubes.yellow}<br />
                        </span>
                    </Popup>
                </Marker>
                {this.props.city.cubes.black === 0 ? null : <CircleMarker center={[this.props.city.lat-5, this.props.city.lng-5]} color='black' radius={this.props.city.cubes.black * 10} />}
                {this.props.city.cubes.red === 0 ? null :<CircleMarker center={[this.props.city.lat, this.props.city.lng]} color='red' radius={this.props.city.cubes.red * 10} />}
                {this.props.city.cubes.yellow === 0 ? null :<CircleMarker center={[this.props.city.lat-5, this.props.city.lng+5]} color='yellow' radius={this.props.city.cubes.yellow * 10} />}
                {this.props.city.cubes.blue === 0 ? null :<CircleMarker center={[this.props.city.lat+5, this.props.city.lng]} color='blue' radius={this.props.city.cubes.blue * 10} />}
            </div>  
        )
    }
}

export default connect()(CityMarker)