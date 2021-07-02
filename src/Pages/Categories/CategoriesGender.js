import React from 'react';

export const CategoriesGender = ({ title, className }) => {
  return (
    <>
      <h3 className="filter-subtitle">{title}</h3>
      <ul className={className}>
        <li>M</li>
        <li>F</li>
      </ul>
    </>
  );
};
