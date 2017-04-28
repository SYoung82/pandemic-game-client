
import React, { Component } from 'react';
import { Map, TileLayer, Polyline } from 'react-leaflet';
import { paths } from '../constants/Paths'
import CityMarker from '../components/CityMarker'
import { connect } from 'react-redux'

class Board extends Component{
    state = {
        lat: 15,
        lng: 20,
        zoom: 2
    }

    render(){
        const position = [this.state.lat, this.state.lng];

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
                        <CityMarker city={city} key={city.name} />
                    )
                })}
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
        cities: state.citiesReducer
    }
}

export default connect(mapStateToProps)(Board)
