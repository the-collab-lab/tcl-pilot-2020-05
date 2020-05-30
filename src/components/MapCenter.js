import React from "react";
import PropTypes from "prop-types";

const MapCenter = ({ userHasPanned }) => {
  const mapCenterDisplay = userHasPanned ? null : "none";

  return (
    <span
      style={{ display: mapCenterDisplay }}
      role="img"
      aria-label="Map center"
    >
      🔴
    </span>
  );
};

MapCenter.propTypes = {
  userHasPanned: PropTypes.bool.isRequired,
};

export default MapCenter;
