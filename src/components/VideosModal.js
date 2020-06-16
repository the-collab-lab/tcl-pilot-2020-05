import React from "react";
import PropTypes from "prop-types";
import {Collapsible, CollapsibleItem} from 'react-materialize';

export default function VideosModal({ setVideoModal }) {
  return (
    <div id="modal" className="modal-container">
      {/* React Materalize import */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
      <section className="modal-content">
        <button
          className="modal-close-button"
          onClick={() => setVideoModal(false)}
        >
        <img
          src={"/img/close-x.png"}
          alt="close icon"
          className="modal-close-button"
        />
        </button>
        <div>
        <Collapsible accordion={true} className="modal-accordian">
          <CollapsibleItem
              expanded={false}
              header="IOS Instructions"
              node="div"
          >
            <video
              className="App-info-how-to"
              controls
              preload="metadata"
            >
              <source src={`/img/screen-cast-ios.mp4`} type="video/mp4" />
            </video>
          </CollapsibleItem>
          <CollapsibleItem
              expanded={false}
              header="Android Instructions"
              node="div"
          >
              <video
                className="App-info-how-to"
                controls
                preload="metadata"
              >
                <source src={`/img/screen-cast-android.mp4`} type="video/mp4" />
              </video>
          </CollapsibleItem>

        </Collapsible>
        </div>
      </section>
    </div>
  );
}

VideosModal.propTypes = {
  setVideoModal: PropTypes.func.isRequired,
};
