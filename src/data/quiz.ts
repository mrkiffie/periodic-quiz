import { Random } from "../util/Random";
import countries, { ICountry } from "../data/countries";

export const QUIZ_OPTIONS_COUNT = 5;

type Iso = string;

let queue: Iso[] = [];

export const generateQuizOptions = (num = QUIZ_OPTIONS_COUNT) => {
  if (queue.length > countries.length * 0.2) {
    queue = queue.slice(1);
  }

  const options = Random.getRandomRange(
    countries.filter(country => !queue.includes(country.iso)),
    num
  ).map(country => country.iso);
  const answer = Random.getRandomRange(options, 1)[0];

  queue.push(answer);

  return {
    options,
    answer
  };
};
