export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const LOAD_COUNTRY = 'LOAD_COUNTRY';
export const LOAD_QUIZ = 'LOAD_QUIZ';

export function loadQuiz() {
  return {
    type: LOAD_QUIZ
  };
}

export function selectCountry(country = null) {
  return {
    type: SELECT_COUNTRY,
    payload: country
  };
}

export function loadCountry(iso = null){
  return {
    type: LOAD_COUNTRY,
    payload: iso
  };
}
