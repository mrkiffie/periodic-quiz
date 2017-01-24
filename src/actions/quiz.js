import {generateQuizOptions} from '../data/quiz';

export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const SET_QUIZ = 'SET_QUIZ';

export const setQuiz = (quiz) => ({
  type: SET_QUIZ,
  payload: quiz
});

export const fetchFlag = (country) => {
  return new Promise(resolve => {
    const flag = new Image();
    flag.onload = () => resolve();
    flag.src = country.flag
  });
};

export const wait = (time) => {
  return new Promise(resolve => setTimeout(() => resolve(), time));
};

export const loadQuiz = () => {
  return (dispatch) => {
    const quiz = generateQuizOptions();

    const flagsPromises = quiz.options.map(fetchFlag);
    return Promise.all(flagsPromises.concat(wait(2500)))
      .then(flags => dispatch(setQuiz(quiz)));
  }
}

export const selectCountry = (country = null) => ({
  type: SELECT_COUNTRY,
  payload: country,
});

export const answerQuiz = (country) => {
  return (dispatch) => {
    dispatch(selectCountry(country));
    dispatch(loadQuiz())
  }
}
