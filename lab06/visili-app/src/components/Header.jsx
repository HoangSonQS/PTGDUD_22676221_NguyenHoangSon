import React from 'react';
import './Header.css';
import searchIcon from '../assets/images/Search.png';
import bellIcon from '../assets/images/Bell 1.png';
import questionIcon from '../assets/images/Question 1.png';
import avatarIcon from '../assets/images/Avatar.png';

const Header = () => {
  return (
    <header className="top-bar">
      <h1 className="text-2xl font-semibold text-pink-500">Dashboard</h1>
      
      <div className="header-right">
        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <img
            src={searchIcon}
            alt="Search"
            className="search-icon"
          />
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="icon-button">
            <img src={bellIcon} alt="Notifications" />
          </button>
          <button className="icon-button">
            <img src={questionIcon} alt="Help" />
          </button>
          <img src={avatarIcon} alt="User" className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header; 