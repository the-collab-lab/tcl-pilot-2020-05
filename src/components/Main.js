import React from "react";
import PropTypes from "prop-types";
import Map from "../components/Map";

const Main = ({
  nearbyPlaces,
  setNearbyPlaces,
  setCurrentPin,
  setDisplayInformation,
  mapProperties,
  map,
  userHasPanned,
  setUserHasPanned,
}) => {
  return (
    <section className="main">
      <Map
        nearbyPlaces={nearbyPlaces}
        setNearbyPlaces={setNearbyPlaces}
        setCurrentPin={setCurrentPin}
        setDisplayInformation={setDisplayInformation}
        mapProperties={mapProperties}
        map={map}
        userHasPanned={userHasPanned}
        setUserHasPanned={setUserHasPanned}
      />
    </section>
  );
};

Main.propTypes = {
  mapProperties: PropTypes.object.isRequired,
};

export default Main;
