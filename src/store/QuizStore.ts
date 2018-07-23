import { observable, reaction, action, toJS, computed } from "mobx";

import { generateQuizOptions } from "../data/quiz";
import { indexedElements, IElement } from "../data/items";
import { get, set, Store } from "idb-keyval";

const QUIZ_KEY = "quiz";
const STORE_NAME = "periodicquiz";
const STORAGE = new Store(STORE_NAME, STORE_NAME);

interface IPersistedData {
  optionsSymbol: string[];
  answerSymbol: string | null;
  score: number;
  count: number;
  selectedSymbol: string | null;
}

export class QuizStore {
  @observable
  public data: IPersistedData = {
    optionsSymbol: [],
    answerSymbol: null,
    selectedSymbol: null,
    score: 0,
    count: 0
  };

  @computed
  get score() {
    return this.data.score;
  }
  @computed
  get count() {
    return this.data.count;
  }
  @computed
  get options() {
    return this.data.optionsSymbol.map(symbol => indexedElements[symbol]);
  }
  @computed
  get answer() {
    return indexedElements[this.data.answerSymbol];
  }
  @computed
  get selected() {
    return indexedElements[this.data.selectedSymbol] || null;
  }

  constructor() {
    this.load();
    reaction(
      () => [this.data.count, this.data.selectedSymbol],
      () => this.save()
    );
    reaction(() => this.data.selectedSymbol, () => this.checkAnswer());
    reaction(() => this.data.count, () => this.nextQuiz(), { delay: 2500 });
  }

  @action
  public nextQuiz = () => {
    if (!this.data.count || !this.data.selectedSymbol) {
      return;
    }
    const { options, answer } = generateQuizOptions();
    this.data.selectedSymbol = null;
    this.data.optionsSymbol = options;
    this.data.answerSymbol = answer;
  };

  @action
  public checkAnswer = (symbol = this.data.selectedSymbol) => {
    if (!symbol) {
      return;
    }
    const correct = symbol === this.data.answerSymbol;
    if (correct) {
      this.data.score++;
    }
    this.data.count++;
  };

  @action
  public resetScore = () => {
    this.data.score = 0;
    this.data.count = 0;
  };

  @action
  public answerQuiz = (element: IElement) => {
    this.data.selectedSymbol = element.symbol;
  };

  @action
  public load = async () => {
    const { answer, options } = generateQuizOptions();
    const persistedData = await get<IPersistedData>(QUIZ_KEY, STORAGE);
    this.data = {
      optionsSymbol: options,
      answerSymbol: answer,
      score: 0,
      count: 0,
      ...persistedData,
      selectedSymbol: null
    };

    if (persistedData && persistedData.selectedSymbol !== null) {
      this.data.selectedSymbol = null;
      this.data.optionsSymbol = options;
      this.data.answerSymbol = answer;
    }

    this.save();
  };

  public save = async () => {
    await set(QUIZ_KEY, toJS(this.data), STORAGE);
  };
}
