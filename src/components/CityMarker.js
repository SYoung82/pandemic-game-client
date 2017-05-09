import React, { Component } from 'react'
import { Marker, CircleMarker, Popup } from 'react-leaflet'
import { divIcon, Icon } from 'leaflet'
import { connect } from 'react-redux'
import researchStationIcon from '../images/research-station.png'

class CityMarker extends Component{
    handleClick(e) {
        console.log(`Clicked ${this.props.city.name}`);
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
            icon = new Icon({iconUrl: researchStationIcon,
                             iconSize: [20,20]   
                        })  
        } else {
            icon = new divIcon({className: `${this.props.city.color}`, iconSize: [20,20]})
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