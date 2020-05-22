import React from "react";
import PinDescription from "./PinDescription";


const Footer= ({title, description, image, displayDescription}) => {
     

    const descriptionFooter = <PinDescription title = {title} description ={description} image = {image}/>
  

    const defaultFooter = (
        <React.Fragment>      
            <button>Share Location</button>
            <p><strong> Click "Share Location"</strong> to discover interesting landmarks around you from Wikipedia</p>
            <p><strong>Tap on a marker</strong> on the map and more information about it will show up in this space. Have fun!</p>
            <p>Note: Your location is never stored in the app or on our servers!</p>
            <p><strong> What's near me?</strong> Looks and works best when installed on your phone as an app.</p>
        </React.Fragment>  
    )
    

    return (
      
        <footer className= "footer">{ displayDescription? descriptionFooter : defaultFooter }</footer>
       

    )
}


export default Footer;
