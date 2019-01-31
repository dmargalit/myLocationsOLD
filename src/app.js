import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetCategories } from './actions/categories';
import { startSetLocations } from './actions/locations';

import './style/style.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(startSetCategories());
store.dispatch(startSetLocations());

ReactDOM.render(jsx, document.getElementById('app'));