import React, {useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pins';
import fetchNearbyPlaces from '../lib/fetchNearbyPlaces';

const Map = ({nearbyPlaces, setNearbyPlaces, setCurrentPin, setDisplayInformation}) => {

    const defaultLocation = {
        center:{
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11

    };

    useEffect(()=> {
        fetchNearbyPlaces(defaultLocation.center.lat, defaultLocation.center.lng).then(res => setNearbyPlaces(res));
    }, []);
    
    return (
        <div style={{ height: 'calc(66.67vh - 1.25rem)', width: '100%' }}>
          <GoogleMapReact
            distanceToMouse={() => null }
            bootstrapURLKeys={{ key:'AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4'}}
            defaultCenter={defaultLocation.center}
            defaultZoom={defaultLocation.zoom}
            >
            {nearbyPlaces && (nearbyPlaces.map(
                    (place, index) => <Pin key={place.index} lat={place.latitude} lng={place.longitude} image={place.image} place={place} setCurrentPin={setCurrentPin} setDisplayInformation={setDisplayInformation}/>))
            }
            </GoogleMapReact> 
        </div>
    )
    
}
export default Map;