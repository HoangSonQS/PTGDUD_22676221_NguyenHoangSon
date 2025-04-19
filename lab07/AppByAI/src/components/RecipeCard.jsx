import React from 'react';
import '../App.css';
const RecipeCard = ({ image, title, time }) => (
  <div className="card">
    <img src={image} alt={title} className="card-image" />
    <h4 className="card-title">{title}</h4>
    <p className="card-time">{time}</p>
    <img className="card-save" src="../img/Icon Button 73.png" alt="" />
  </div>

);

export default RecipeCard;
