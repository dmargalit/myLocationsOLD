import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import WelcomePage from '../components/WelcomePage';
import NotFoundPage from '../components/NotFoundPage';

import CatgoriesList from '../components/Categories/CatgoriesList';
import AddCategoryPage from '../components/Categories/AddCategoryPage';
import EditCategoryPage from '../components/Categories/EditCategoryPage';

import LocationsList from '../components/Locations/LocationsList';
import AddLocationPage from '../components/Locations/AddLocationPage';
import EditLocationPage from '../components/Locations/EditLocationPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="row">
        <Switch>
          <Route path="/" component={WelcomePage} exact={true} />
          <Route path="/categories" component={CatgoriesList} exact={true} />
          <Route path="/categories/edit/:id" component={EditCategoryPage} />
          <Route path="/locations" component={LocationsList} exact={true} />
          <Route path="/locations/edit/:id" component={EditLocationPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
