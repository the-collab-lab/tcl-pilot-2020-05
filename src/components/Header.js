import React from "react";

const Header = ({ userHasPanned, handleCenterClick }) => {
  const greyImg = userHasPanned ? null : "grey-img";

  return (
    <header className="header">
      <button className="header-btn" onClick={handleCenterClick} to="/">
        <img
          src="/img/center-on-me.png"
          alt="center on me"
          className={greyImg}
        />
      </button>
      What's near me?
    </header>
  );
};

export default Header;
