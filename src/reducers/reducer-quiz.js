import {generateQuizOptions} from '../data/quiz';
import {SELECT_COUNTRY, SET_QUIZ} from '../actions';
import {REHYDRATE} from 'redux-persist/constants'

const INITIAL_STATE = {
  options: null,
  answer: null,
  score: 0,
  count: 0,
  selected: null
};

export default function (state = INITIAL_STATE, action) {
  let correct;
  switch (action.type) {
    case REHYDRATE:
      let {quiz} = action.payload;
      if (!quiz || !quiz.answer) {
        quiz = generateQuizOptions();
      }
      return {
        ...state,
        ...quiz
      };
    case SELECT_COUNTRY:
      correct = action.payload.iso === state.answer.iso;
      return {
        ...state,
        score: correct ? state.score + 1 : state.score,
        count: state.count + 1,
        selected: action.payload,
      };
    case SET_QUIZ:
      return {
        ...state,
        ...action.payload,
        selected: null,
      };
    default:
      return state;
  }
}
