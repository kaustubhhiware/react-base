import React from 'react';
import {Route, IndexRoute} from 'react-router';

//component imports
import Main from '../components/Main';
import Home from '../components/Home';
import Search from '../components/Search';

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="search" component={Search}/>
  </Route>
);

export default routes;
