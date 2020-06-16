import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import SettingsModal from "./SettingsModal";


const Header = ({ setDisplayInformation, userHasPanned, setUserHasPanned, mapProperties, mapsObj }) => {

  const [displayModal, setDisplayModal] = useState(false);
  const greyImg = userHasPanned ? null : "grey-img";

  const handleCenterClick = (e) => {
    const { map } = mapsObj;
    e.preventDefault();
    map.setCenter(mapProperties.center);
    setUserHasPanned(false);
  };

  return (
    <Fragment>
      {displayModal && <SettingsModal setDisplayModal={setDisplayModal} />}

      <header className="header">
        <button
          className="header-center-btn"
          onClick={handleCenterClick}
          to="/"
        >
          <img
            src="/img/center-on-me.png"
            alt="center on me"
            className={greyImg}
          />
        </button>

        <button 
            className="welcome"
            onClick={() => setDisplayInformation(false)}
        >
                What's near me?
        </button>
        <button
          className="header-settings-btn"
          onClick={() => setDisplayModal(true)}
        >
          <img src="/img/settings.png" alt="gear icon" />
        </button>
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  userHasPanned: PropTypes.bool.isRequired,
  setDisplayInformation: PropTypes.func.isRequired,
};

export default Header;