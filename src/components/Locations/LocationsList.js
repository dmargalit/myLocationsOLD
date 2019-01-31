import React from 'react';
import { connect } from 'react-redux';
import LocationsListItem from './LocationsListItem';
import AddLocationPage from './AddLocationPage';
import selectLocations from '../../selectors/locations';

export const LocationsList = (props) => (
  <div>
    <div className="container">
      <div className="card-deck mb-3 text-center">
        {
          props.locations.length ? (
              props.locations.map((location) => {
                return <LocationsListItem key={location.id} {...location} />;
              })
            ) : ''
        }
      </div>
    </div>
    <div className="col">
      <hr className="mb-4" />
    </div>
    <AddLocationPage />
  </div>
);

const mapStateToProps = (state) => {
  return {
    locations: selectLocations(state.locations)
  };
};

export default connect(mapStateToProps)(LocationsList);
