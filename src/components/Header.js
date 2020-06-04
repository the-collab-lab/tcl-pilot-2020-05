import React  from "react";
import PropTypes from "prop-types";

const Header = ({ userHasPanned, handleCenterClick , handleTitleClick}) => {
  const greyImg = userHasPanned ? null : "grey-img";
  //const [setPlace] = useState(null);

 /* const handleTitleClick = evt => {
    setPlace(null);
  };*/

  return (
    <header className="header">
      <button className= "header-btn" onClick = { handleCenterClick } to="/">
        <img
          src="/img/center-on-me.png"
          alt="center on me"
          className={greyImg}
        />
      </button>
      <button className= "welcome" onClick={handleTitleClick}>What's near me?</button>
    </header>
  );
};

Header.propTypes = {
  userHasPanned: PropTypes.bool.isRequired,
  handleCenterClick: PropTypes.func.isRequired,
  handleTitleClick:PropTypes.func.isRequired
};

export default Header;
