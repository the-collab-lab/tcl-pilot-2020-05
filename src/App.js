import React,{useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [currentPin,setCurrentPin] = useState(null);
  const [displayInformation, setdisplayInformation] = useState(false);
  

  

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer currentPin={currentPin} displayInformation={displayInformation} />
    </div>
  );
}

export default App;
