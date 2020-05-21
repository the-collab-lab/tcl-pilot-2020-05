import React from "react";

const PinDescription = ({title,image,description}) => {
    const DEFAULT_IMAGE = "/img/default-thumb.png";

  return (
     <div className = "Description">
            {title?<h1>{title}</h1>:<h1>Unknown</h1>}
            {image? (<img src={image} alt={"venues across location"} />):(<img src={DEFAULT_IMAGE} alt={"venues across location"} />)}
            {description? <p>Description: {description}</p>:<p>No Description</p>}
     </div>
   )
}

export default PinDescription;