import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function SettingsModal({ setDisplayModal }) {
  const DEFAULT_VALUE = 15;
  const [sliderValue, setSliderValue] = useState(
    localStorage.getItem("sliderValueInLocalStorage") || DEFAULT_VALUE
  );

  useEffect(() => {
    localStorage.setItem("sliderValueInLocalStorage", sliderValue);
  }, [sliderValue]);

  const handleSliderChange = (e) => {
    const { value } = e.target;
    setSliderValue(value);
  };

  return (
    <div id="modal" className="modal-container">
      <section className="modal-content">
        <button
          className="modal-close-button"
          onClick={() => setDisplayModal(false)}
        >
          <img
            src={"/img/close-x.png"}
            alt="close icon"
            className="modal-close-img"
          />
        </button>
        <h1 className="modal-header">Settings</h1>

        <div className="modal-range-container">
          <label htmlFor="delay-slider">
            Set how frequently the app will fetch new places. Values are in
            seconds.
          </label>
          <div className="modal-range-pic-container">
            <figure className="modal-range-pic">
              <img
                src="./img/slider-car.png"
                alt="No delay is best when traveling by car"
              />
            </figure>
            <figure className="modal-range-pic">
              <img
                src="./img/slider-bike.png"
                alt="A 15 second delay is best when traveling by bicycle"
              />
            </figure>
            <figure className="modal-range-pic slider-walker">
              <img
                src="./img/slider-walker.png"
                alt="A 30 second delay is best when traveling by foot"
              />
            </figure>
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
            onChange={handleSliderChange}
          />
          <div
            aria-label="current fetch frequency selection by number of seconds"
            className="slider-value"
          >
            {sliderValue}
          </div>
        </div>
      </section>
    </div>
  );
}

SettingsModal.propTypes = {
  setDisplayModal: PropTypes.func.isRequired,
};
