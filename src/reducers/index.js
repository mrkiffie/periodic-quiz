import { combineReducers } from 'redux';
import QuizReducer from './reducer-quiz';
import CountryListReducer from './reducer-country-list';
import CountryReducer from './reducer-country';
import MenuReducer from './reducer-menu';

const rootReducer = combineReducers({
  menu: MenuReducer,
  quiz: QuizReducer,
  countries: CountryListReducer,
  country: CountryReducer,
});

export default rootReducer;
