import React from 'react';
import '../App.css';

const RecipeOfTheDay = () => (
  <section className="recipe-section">
    <img style={{paddingLeft: "20px", paddingRight : "20px"}} src="../img/Image 73.png" alt="Chef cooking" className="recipe-image" />
    <div className="recipe-box">
      <div className="header_recipeOftheDay"><p style={{width: "100%"}} className="recipe-label">Recipe of the day</p></div>
      <h2 className="recipe-title">Salad Caprese</h2>
      <p className="recipe-description">
        Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar.
      </p>
      <img style={{marginTop : "80px"}} src="../img/Avatar (2).png" alt="" />
      <p className="recipe-chef">Salad Caprese</p>
      <button className="recipe-button">View now →</button>
    </div>
  </section>
);

export default RecipeOfTheDay;
