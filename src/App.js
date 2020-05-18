import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  
  const [marker, allowmarker] = useState(null);
  const [data, setData]=useState({
    center: {
      lat: 59.95,
      lng: 30.33
    },
  zoom: 11
  })
  const handleClick = () => {
    allowmarker(true);
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
        
    function success(pos) {
      var crd = pos.coords;
      let longitude=crd.longitude;
      let latitude = crd.latitude;
      
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    
      setData(
        {
          center: {
            lat: latitude,
            lng: longitude
          },
        zoom: 11
        })
        
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
      
    navigator.geolocation.getCurrentPosition(success, error, options);
    
  }

  console.log('data', data)
  return (
    <div className="App">
      <Header />

      <Main data={data}  />
     
      <Footer handleClick={handleClick}  marker = {marker}/>
      
     
    </div>
  
  );
}

export default App;
