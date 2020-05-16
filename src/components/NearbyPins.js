import React, { useEffect, useState } from 'react';
import Pin from './Pins';


//creates promise to fetch data
const fetchNearbyPlacesPromise = async (lat, lng) => {
    let url = `https://segdeha.com/api/nearby.php?lat=${lat}&lng=${lng}`
    let response = await fetch(url);

    let output;
    if(response.ok){
        output = await response.json();

    } else {
        console.log("Error" + response.status);
        output = { };
    }
    return output;
}

//executes the fetch, and formats data for consumption by Pin component
async function fetchNearbyPlaces(lat, lng) {
    let response = await fetchNearbyPlacesPromise(lat,lng)

    let output = [];
    if(response){
        const nearbyPlaces = await response.pages;
        output = await nearbyPlaces.map( (place) => {
            const lat = place.coordinates[0].lat
            const lon = place.coordinates[0].lon
            const description = place.description;
            const title = place.title;
            const image = place.thumbnail.source;
            const dict = {lat, lon, description, title, image};
            console.log(dict);
            return dict;
        });
        }
    // } else {
    // // might want to differentiate between error and no outputs in the future. Currently will render same thing.
    //     output = [];
    
   return output;
}

// Looks for all nearby places, generates a list, and maps child Pin components for each place

const NearbyPins = ({lat, lng}) => {
    const [nearbyPlaces, setNearbyPlaces] = useState([]);

    useEffect(() => {
        let fetchNearby = fetchNearbyPlaces(lat, lng);
        setNearbyPlaces(fetchNearby);
    }, [])

    return (
        <React.Fragment>
            {(nearbyPlaces.map(
                    ({lat,lon,title,description,image}, index) => <Pin key={index} lat={lat} lon={lon} title={title} description={description} image={image} />))
            }

        </ React.Fragment>
    )

}

export default NearbyPins;