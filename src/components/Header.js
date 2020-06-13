import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import SettingsModal from "./SettingsModal";

const Header = ({ userHasPanned, handleCenterClick }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const greyImg = userHasPanned ? null : "grey-img";

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
        What's near me?
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
  handleCenterClick: PropTypes.func.isRequired,
};

export default Header;
