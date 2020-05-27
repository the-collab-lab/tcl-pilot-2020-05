import React  from "react";
import PropTypes from "prop-types";
import PinDescription from "./PinDescription";

const Footer= ({currentPin, displayInformation, handleClick, marker}) => {
    const descriptionFooter = <PinDescription title = {currentPin.title}description ={currentPin.description} image = {currentPin.image}/>
  

    const defaultFooter = (
        <React.Fragment className="footer">      
            <h1>
        {marker ? (
          <button disabled> Location Shared </button>
        ) : (
          <button onClick={handleClick}> Share Location? </button>
        )}
      </h1>

      <div>
        <p>
          <strong> Click "Share Location" </strong> to discover interesting
          landmarks around you from Wikipedia
        </p>
        <p>
          <strong> Tap on a marker </strong> on the map and more information
          about it will show up in this space. Have fun!
        </p>
        <p>Note: Your location is never stored in the app or on our servers!</p>
        <p>
          <strong> What 's near me?</strong> Looks and works best when installed
          on your phone as an app.
        </p>
      </div>
    
        </React.Fragment>  
    )

    /*Footer.propTypes = {
      handleClick: PropTypes.func.isRequired,
      marker: PropTypes.bool.isRequired,
    };*/
    

    return (
      
       <footer className= "footer">{ displayInformation? descriptionFooter : defaultFooter }</footer>

   
       

    )
}


export default Footer;
