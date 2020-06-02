import React, { Fragment } from "react";
import PropTypes from "prop-types";
import SettingsModal from "./SettingsModal";

const Header = ({ displayModal, openModal, closeModal }) => {
  return (
    <Fragment>
      {displayModal && <SettingsModal closeModal={closeModal} />}

      <header className="header">
        What's near me?
        <button className="header-settings-btn" onClick={openModal}>
          <img src="/img/settings.png" alt="gear icon" />
        </button>
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  displayModal: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Header;
