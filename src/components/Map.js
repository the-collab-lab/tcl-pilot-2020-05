import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Pin from "./Pins";
import MyLocation from "./MyLocation";
import fetchNearbyPlaces from "../lib/fetchNearbyPlaces";
import MapCenter from "./MapCenter";

const Map = ({
  nearbyPlaces,
  setNearbyPlaces,
  setCurrentPin,
  setDisplayInformation,
  mapProperties,
  map,
  userHasPanned,
  setUserHasPanned,
  MapCenter,
}) => {
  useEffect(() => {
    fetchNearbyPlaces(
      mapProperties.center.lat,
      mapProperties.center.lng
    ).then((res) => setNearbyPlaces(res));
  }, [mapProperties.center.lat, mapProperties.center.lng, setNearbyPlaces]);

  return (
    <div style={{ height: "calc(66.67vh - 1.25rem)", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4" }}
        center={mapProperties.center}
        zoom={mapProperties.zoom}
        options={{ clickableIcons: false }}
      >
        {nearbyPlaces &&
          nearbyPlaces.map((place, index) => (
            <Pin
              {...place}
              key={index}
              place={place}
              lat={place.latitude}
              lng={place.longitude}
              img={place.image}
              setCurrentPin={setCurrentPin}
              setDisplayInformation={setDisplayInformation}
            />
          ))}

        <MyLocation
          lat={mapProperties.center.lat}
          lng={mapProperties.center.lng}
        />
      </GoogleMapReact>
      <MapCenter />
    </div>
  );
};

export default Map;
