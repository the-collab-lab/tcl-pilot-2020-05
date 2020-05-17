import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {LocationProvider} from './components/LocationContext'

function App() {
  const contextData={
    center:{
      lat: 59.95,
      lng: 30.33
  },
  zoom: 11
  }

  
  return (
  <LocationProvider value={contextData}>
    <div className="App">
      <Header />

      <Main />
     
      <Footer />
      
     
    </div>
  
  </LocationProvider>
  );
}

export default App;
