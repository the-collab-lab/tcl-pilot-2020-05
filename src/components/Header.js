import React, { Fragment, useState } from "react";
import SettingsModal from "./SettingsModal";

const Header = () => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <Fragment>
      {displayModal && <SettingsModal setDisplayModal={setDisplayModal} />}

      <header className="header">
        What's near me?
        <button
          className="header-settings-btn"
          onClick={() => setDisplayModal(true)}
        >
          <img src="/img/settings.png" alt="gear icon" />
        </button>
      </header>
    </Fragment>
  );
};

export default Header;
