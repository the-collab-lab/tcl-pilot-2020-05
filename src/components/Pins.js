import React from 'react';

const Pin = ({image}) => {
    const DEFAULT_IMAGE = "/img/default-thumb.png"
    return (
        <div className= "pins">
            {image? (<img src={image} alt={"venues across location"}></img>):(<img src={DEFAULT_IMAGE} alt={"venues across location"}></img>)}
        </div>

    )
}

export default Pin;