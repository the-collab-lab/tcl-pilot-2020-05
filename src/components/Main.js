import React from "react";
import PropTypes from "prop-types";
import Map from "../components/Map";

const Main = (props) => {
  const { mapProperties } = props;

  return (
    <section className="main">
      <Map mapProperties={mapProperties} />
    </section>
  );
};

Main.propTypes = {
  mapProperties: PropTypes.object.isRequired,
};

export default Main;
