import React from "react";
import { firstCap } from "../lib/DescriptionRules";

const PinDescription = ({ title, image, description, }) => {
  const DEFAULT_IMAGE = "/img/default-thumb.png";
  const wikipedia = `https://www.wikipedia.org/search-redirect.php?search=${title}&family=wikipedia&hiddenLanguageInput=en`;

  return (
    <div className="Description">
      {title ? <h1>{firstCap(title)}</h1> : <h1>Unknown</h1>}
      {image ? (
        <img src={image} alt={firstCap(title)} />
      ) : (
        <img src={DEFAULT_IMAGE} alt={firstCap(title)} />
      )}
      {description ? (
        <p>Description: {firstCap(description)}</p>
      ) : (
        <p>No Description</p>
      )}
      <p>
        <a target="_blank" rel="noopener noreferrer" href={wikipedia}>
          find out more about this spot over on Wikipedia
        </a>
      </p>
    </div>
  );
};

export default PinDescription;
