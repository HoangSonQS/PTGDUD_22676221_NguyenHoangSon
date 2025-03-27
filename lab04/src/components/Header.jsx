import React, { useEffect, useState } from 'react';
import './Header.css';
import RenderNavItem from './RenderNavItem';

import chefifyImg from '../images/chefify.png';
import checkPhoto from '../images/check.png';
import avatar from '../images/avatar.png';

function Header() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch('https://67cd3b0bdd7651e464edba1c.mockapi.io/Item')
      .then((r) => r.json())
      .then((d) => setArray(d));
  }, []);

  return (
    <div className="header">
      <div id="header" className="flex-container">
        <div className="logo">
          <img src={chefifyImg} alt="logo" />
        </div>
        <div className="search-bar">
          <input id="myInput" placeholder="What would you like to cook?" />
        </div>
        <div className="myNav">
          <nav>
            <RenderNavItem array={array} />
          </nav>
        </div>
        <div className="profile">
          <div id="photo">
            <img src={checkPhoto} alt="check" />
            <p>Your Recipe Box</p>
          </div>
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;