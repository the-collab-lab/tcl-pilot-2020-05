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
  setMapProperties,
  //handleCenterChanged,
  // onPositionChanged,
  center,
}) => {
  useEffect(() => {
    if (!pendingPromise) {
      fetchNearbyPlaces(
        mapProperties.center.lat,
        mapProperties.center.lng,
        setPendingPromise
      ).then((res) => setNearbyPlaces(res), setPendingPromise(false));
    }
  }, [mapProperties.center.lat, mapProperties.center.lng, setNearbyPlaces]);

  let [pendingPromise, setPendingPromise] = useState(false);
  // only runs if maps object is populated
  if (!isObjEmpty(mapsObj)) {
    const { map } = mapsObj;
    map.addListener("center_changed", function () {
      setUserHasPanned(true);
      // handleCenterChanged();
    });
  }

  function handleCenterChanged() {
    const center = {
      latitude: mapProperties.center.lat,
      longitude: mapProperties.center.lng,
    };
    // this.mapProperties.getCoordinates();
    if (!center.equals(mapProperties.center.lat, mapProperties.center.lng)) {
      setMapProperties({ center });
      setNearbyPlaces();
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
        options={{ clickableIcons: false }}
        handleCenterChanged={handleCenterChanged}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={setMapsObj}
        // onGoogleApiLoaded={(map, maps) => handleApiLoaded(map, maps)}
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
              // handleCenterChanged={handleCenterChanged}
              // onPositionChanged={onPositionChanged}
              center={center}
            />
          ))}

        <MyLocation
          lat={mapProperties.center.lat}
          lng={mapProperties.center.lng}
        />
        <MapCenter
          userHasPanned={userHasPanned}
          // handleCenterChanged={handleCenterChanged}
          // onPositionChanged={onPositionChanged}
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
  onPositionChanged: PropTypes.func.isRequired,
  handleCenterChanged: PropTypes.func.isRequired,
};

export default Map;
