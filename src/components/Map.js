import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import fetchNearbyPlaces from "../lib/fetchNearbyPlaces";
import isObjEmpty from "../lib/isObjEmpty";
import Pin from "./Pins";
import MyLocation from "./MyLocation";
import MapCenter from "./MapCenter";

const Map = ({
  nearbyPlaces,
  setNearbyPlaces,
  setCurrentPin,
  setDisplayInformation,
  mapProperties,
  userHasPanned,
  setUserHasPanned,
  mapsObj,
  setMapsObj,
  center,
}) => {

  let [pendingPromise, setPendingPromise] = useState(false);

  useEffect(() => {
    if (!pendingPromise) {
      fetchNearbyPlaces(
        mapProperties.center.lat,
        mapProperties.center.lng,
        setPendingPromise
      ).then((res) => {setNearbyPlaces(res); setPendingPromise(false);});
    }
  }, []);
  // converts value in seconds to be milliseconds for the setTimeout
  const fetchDelay = localStorage.getItem("sliderValueInLocalStorage") * 1000;

  // only runs if maps object is populated
  if (!isObjEmpty(mapsObj) && !pendingPromise) {
    const { map } = mapsObj;
    map.addListener("dragend", function (event) {
      const panCoords = map.getCenter();
      const panLat = panCoords.lat();
      const panLng = panCoords.lng();
      setUserHasPanned(true);
      setTimeout(() => {
        if(!pendingPromise){
          handleCenterChanged(panLat, panLng);
        }
      }, fetchDelay);
     });
  };

  function handleCenterChanged(panLat, panLng) {
    if (!pendingPromise) {
      fetchNearbyPlaces(panLat, panLng, setPendingPromise).then((res) => setNearbyPlaces(res));
    }
  }

  return (
    <div
      className="Map"
      style={{ height: "calc(66.67vh - 1.25rem)", width: "100%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4" }}
        center={mapProperties.center}
        zoom={mapProperties.zoom}
        options={{ clickableIcons: false, gestureHandling: "greedy" }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={setMapsObj}
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
              center={center}
            />
          ))}

        <MyLocation
          lat={mapProperties.center.lat}
          lng={mapProperties.center.lng}
        />
        <MapCenter
          userHasPanned={userHasPanned}
          handleCenterChanged={handleCenterChanged}
        />
      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {
  nearbyPlaces: PropTypes.array.isRequired,
  setNearbyPlaces: PropTypes.func.isRequired,
  setCurrentPin: PropTypes.func.isRequired,
  setDisplayInformation: PropTypes.func.isRequired,
  mapProperties: PropTypes.object.isRequired,
  userHasPanned: PropTypes.bool.isRequired,
  setUserHasPanned: PropTypes.func.isRequired,
  mapsObj: PropTypes.object.isRequired,
  setMapsObj: PropTypes.func.isRequired,
};

export default Map;
