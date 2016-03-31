import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import Plans from './components/Plans.js';
import Meals from './components/Meals.js';
import Charts from './components/Charts.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Meals}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
    <Route path="charts" component={Charts}/>
    <Route path="meals" component={Meals}>
      <Route path="add" component={Meals}/>
    </Route>
    <Route path="plans" component={Plans}/>
  </Route>
);
