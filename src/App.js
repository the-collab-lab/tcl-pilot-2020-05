import React,{useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Map from "./components/Map";


function App() {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [currentPin,setCurrentPin] = useState(null);
  const [displayInformation, setdisplayInformation] = useState(false);
  
  const map = <Map nearbyPlaces={nearbyPlaces} setNearbyPlaces={setNearbyPlaces} />
  

  return (
    <div className="App">
      <Header />
      <Main map={map} />
      <Footer currentPin={currentPin} displayInformation={displayInformation} />
    </div>
  );
}

export default App;
