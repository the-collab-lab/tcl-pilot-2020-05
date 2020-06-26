import React from "react";

const Pin = ({ image, place, setCurrentPin, setDisplayInformation }) => {
  const DEFAULT_IMAGE = "/img/default-thumb.png";

  const onClick = (e) => {
    setCurrentPin(place);
    setDisplayInformation(true);
  };
  return (
    <div onClick={onClick} className="pins">
      {image ? (
        <img src={image} alt={place.title} />
      ) : (
        <img src={DEFAULT_IMAGE} alt={"default place image"} />
      )}
    </div>
  );
};

export default Pin;
