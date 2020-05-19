import React from 'react';

const Pin = ({title, description, image}) => {
    const DEFAULT_IMAGE = "../../public/img/default-thumb.png"
    return (
        <div className= "pins" style={{height:"25px",width:"25px", fontSize:"10%"}}>
            {title?<h1>{title}</h1>:<h1>Unkown</h1>}
            {image? (<img src={image} height="50" width="50"></img>):(<img src={DEFAULT_IMAGE} height="50" width="50"></img>)}
            {description? <p>Description: {description}</p>:<p>No Description</p>}
        </div>

    )
}

export default Pin;