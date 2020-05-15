import React from 'react';
import GoogleMapReact from 'google-map-react';
import MyLocation from './MyLocation';

function Map(){
    const defaultLocation = {
        center:{
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11

    };
    return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4'}}
            defaultCenter={defaultLocation.center}
            defaultZoom={defaultLocation.zoom}
            >
            <MyLocation/>
            </GoogleMapReact> 
            
        </div>
    )
    
}
export default Map
