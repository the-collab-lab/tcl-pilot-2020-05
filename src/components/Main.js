import React from "react";
import PropTypes from "prop-types";

const Main = ({ map }) => {
  return <section className="main">{map}</section>;
};

Main.propTypes = {
  map: PropTypes.node.isRequired,
};

export default Main;
