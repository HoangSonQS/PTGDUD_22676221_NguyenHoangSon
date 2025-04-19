import React from 'react';
import RecipeCard2 from './RecipeCard2';
import '../App.css';

const EditorsPick = () => (
  <section className="editors-section">
    <h2 style={{ fontWeight: "500", fontSize: "36px", paddingTop: "60px" }} className="editors-title">Editor's pick</h2>
    <p style={{ fontWeight: "400", fontSize: "16px", color: "black" }} className="editors-subtitle">
      Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
    </p>
    <div className="editors-grid">
      <RecipeCard2 title="Stuffed sticky rice ball" image="../img/Italian-style tomato.png" time="34 minutes" image2="../img/Avatar (2).png"
        para="Stuffed sticky rice balls. A delightful Asian treat with chewy, glutinous rice and a flavorful
surprise filling" name="Jenifer King" />
      <RecipeCard2 title="Strawberry smoothie" image="../img/Vegetable and shrimp spaghetti.png" time="40 minutes"
        image2="../img/Avatar (2).png"
        para="Savor the refresning delight of a strawberry smoothie Made with ripe strawberries, this creamy blend offers" name="Matthew " />
      <RecipeCard2 title="Latte Art" image="../img/Lotus delight salad.png" time="19 minutes"
        image2="../img/Avatar (2).png"
        para="Latte art is the skillful craft of creating captivating designs on the surface of a latte" name="Sarah Hill" />
      <RecipeCard2 title="Butter fried noodles" image="../img/Snack cakes.png" time="16 minutes"
        image2="../img/Avatar (2).png"
        para="Butter fried noodles Savory noodles cooked in butter for a delicious and satisfying meal." name="Julia Lopez" />
    </div>
  </section>
);

export default EditorsPick;
