import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export class GMapContainer extends Component {

    render() {
        const GoogleMapDir = withGoogleMap((props) =>  //https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb 11.6.18
            <GoogleMap
                defaultCenter = { { lat: 40.8250585, lng: -73.9476404 } }
                defaultZoom = { 14 }
            >
            {this.props.places.map(function(place, index){
                return (
                    <Marker
                        key= { place.id }
                        name= { place.name }
                        position= {{lat: place.lat, lng: place.lon}}
                        key= { index }
                    />
                )
            })}
            </GoogleMap>
        );
        return (
            <div className='map-container__content'>
                <GoogleMapDir
                    containerElement= { <div style={{ height: '100%', width: '100%' }}/> }
                    mapElement= { <div style={{ height: '100%' }} /> }
                />
            </div>
        );
        
    }
}

export default GMapContainer