import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <div className="Filter">
      <select onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </select>
    </div>
  );
}

export default Filter;

