import React from 'react';

const navItems = [
  'Home',
  'Product',
  'Q & A',
  'News',
  'Blogs',
  'Classes',
];

function RenderNavItem() {
  return (
    <ul>
      {navItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default RenderNavItem;