import React from 'react';

const CategoryFilter = ({ categories }) => {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <div key={category.id} className="category-item">
          <span className="category-icon">
            <img src={category.image} alt={category.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
          </span>
          <span className="category-name">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;