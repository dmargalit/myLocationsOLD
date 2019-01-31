import uuid from 'uuid';
import { isArray } from 'util';

const getStorageLocations = () => {
  const snapshot = localStorage.getItem('locations');
  const locations = (snapshot) ? JSON.parse(snapshot) : [];
  return locations;
}

const setStorageLocations = (locations) => {
  const snapshot = JSON.stringify(locations);
  localStorage.setItem('locations', snapshot);
}

// ADD_LOCATION
export const addLocation = (location) => ({
  type: 'ADD_LOCATION',
  location
});

export const startAddLocation = (locationData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      address = '',
      coordinates = '',
      category = '',
    } = locationData;

    let locations = getStorageLocations();
    const location = { 
      id: uuid(), 
      name,
      address,
      coordinates,
      category
    };
    locations.push(location);

    setStorageLocations(locations);
    dispatch(addLocation(location));
  }
}

// REMOVE_LOCATION
export const removeLocation = ({ id } = {}) => ({
  type: 'REMOVE_LOCATION',
  id
});

export const startRemoveLocation = ({ id } = {}) => {
  return (dispatch) => {
    let locations = getStorageLocations();
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].id == id) {
        locations.splice(i, 1);
      }
    }
    setStorageLocations(locations);
    dispatch(removeLocation({ id }))
  }
}


// EDIT_LOCATION
export const editLocation = (id, updates) => ({
  type: 'EDIT_LOCATION',
  id,
  updates
});

// SET_LOCATIONS
export const setLocations = (locations) => ({
  type: 'SET_LOCATIONS',
  locations
});

export const startSetLocations = () => {
  return (dispatch) => {
    dispatch(setLocations(getStorageLocations()));
  }
}