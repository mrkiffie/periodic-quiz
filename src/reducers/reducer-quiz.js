import Random from '../util/random';
import countries from '../data/countries';
import { SELECT_COUNTRY, LOAD_QUIZ } from '../actions';

const NUMBER_OF_CHOICES = 5;

const options = Random.getRandomRange(countries, NUMBER_OF_CHOICES);
const answer = Random.getRandomRange(options, 1)[0];

const INITIAL_STATE = {
  options,
  answer,
  score: 0,
  count: 0,
  selected: null,
};

export default function (state = INITIAL_STATE, action) {
  const options = Random.getRandomRange(countries, NUMBER_OF_CHOICES);
  const answer = Random.getRandomRange(options, 1)[0];
  let correct;

  switch (action.type) {
    case SELECT_COUNTRY:
      correct = action.payload.iso === state.answer.iso;
      return {
        ...state,
        score: correct ? state.score + 1 : state.score,
        count: state.count + 1,
        selected: action.payload,
      };
    case LOAD_QUIZ:
      return {
        ...state,
        options,
        answer,
        selected: null,
      };
    default:
      return state;
  }
}
