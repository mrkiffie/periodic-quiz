export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const LOAD_COUNTRY = 'LOAD_COUNTRY';
export const LOAD_QUIZ = 'LOAD_QUIZ';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export const loadQuiz = () => ({
  type: LOAD_QUIZ,
});

export const selectCountry = (country = null) => ({
  type: SELECT_COUNTRY,
  payload: country,
});

export const loadCountry = (iso = null) => ({
  type: LOAD_COUNTRY,
  payload: iso,
});

export const toggleMenu = (open = false) => ({
  type: TOGGLE_MENU,
  payload: open,
});
