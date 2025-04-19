import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center px-6 py-4 shadow">
    <img src="../img/Group 9.png" alt="" />
    <div className="flex items-center border px-3 py-1 w-1/3 bg-white" style={{ border: "1px solid black", borderRadius: "8px",color: "black" }}>
      <img src="../img/search.png" alt="search icon" className="w-4 h-4 mr-2" />
      <input
        type="text"
        placeholder="What would you like to cook?"
        className="w-full outline-none text-black rounded-md"
        style={{ backgroundColor: "white", color: "black", width: "100%" }}
      />
    </div>


    <nav className="space-x-4">
      <a href="#">What to cook</a>
      <a href="#">Recipes</a>
      <a href="#">Ingredients</a>
      <a href="#">Occasions</a>
      <a href="#">About Us</a>
    </nav>
    <div className="space-x-2">
      <button className="text-pink-500" style={{backgroundColor :"white", color:"#EF4B85", border :"none"}}>Login</button>
      <button style={{backgroundColor : "#EF4B85", borderRadius : "8px"}} className="text-white px-3 py-1 ">Subscribe</button>
    </div>
  </header>
);

export default Header;
