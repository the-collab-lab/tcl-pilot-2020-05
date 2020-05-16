import React from 'react';
import Pins from './Pins';


const fetchNearbyPlacesPromise = (lat, lng) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        let url = `https://segdeha.com/api/nearby.php?lat=${lat}&lng=${lng}`

        request.onload = () => {
            {this.status === 200? resolve(request.response) : reject(Error(request.statusText))}
        }
        request.open("GET", url, true);
        request.send();
    });
}

async const fetchNearbyPlaces  = (lat, lng) => {
    response = await fetchNearbyPlacesPromise(lat,lng)
        .then(res => JSON.parse(res));
    print(response)
    
}


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

