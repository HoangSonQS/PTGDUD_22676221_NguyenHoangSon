import React, { useMemo } from 'react';
import './Content.css';
import avatar from '../images/AVT.jpg';

const Content = React.memo(({ array }) => {
  // Sử dụng useMemo để memoize dữ liệu công thức
  const memoizedRecipes = useMemo(() => array, [array]);

  return (
    <div className="content-container">
      {/* Breadcrumb */}
      <div className="breadcrumb breadcrumb-left">
        <span>Home</span> &gt; <span>Your Recipe Box</span>
      </div>

      {/* User Info */}
      <div className="user-info">
        <h1 className="user-info-title">Emma Gonzalez's Recipe Box</h1>
        <div className="user-details user-details-left">
          <img src={avatar} alt="Emma Gonzalez" className="user-image" />
          <div className="user-text">
            <p>
              Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise
              as a former cooking editor at The Los Angeles Times. She is also an
              accomplished author, contributing to numerous cookbooks and food
              publications. Originally from East Los Angeles, Emma now resides in
              New York City, where she explores a wide range of culinary delights.
            </p>
            <div className="user-stats">
              <span>6.5K Subscribers</span>
              <button className="share-button">Share</button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-left">
        <button className="tab active">Saved Recipes</button>
        <button className="tab">Folders</button>
        <button className="tab">Recipes by Genevieve</button>
      </div>

      {/* Recipe Grid */}
      <div className="content-grid content-grid-left">
        {memoizedRecipes.map((item, index) => (
          <div key={index} className="content-item">
            <img src={item.image} alt={item.name} className="content-image" />
            <div className="content-details">
              <h3>{item.name}</h3>
              <p>{item.time} minutes</p>
              <button className="bookmark-button">📑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Content;