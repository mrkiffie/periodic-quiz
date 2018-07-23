import { Random } from "../util/Random";
import { elements } from "./items";

export const QUIZ_OPTIONS_COUNT = 6;

let queue: string[] = [];

export const generateQuizOptions = (num = QUIZ_OPTIONS_COUNT) => {
  if (queue.length > elements.length * 0.2) {
    queue = queue.slice(1);
  }

  const options = Random.getRandomRange(
    elements.filter(element => !queue.includes(element.symbol)),
    num
  ).map(element => element.symbol);
  const answer = Random.getRandomRange(options, 1)[0];

  queue.push(answer);

  return {
    options,
    answer
  };
};
