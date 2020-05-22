import React, {useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pins';
import fetchNearbyPlaces from '../lib/fetchNearbyPlaces';

function Map(){
    const [nearbyPlaces, setNearbyPlaces] = useState([]);

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
            bootstrapURLKeys={{ key:'AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4'}}
            defaultCenter={defaultLocation.center}
            defaultZoom={defaultLocation.zoom}
            >
            {nearbyPlaces && (nearbyPlaces.map(
                    ({latitude,longitude,title,description,image}, index) => <Pin key={index} lat={latitude} lng={longitude} title={title} description={description} image={image} />))
            }
            </GoogleMapReact> 
        </div>
    )
    
}
export default Map;