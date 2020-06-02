import React, { Fragment } from "react";
import PropTypes from "prop-types";
import SettingsModal from "./SettingsModal";

const Header = ({ displayModal, openModal, closeModal }) => {
  return (
    <Fragment>
      {displayModal && <SettingsModal closeModal={closeModal} />}

      {/* onClick will later be moved to the forthcoming "settings" icon */}
      <header onClick={openModal} className="header">
        What's near me?
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
