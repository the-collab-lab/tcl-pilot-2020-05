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
  const [userHasPanned, setUserHasPanned] = useState(false);
  const [mapsObj, setMapsObj] = useState({});
  // const [handleIdle, setHandleIdle] = null;
  const [currentPin, setCurrentPin] = useState({
    title: null,
    description: null,
    image: null,
  });

  const [mapProperties, setMapProperties] = useState({
    // default map properties - center currently set to Cork, Ireland
    center: {
      lat: 51.8985,
      lng: -8.4756,
    },
    zoom: 11,
    panning: false,
  });

  function getCoordinates(pos) {
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
    setUserHasPanned(false); // ensures MapCenter dot not displayed when map first moves to user location
  }

  function logError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const handleCenterClick = (e) => {
    const { map } = mapsObj;
    e.preventDefault();
    map.setCenter(mapProperties.center);
    setUserHasPanned(false);
  };

  const handleLocationSharedClick = () => {
    allowMarker(true);
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(getCoordinates, logError, options);
  };

  const map = (
    <Map
      nearbyPlaces={nearbyPlaces}
      setNearbyPlaces={setNearbyPlaces}
      setCurrentPin={setCurrentPin}
      setDisplayInformation={setDisplayInformation}
      mapProperties={mapProperties}
      userHasPanned={userHasPanned}
      setUserHasPanned={setUserHasPanned}
      mapsObj={mapsObj}
      setMapsObj={setMapsObj}
      // handleIdle={handleIdle}
      // setHandleIdle={setHandleIdle}
    />
  );

  return (
    <div className="App">
      <Header
        userHasPanned={userHasPanned}
        handleCenterClick={handleCenterClick}
      />
      <Main map={map} />
      <Footer
        currentPin={currentPin}
        displayInformation={displayInformation}
        handleLocationSharedClick={handleLocationSharedClick}
        marker={marker}
      />
    </div>
  );
}

export default App;
