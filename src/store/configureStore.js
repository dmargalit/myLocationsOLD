import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import categoriesReducer from '../reducers/categories';
import locationsReducer from '../reducers/locations';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      categories: categoriesReducer,
      locations: locationsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
