import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import CountryList from './components/country-list';
import CountryDetail from './components/country-detail';
import CountryFlagQuiz from './components/country-flag-quiz';
import CapitalFlagQuiz from './components/capital-flag-quiz';
import CountryCapitalQuiz from './components/country-capital-quiz';
import CapitalCountryQuiz from './components/capital-country-quiz';
import FlagCountryQuiz from './components/flag-country-quiz';
import FlagCapitalQuiz from './components/flag-capital-quiz';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CountryList}/>
    <Route path="flag-country" component={FlagCountryQuiz}/>
    <Route path="flag-capital" component={FlagCapitalQuiz}/>
    <Route path="country-flag" component={CountryFlagQuiz}/>
    <Route path="capital-flag" component={CapitalFlagQuiz}/>
    <Route path="capital-country" component={CapitalCountryQuiz}/>
    <Route path="country-capital" component={CountryCapitalQuiz}/>
    <Route path="countries/:iso" component={CountryDetail}/>
  </Route>
);
