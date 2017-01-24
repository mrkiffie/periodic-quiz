import Random from '../util/random';
import countries from '../data/countries';

export const QUIZ_OPTIONS_COUNT = 5;

export const generateQuizOptions = (num = QUIZ_OPTIONS_COUNT) => {
  const options = Random.getRandomRange(countries, num);
  const answer = Random.getRandomRange(options, 1)[0];
  return {
    options,
    answer
  }
}
