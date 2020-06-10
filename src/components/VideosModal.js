import React from "react";
import PropTypes from "prop-types";

export default function VideosModal({ setVideoModal }) {
  return (
    <div id="modal" className="modal-container">
      <section className="modal-content">
        <img
          src={"/img/close-x.png"}
          alt="close icon"
          onClick={() => setVideoModal(false)}
          className="modal-close-button"
        />
        <h1 className="modal-header">Videos</h1>
        <h3>How to:Ios</h3>
        <video
          className="App-info-how-to"
          //poster={`/img/screen-grab-ios.png`}
          controls
          preload="metadata"
        >
          <source src={`/img/screen-cast-ios.mp4`} type="video/mp4" />
        </video>
        <h3>How to:Android</h3>
        <video
          className="App-info-how-to"
         // poster={`/img/screen-grab-android.png`}
          controls
          preload="metadata"
        >
          <source src={`/img/screen-cast-android.mp4`} type="video/mp4" />
        </video>
      </section>
    </div>
  );
}

VideosModal.propTypes = {
  setVideoModal: PropTypes.func.isRequired,
};
