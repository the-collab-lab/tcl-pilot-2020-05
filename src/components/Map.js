import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MyLocation from "./MyLocation";

function Map({ mapProperties }) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4" }}
        center={mapProperties.center}
        zoom={mapProperties.zoom}
      >
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
