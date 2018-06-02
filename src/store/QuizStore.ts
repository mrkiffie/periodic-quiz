import { observable, reaction, action, toJS, computed } from "mobx";

import { generateQuizOptions } from "../data/quiz";
import { ICountry } from "../data/countries";
import { indexedCountries } from "../data/indexed-countries";
import { get, set, Store } from "idb-keyval";

const QUIZ_KEY = "quiz";
const STORE_NAME = "flagquiz";
const STORAGE = new Store(STORE_NAME, STORE_NAME);

interface IPersistedData {
  optionsIso: string[];
  answerIso: string | null;
  score: number;
  count: number;
  selectedIso: string | null;
}

export class QuizStore {
  @observable
  public data: IPersistedData = {
    optionsIso: [],
    answerIso: null,
    selectedIso: null,
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
    return this.data.optionsIso.map(iso => indexedCountries[iso]);
  }
  @computed
  get answer() {
    return indexedCountries[this.data.answerIso];
  }
  @computed
  get selected() {
    return indexedCountries[this.data.selectedIso] || null;
  }

  constructor() {
    this.load();
    reaction(() => [this.data.count, this.data.selectedIso], () => this.save());
    reaction(() => this.data.selectedIso, () => this.checkAnswer());
    reaction(() => this.data.count, () => this.nextQuiz(), { delay: 2500 });
  }

  @action
  public nextQuiz = () => {
    if (!this.data.count || !this.data.selectedIso) {
      return;
    }
    const { options, answer } = generateQuizOptions();
    this.data.selectedIso = null;
    this.data.optionsIso = options;
    this.data.answerIso = answer;
  };

  @action
  public checkAnswer = (iso = this.data.selectedIso) => {
    if (!iso) {
      return;
    }
    const correct = iso === this.data.answerIso;
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
  public answerQuiz = (country: ICountry) => {
    this.data.selectedIso = country.iso;
  };

  @action
  public load = async () => {
    const { answer, options } = generateQuizOptions();
    const persistedData = await get<IPersistedData>(QUIZ_KEY, STORAGE);
    this.data = {
      optionsIso: options,
      answerIso: answer,
      score: 0,
      count: 0,
      ...persistedData,
      selectedIso: null
    };

    if (persistedData && persistedData.selectedIso !== null) {
      this.data.selectedIso = null;
      this.data.optionsIso = options;
      this.data.answerIso = answer;
    }

    this.save();
  };

  public save = async () => {
    await set(QUIZ_KEY, toJS(this.data), STORAGE);
  };
}
