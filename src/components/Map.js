import React, { useEffect } from "react";
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
  onPositionChanged,
  center,
}) => {
  useEffect(() => {
    fetchNearbyPlaces(
      mapProperties.center.lat,
      mapProperties.center.lng
    ).then((res) => setNearbyPlaces(res));
  }, [mapProperties.center.lat, mapProperties.center.lng, setNearbyPlaces]);

  function handleApiLoaded(map, maps) {
    setMapsObj(map, maps);
  }

  // only runs if maps object is populated
  if (!isObjEmpty(mapsObj)) {
    const { map } = mapsObj;
    map.addListener("center_changed", function () {
      setUserHasPanned(true);
     // handleCenterChanged();
    });
  };

  /*const mapCenterClassnames = userHasPanned ?
    'map-center active'
    : 'map-center';*/

  function handleCenterChanged() {
    const center = this.mapProperties.getCoordinates();
    if (!center.equals(mapProperties.center.lat, mapProperties.center.lng)) {
      setMapProperties({ center });
      setNearbyPlaces();
    }
  };

  return (
    <div className="Map" style={{ height: "calc(66.67vh - 1.25rem)", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4" }}
        center={mapProperties.center}
        zoom={mapProperties.zoom}
        options={{ clickableIcons: false }}
        handleCenterChanged={handleCenterChanged}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={(map, maps) => handleApiLoaded(map, maps)}
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
        <MapCenter userHasPanned={userHasPanned} handleCenterChanged={handleCenterChanged} onPositionChanged={onPositionChanged}/>
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
  onPositionChanged:PropTypes.func.isRequired,
  handleCenterChanged: PropTypes.func.isRequired,
};

export default Map;
