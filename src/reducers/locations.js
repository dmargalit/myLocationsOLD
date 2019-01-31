// Locations Reducer

const locationsReducerDefaultState = [];

export default (state = locationsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [
        ...state,
        action.location
      ];
    case 'REMOVE_LOCATION':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_LOCATION':
      return state.map((location) => {
        if (location.id === action.id) {
          return {
            ...location,
            ...action.updates
          };
        } else {
          return location;
        };
      });
    case 'SET_LOCATIONS':
      return action.locations;
    default:
      return state;
  }
};
