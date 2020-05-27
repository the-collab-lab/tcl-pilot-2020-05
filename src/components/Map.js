import React, {useEffect} from 'react';
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
            bootstrapURLKeys={{ key:'AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4'}}
            defaultCenter={defaultLocation.center}
            defaultZoom={defaultLocation.zoom}
            options={{clickableIcons: false}}
            >
            {nearbyPlaces && (nearbyPlaces.map(
                    (place) => <Pin {...place} place={place} lat={place.latitude} lng ={place.longitude} 
                    img ={place.image} setCurrentPin ={setCurrentPin} setDisplayInformation={setDisplayInformation}/>))
}
            </GoogleMapReact> 
        </div>
    )
            }

export default Map;