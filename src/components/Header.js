import React from "react";
import PropTypes from "prop-types";

const Header = ({ userHasPanned, setDisplayInformation }) => {
  const greyImg = userHasPanned ? null : "grey-img";

  const handleCenterClick = (e) => {
    const { map } = mapsObj;
    e.preventDefault();
    map.setCenter(mapProperties.center);
    setUserHasPanned(false);
  };
  return (
    <header className="header">
      <button className="header-btn" onClick={(handleCenterClick)} to="/">
        <img
          src="/img/center-on-me.png"
          alt="center on me"
          className={greyImg}
        />
      </button>
      <button className="welcome" onClick={() => setDisplayInformation(false)}>What's near me?</button>
    </header>
  );
};

Header.propTypes = {
  userHasPanned: PropTypes.bool.isRequired,
  handleCenterClick: PropTypes.func.isRequired,
  setDisplayInformation: PropTypes.func.isRequired
};

export default Header;