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
    let places = await fetchNearbyPlacesPromise(lat,lng).then(res => res.query.pages);
    if(places){
        return places.map( (place) => {
            const latitude = parseFloat(place.coordinates[0].lat);
            const longitude = parseFloat(place.coordinates[0].lon);
            const description = place.description;
            const title = place.title;
            const image = place.thumbnail? place.thumbnail.source: null;
            const dict = {latitude, longitude, description, title, image};
            return dict;
        });
        } else {
    // might want to differentiate between error and no outputs in the future. Currently will render same thing.
        return [];
    }
}

export default fetchNearbyPlaces;