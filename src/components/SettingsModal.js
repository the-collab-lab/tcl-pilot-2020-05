import React from "react";
import PropTypes from "prop-types";

export default function SettingsModal({ closeModal }) {
  return (
    <div id="modal" className="modal-container" onClick={(e) => closeModal(e)}>
      <section className="modal-content">
        <h1 className="modal-header">Settings</h1>
      </section>
    </div>
  );
}

SettingsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
