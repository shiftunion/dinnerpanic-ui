import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import {Route, IndexRoute, Router, browserHistory} from 'react-router';

import App from './components/App';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import Plans from './components/Plans.js';
import Meals from './components/Meals.js';
import Charts from './components/Charts.js';
import Calendar from './components/Calendar.js';


const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>


        <Route path="meals" components={{ content: Meals }}/>
        <Route path="charts" components={{ content: Charts }}/>
        <Route path="plans" components={{ content: Plans }}/>
        <Route path="calendar/:timePeriod" components={{ content: Calendar }}>

        </Route>
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);


/*        <Route path="category/:category" components={{ content: Category, sidebar: CategorySidebar }}>
 <Route path=":item" component={Item} />*/
