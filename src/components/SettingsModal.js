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
        <div className="modal-range-container">
          <label for="delay-slider">
            Set how frequently the app will fetch new places. Values are in
            seconds.
          </label>
          <input
            type="range"
            id="delay-slider"
            className="delay-slider"
            name="delay-slider"
            min="0"
            max="30"
            step="5"
          />
        </div>
      </section>
    </div>
  );
}

SettingsModal.propTypes = {
  setDisplayModal: PropTypes.func.isRequired,
};
