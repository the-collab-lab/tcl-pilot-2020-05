import React from 'react';


export default Pin = ({name, text, image}) => {
    DEFAULT_IMAGE = "../../public/img/default-thumb.png"
    return (
        <div>
            <h1>{name}</h1>
            {image? (<img src={image} height="10" width="10"></img>):(<img src={DEFAULT_IMAGE} height="10" width="10"></img>)}
            <p>Description: {text}</p>
        </div>

    )
}