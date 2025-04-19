import React from 'react';
import RecipeCard from './RecipeCard';
import '../App.css';

const VideoRecipes = () => (
  <section className="video-section">
    <h2 className="video-title">Recipes With Videos</h2>
    <p className="video-subtitle">Cooking Up Culinary Creations with Step-by-Step Videos</p>
    <div className="video-grid">
      <RecipeCard title="Salad with cabbage and shrimp" image="../img/Salad with cabbage.png" time="32 minutes" />
      <RecipeCard title="Salad of cove beans, shrimp and potatoes" image="../img/Bean, shrimp, and potato salad.png" time="20 minutes" />
      <RecipeCard title="Sunny-side up fried egg" image="../img/Sunny-side up fried eggs.png" time="15 minutes" />
      <RecipeCard title="Lotus delight salad" image="../img/Lotus delight salad_01.png" time="20 minutes" />
    </div>
  </section>
);

export default VideoRecipes;
