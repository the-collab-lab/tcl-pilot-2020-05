import React from "react";
import PropTypes from "prop-types";

const MapCenter = ({ userHasPanned, handleCenterChanged }) => {
  const mapCenterDisplay = userHasPanned ? null : "none";

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
  handleCenterChanged: PropTypes.func.isRequired
};


export default MapCenter;
