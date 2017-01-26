import { TOGGLE_SCORE } from '../actions';
import { TOGGLE_DEBUG } from '../actions';

const INITIAL_STATE = {
  debug: false,
  score: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SCORE:
      return {
        ...state,
        score: !state.score
      };
    case TOGGLE_DEBUG:
      return {
        ...state,
        debug: !state.debug
      };
    default:
      return state;
  }
};
