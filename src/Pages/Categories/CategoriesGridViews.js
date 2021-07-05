import React from 'react';
import { GridIconSVG } from './CategoriesIcons/GridIconSVG';
import { ListIconSVG } from './CategoriesIcons/ListIconSVG';

export const CategoriesGridViews = () => {
  const [gridView, setGridView] = React.useState(true);

  return (
    <div className="view-icons-container">
      <div onClick={() => setGridView(!gridView)} className="view-grid">
        {gridView ? (
          <GridIconSVG className="view-icon-ativo" />
        ) : (
          <GridIconSVG className="view-icon" />
        )}
      </div>
      <div onClick={() => setGridView(!gridView)} className="view-list">
        {gridView ? (
          <ListIconSVG className="view-icon" />
        ) : (
          <ListIconSVG className="view-icon-ativo" />
        )}
      </div>
    </div>
  );
};
