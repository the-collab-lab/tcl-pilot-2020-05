import React from "react";
import PropTypes from "prop-types";

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

Header.propTypes = {
  userHasPanned: PropTypes.bool.isRequired,
  handleCenterClick: PropTypes.func.isRequired,
};

export default Header;
