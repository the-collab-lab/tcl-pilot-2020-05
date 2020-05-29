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
        <img src={image} alt={"venues across location"} />
      ) : (
        <img src={DEFAULT_IMAGE} alt={"venues across location"} />
      )}
    </div>
  );
};

export default Pin;
