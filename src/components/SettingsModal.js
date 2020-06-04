import React from "react";
import PropTypes from "prop-types";

export default function SettingsModal({ closeModal }) {
  return (
    <div id="modal" className="modal-container" >
      <section className="modal-content">
      <img src={"/img/close-x.png"} onClick={(e) => closeModal(e)} className="modal-close-button"/>
        <h1 className="modal-header">Settings</h1>
      </section>
    </div>
  );
}

SettingsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
