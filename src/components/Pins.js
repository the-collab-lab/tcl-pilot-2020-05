import React from 'react';

const Pin = ({image}) => {
    const DEFAULT_IMAGE = "../../public/img/default-thumb.png"
    return (
        <div className= "pins">
            {image? (<img src={image} alt={"venues across location"} height="50" width="50"></img>):(<img src={DEFAULT_IMAGE} alt={"venues across location"} height="50" width="50"></img>)}
        </div>

    )
}

export default Pin;