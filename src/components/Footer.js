import React from "react";


const handleClick= () => {
        
        var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
   }

         

const Footer= () => {
      

    return (
        <footer className= "footer">

          <button onClick={handleClick}>Share Location?</button>
            
        <div>
        <p><strong> Click "Share Location"</strong> to discover interesting landmarks around you from Wikipedia</p>
        <p><strong>Tap on a marker</strong> on the map and more information about it will show up in this space. Have fun!</p>
        <p>Note: Your location is never stored in the app or on our servers!</p>
        <p><strong> What's near me?</strong> Looks and works best when installed on your phone as an app.</p>
        </div>
       

        </footer>
    )
}

export default Footer;


