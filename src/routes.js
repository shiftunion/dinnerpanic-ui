import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import Plans from './components/Plans.js';
import Meals from './components/Meals.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
    <Route path="meals" component={Meals}>
      <Route path="add" component={Meals}/>
    </Route>
    <Route path="plans" component={Plans}/>
  </Route>
);
