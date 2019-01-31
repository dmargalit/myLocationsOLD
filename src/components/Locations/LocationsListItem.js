import React from 'react';
import { Link } from 'react-router-dom';

const LocationsListItem = ({ id, name, address, coordinates, category }) => (
  <div className="card mb-4 box-shadow">
    <div className="card-header">
      <Link to={`/locations/edit/${id}`}>
        <h3>{name}</h3>
      </Link>
    </div>
    <div className="card-body">
      <ul className="list-unstyled">
        <li>address: {address}</li>
        <li>coordinates: {coordinates}</li>
        <li>category: {category}</li>
      </ul>
    </div>
  </div>
);

export default LocationsListItem;
