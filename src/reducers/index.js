import { combineReducers } from 'redux';
import QuizReducer from './reducer-quiz';
import CountryListReducer from './reducer-country-list';
import CountryReducer from './reducer-country';
import MenuReducer from './reducer-menu';
import SettingsReducer from './reducer-settings';

const rootReducer = combineReducers({
  settings: SettingsReducer,
  menu: MenuReducer,
  quiz: QuizReducer,
  countries: CountryListReducer,
  country: CountryReducer,
});

export default rootReducer;
