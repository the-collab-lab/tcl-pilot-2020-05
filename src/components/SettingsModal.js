import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SettingsModal({ setDisplayModal }) {
  const [sliderValue, setSliderValue] = useState(15);

  const handleSlide = (event) => {
    const { value } = event.target;
    setSliderValue(value);

    console.log("value from slider:", event.target.value);
  };

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
          <label htmlFor="delay-slider">
            Set how frequently the app will fetch new places. Values are in
            seconds.
          </label>
          <div className="modal-range-pic-container">
            <span className="modal-range-pic">
              <img src="./img/slider-car.png" alt="car-emoji" />
            </span>
            <span className="modal-range-pic">
              <img src="./img/slider-bike.png" alt="bike emoji" />
            </span>
            <span className="modal-range-pic slider-walker">
              <img src="./img/slider-walker.png" alt="walker emoji" />
            </span>
          </div>
          <input
            type="range"
            id="delay-slider"
            className="delay-slider"
            name="delay-slider"
            min="0"
            max="30"
            defaultValue="15"
            step="5"
            onInput={(event) => handleSlide(event)}
          />
          <div className="slider-value">{sliderValue}</div>
        </div>
      </section>
    </div>
  );
}

SettingsModal.propTypes = {
  setDisplayModal: PropTypes.func.isRequired,
};
