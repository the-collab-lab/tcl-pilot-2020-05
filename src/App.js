import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Map from "./components/Map";

function App() {
  const [marker, allowMarker] = useState(false);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [displayInformation, setDisplayInformation] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [currentPin, setCurrentPin] = useState({
    title: null,
    description: null,
    image: null,
  });

  const [mapProperties, setMapProperties] = useState({
    // default map properties - center currently set to Cork, Ireland
    center: {
      lat: 51.8985,
      lng: -8.4756,
    },
    zoom: 11,
  });

  const map = (
    <Map
      nearbyPlaces={nearbyPlaces}
      setNearbyPlaces={setNearbyPlaces}
      setCurrentPin={setCurrentPin}
      setDisplayInformation={setDisplayInformation}
      mapProperties={mapProperties}
    />
  );

  const handleClick = () => {
    allowMarker(true);
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      const crd = pos.coords;
      let latitude = crd.latitude;
      let longitude = crd.longitude;
      setMapProperties({
        ...mapProperties,
        center: {
          lat: latitude,
          lng: longitude,
        },
      });
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  const openModal = () => {
    setDisplayModal(true);
  };

  const closeModal = (e) => {
    if (e.target.id === "modal") {
      setDisplayModal(false);
    }
  };

  return (
    <div className="App">
      <Header
        displayModal={displayModal}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Main map={map} />
      <Footer
        currentPin={currentPin}
        displayInformation={displayInformation}
        handleClick={handleClick}
        marker={marker}
      />
    </div>
  );
}

export default App;
