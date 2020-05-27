import React,{useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Map from "./components/Map";

function App() {
  const [marker, allowMarker] = useState(false);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [currentPin,setCurrentPin] = useState({title:null, description:null, image:null});
  const [displayInformation, setDisplayInformation] = useState(false);
  const [userHasPanned, setUserHasPanned] = useState(true);
  const map = <Map nearbyPlaces={nearbyPlaces} setNearbyPlaces={setNearbyPlaces} setCurrentPin={setCurrentPin} setDisplayInformation={setDisplayInformation} />
  const [mapProperties, setMapProperties] = useState({
    // default map properties - center currently set to Cork, Ireland
    center: {
      lat: 51.8985,
      lng: -8.4756,
    },
    zoom: 11,
  });
 
  const handleCenterClick = evt => {
    evt.preventDefault();
    setUserHasPanned(false);
  };

  const centerOnMe = userHasPanned?
  'center-on-me live' : 'center-on-me';

  const handleClick = () => {
    allowMarker(true);
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      const crd = pos.coords;
      let latitude = crd.latitude;
      let longitude = crd.longitude;
      setMapProperties({
        ...mapProperties,
        center: {
          lat: latitude,
          lng: longitude,
        },
      });
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  return (
    <div className="App">
      <Header className = {centerOnMe} to = "/" onClick={handleCenterClick}>
        <img src="/img/center-on-me.png" alt= "center on me"/>
       </Header>
      <Main map={map} mapProperties={mapProperties} setUserHasPanned={ setUserHasPanned }
             userHasPanned={ userHasPanned }/>
      <Footer currentPin={currentPin} displayInformation={displayInformation} handleClick={handleClick} marker={marker} />
    </div>
  );
}
export default App;