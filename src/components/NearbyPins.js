import React from 'react';
import Pins from './Pins';


// Looks for all nearby places, generates a list, and maps child Pin components for each place

export default NearbyPins = ({lat, lng}) => {
    let output = []
    console.log(fetchNearbyPlaces(lat,lng));
    return (
        <React.Fragment>
            {output.map((place, index) => <Pin key={index} name={ } text={ } image={ } />)}
        </ React.Fragment>
    )

}

