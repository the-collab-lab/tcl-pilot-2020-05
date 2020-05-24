import React from 'react';

const Pin = ({image}) => {
    const DEFAULT_IMAGE = "/img/default-thumb.png"
    return (
        <div className= "pins">
            {image? (<img src={image} alt={"venues across location"} />):(<img src={DEFAULT_IMAGE} alt={"venues across location"} />)}
        </div>

    )
}

export default Pin;