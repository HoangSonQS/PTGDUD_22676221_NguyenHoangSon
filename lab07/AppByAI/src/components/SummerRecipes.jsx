import React from 'react';
import RecipeCard from './RecipeCard'; // vẫn dùng component cũ
import '../App.css';

const SummerRecipes = () => (
  <section className="summer-section">
    <h2 style={{fontWeight : "500", fontSize: "36px", paddingTop: "40px"}} className="summer-title">This Summer Recipes</h2>
    <p style={{fontWeight : "400", fontSize: "16px", color:"black"}} className="summer-subtitle">We have all your Independence Day sweets covered.</p>
    <div className="summer-grid">
      <RecipeCard title="Italian-style tomato" image="../img/Italian-style tomato.png" time="10 minutes" />
      <RecipeCard title="Spaghetti with vegetables" image="../img/Vegetable and shrimp spaghetti.png" time="15 minutes" />
      <RecipeCard title="Lotus delight salad" image="../img/Lotus delight salad.png" time="20 minutes" />
      <RecipeCard title="Snack cakes" image="../img/Snack cakes.png" time="21 minutes" />
    </div>
  </section>
);

export default SummerRecipes;
