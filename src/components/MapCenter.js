import React from "react";
import PropTypes from "prop-types";

const MapCenter = ({ userHasPanned, handleCenterChanged, setNearbyPlaces }) => {
  const mapCenterDisplay = userHasPanned ? null : "none";
  // if (userHasPanned) {
  //   setNearbyPlaces();
  // }

  return (
    <span
      style={{ display: mapCenterDisplay }}
      role="img"
      aria-label="Map center"
    >
      ⚫
    </span>
  );
};

MapCenter.propTypes = {
  userHasPanned: PropTypes.bool.isRequired,
  handleCenterChanged: PropTypes.func.isRequired,
  setNearbyPlaces: PropTypes.func.isRequired,
};

export default MapCenter;
