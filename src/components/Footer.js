import React from "react";

const Footer = (props) => {
  const { handleClick, marker } = props;

  return (
    <footer className="footer">
      <h1>
        {" "}
        {marker ? (
          <button disabled> Location Shared </button>
        ) : (
          <button onClick={handleClick}>Share Location?</button>
        )}
      </h1>

      <div>
        <p>
          {" "}
          <strong> Click "Share Location" </strong> to discover interesting
          landmarks around you from Wikipedia
        </p>
        <p>
          {" "}
          <strong> Tap on a marker </strong> on the map and more information
          about it will show up in this space. Have fun!
        </p>
        <p>
          {" "}
          Note: Your location is never stored in the app or on our servers!{" "}
        </p>{" "}
        <p>
          {" "}
          <strong> What 's near me?</strong> Looks and works best when installed
          on your phone as an app.
        </p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
