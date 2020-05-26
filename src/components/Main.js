import React from "react";
import PropTypes from "prop-types";
import Map from "../components/Map";

const Main = ({ mapProperties, map }) => {
  return (
    <section className="main">
      <Map mapProperties={mapProperties} />
      {map}
    </section>
  );
};

Main.propTypes = {
  mapProperties: PropTypes.object.isRequired,
};


  

export default Main;
