import React from 'react';
import { Link } from 'react-router-dom';

const CategoryListItem = ({ id, name }) => (
  <div>
    <Link to={`/categories/edit/${id}`}>
      <h3>{name}</h3>
    </Link>
  </div>
);

export default CategoryListItem;
