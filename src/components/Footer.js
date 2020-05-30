import React from "react";
import PropTypes from "prop-types";
import PinDescription from "./PinDescription";

const Footer = ({
  currentPin,
  displayInformation,
  handleLocationSharedClick,
  marker,
}) => {
  const descriptionFooter = (
    <PinDescription
      title={currentPin.title}
      description={currentPin.description}
      image={currentPin.image}
    />
  );

  const defaultFooter = (
    <div>
      <p>
        <strong> Click "Share Location" </strong> to discover interesting
        landmarks around you from Wikipedia
      </p>
      <p>
        <strong> Tap on a marker </strong> on the map and more information about
        it will show up in this space. Have fun!
      </p>
      <p>Note: Your location is never stored in the app or on our servers!</p>
      <p>
        <strong> What 's near me?</strong> Looks and works best when installed
        on your phone as an app.
      </p>
    </div>
  );

  return (
    <footer className="footer">
      <h1>
        {marker ? (
          <button disabled> Location Shared </button>
        ) : (
          <button onClick={handleLocationSharedClick}> Share Location? </button>
        )}
      </h1>

      {displayInformation ? descriptionFooter : defaultFooter}
    </footer>
  );
};

Footer.propTypes = {
  currentPin: PropTypes.object.isRequired,
  displayInformation: PropTypes.bool.isRequired,
  handleLocationSharedClick: PropTypes.func.isRequired,
  marker: PropTypes.bool.isRequired,
};

export default Footer;
