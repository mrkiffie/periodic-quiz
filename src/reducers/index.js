import { combineReducers } from 'redux';
import QuizReducer from './reducer-quiz';
import CountryListReducer from './reducer-country-list';
import CountryReducer from './reducer-country';

const rootReducer = combineReducers({
  quiz: QuizReducer,
  countries: CountryListReducer,
  country: CountryReducer
});

export default rootReducer;
