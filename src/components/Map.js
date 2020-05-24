import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MyLocation from "./MyLocation";
import Pin from "./Pins";
import fetchNearbyPlaces from "../lib/fetchNearbyPlaces";

function Map({ mapProperties }) {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  useEffect(() => {
    fetchNearbyPlaces(
      mapProperties.center.lat,
      mapProperties.center.lng
    ).then((res) => setNearbyPlaces(res));
  }, [mapProperties.center.lat, mapProperties.center.lng]);

  return (
    <div style={{ height: "calc(66.67vh - 1.25rem)", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4" }}
        center={mapProperties.center}
        zoom={mapProperties.zoom}
      >
        {nearbyPlaces &&
          nearbyPlaces.map(
            ({ latitude, longitude, title, description, image }, index) => (
              <Pin
                key={index}
                lat={latitude}
                lng={longitude}
                title={title}
                description={description}
                image={image}
              />
            )
          )}
        <MyLocation
          lat={mapProperties.center.lat}
          lng={mapProperties.center.lng}
        />
      </GoogleMapReact>
    </div>
  );
}

Map.propTypes = {
  mapProperties: PropTypes.object.isRequired,
};

export default Map;
