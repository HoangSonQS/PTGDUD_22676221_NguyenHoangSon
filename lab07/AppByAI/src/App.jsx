import React from 'react';
import Header from './components/Header';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import SummerRecipes from './components/SummerRecipes';
import VideoRecipes from './components/VideoRecipes';
import EditorsPick from './components/EditorsPick';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="font-sans">
      <Header />
      <RecipeOfTheDay />
      <SummerRecipes />
      <VideoRecipes />
      <EditorsPick />
      <Footer></Footer>
    </div>
  );
}

export default App;
