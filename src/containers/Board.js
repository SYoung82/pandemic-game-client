
import React, { Component } from 'react';
import { Map, TileLayer, Polyline } from 'react-leaflet';;
import { cities } from '../constants/Cities'
import { paths } from '../constants/Paths'
import CityMarker from '../components/CityMarker'

export default class Board extends Component{
    state = {
        lat: 15,
        lng: 0,
        zoom: 2
    }

    render(){
        const position = [this.state.lat, this.state.lng];

        return(
            <Map center={position} zoom={this.state.zoom} zoomControl={false} dragging={false}>
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url='http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                    tileSize={512}
                    zoomOffset={-1}
                    minZoom={this.state.zoom}
                    maxZoom={this.state.zoom}
                />
                {cities.map( (city) => {
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
