import React from "react";
import GoogleMapReact from "google-map-react";
import MyLocation from "./MyLocation";

function Map(props) {
  const { data } = props;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4" }}
        center={data.center}
        zoom={data.zoom}
      >
        <MyLocation lat={data.center.lat} lng={data.center.lng} />
      </GoogleMapReact>
    </div>
  );
}
export default Map;
