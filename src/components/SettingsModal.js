import React from "react";
import PropTypes from "prop-types";

export default function SettingsModal({ setDisplayModal }) {
  return (
    <div id="modal" className="modal-container">
      <section className="modal-content">
        <img
          src={"/img/close-x.png"}
          alt="close icon"
          onClick={() => setDisplayModal(false)}
          className="modal-close-button"
        />
        <h1 className="modal-header">Settings</h1>
      </section>
    </div>
  );
}

SettingsModal.propTypes = {
  setDisplayModal: PropTypes.func.isRequired,
};
