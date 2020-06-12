import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SettingsModal({ setDisplayModal }) {
  const DEFAULT_VALUE = 15;
  const [sliderValue, setSliderValue] = useState(DEFAULT_VALUE);

  const handleSliderChange = (e) => {
    const { value } = e.target;
    setSliderValue(value);
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
            value={sliderValue}
            step="5"
            onChange={(e) => handleSliderChange(e)}
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
