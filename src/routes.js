import React from 'react';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

import App from './components/App';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import Plans from './components/Plans.js';
import Meals from './components/Meals.js';
import Charts from './components/Charts.js';


export default (

  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="meals" components={{ content: Meals }}/>
      <Route path="charts" components={{ content: Charts }}/>
      <Route path="plans" components={{ content: Plans }}/>

    </Route>
  </Router>

/*<Router history={browserHistory}>
  <Route path="/" component={App}>
    <Route path="category/:category" components={{ content: Category, sidebar: CategorySidebar }}>
      <Route path=":item" component={Item} />
    </Route>
  </Route>
</Router>*/


);
/*

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
*/
