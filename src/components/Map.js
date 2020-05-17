import React, {useContext} from 'react';
import GoogleMapReact from 'google-map-react';
import MyLocation from './MyLocation';
import LocationContext  from './LocationContext'

function Map(){
    
    const contextData=useContext(LocationContext)
    console.log('location context:', contextData)
    return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4'}}
            defaultCenter={contextData.center}
            defaultZoom={contextData.zoom}
            >
            <MyLocation/>
            </GoogleMapReact> 
            
        </div>
    )
    
}
export default Map
