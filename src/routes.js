import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from './components/app';
import FlagListIndex from './components/flag-list';
import CountryDetail from './components/country-detail';
import Quiz from './components/quiz';
import About from './components/about';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Quiz} />
    <Route path="about" component={About} />
    <Route path="flag-list" component={FlagListIndex} />
    <Route path="countries/:iso" component={CountryDetail} />
    <Route path=":from-:to" component={Quiz} />
  </Route>
);
