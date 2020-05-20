import React from "react";
import PropTypes from "prop-types";
import Map from "../components/Map";

const Main = (props) => {
  const { data } = props;

  return (
    <section className="main">
      <Map data={data} />
    </section>
  );
};

Main.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Main;
