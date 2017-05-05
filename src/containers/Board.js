
import React, { Component } from 'react';
import { Map, TileLayer, Polyline, Marker } from 'react-leaflet';
import { Icon } from 'leaflet'
import { paths } from '../constants/Paths'
import CityMarker from '../components/CityMarker'
import { connect } from 'react-redux'
import darkGreenPawn from '../images/dark-green-pawn.png'
import orangePawn from '../images/orange-pawn.png'

class Board extends Component{
    state = {
        lat: 15,
        lng: 20,
        zoom: 2
    }

    render(){
        const position = [this.state.lat, this.state.lng];
        var playerCities = []
        this.props.players.forEach( player => {
            if( player.color === 'orange' ) {
                playerCities.push([this.props.cities.find( city => city.name === player.currentCity), orangePawn])
            } else if ( player.color === 'dark-green') {
                playerCities.push([this.props.cities.find( city => city.name === player.currentCity), darkGreenPawn])
            }
        })

        return(
            <Map center={position} zoom={this.state.zoom} zoomControl={false} dragging={false}>
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                    tileSize={512}
                    zoomOffset={-1}
                    minZoom={this.state.zoom}
                    maxZoom={this.state.zoom}
                />

                {this.props.cities.map( (city) => {
                    return (
                        <CityMarker city={city} players={this.props.players} key={city.name} />
                    )
                })}

                {playerCities.map( (city, index) => {
                    return(
                        <Marker position={index % 2 === 0 ? [city[0].lat+(index+3), city[0].lng+(index+3)] : [city[0].lat+(index-3), city[0].lng+(index-3)]} 
                                key={index} 
                                icon={
                                    new Icon({iconUrl: city[1],
                                          iconSize: [25,25]   
                                    })
                                }
                                dragging={false}
                                zIndexOffset={1000} 
                        />
                    )
                })
                }

                {paths.map( (path, index) => {
                    return (
                        <Polyline key={index} color='black' positions={path} />
                    )
                })}    
            </Map>
        )
    }
}

function mapStateToProps(state) {
    return {
        cities: state.citiesReducer,
        players: state.playersReducer
    }
}

export default connect(mapStateToProps)(Board)
