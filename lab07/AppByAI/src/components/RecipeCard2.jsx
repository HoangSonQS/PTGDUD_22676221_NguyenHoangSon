import React from 'react';
import '../App.css';
const RecipeCard2 = ({ image, title, time ,image2, para, name}) => (
  <div className="card">
    <img src={image} alt={title} className="card-image1" />
    <h4 className="card-title1">{title}</h4>
    <p className="card-time1">{time}</p>
    <p className="card-para">{para}</p>
    <img src={image2} alt="" className="card-avatar"/>
    <p className="card-name">{name}</p>
    <img className="card-save1" src="../img/Icon Button 73.png" alt="" />
  </div>

);
export default RecipeCard2;