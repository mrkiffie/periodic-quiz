import { observable, computed } from "mobx";
import { elements } from "../data/items";
import matchSorter from "match-sorter";

export class SearchStore {
  @observable public elements = elements;
  @observable public term = "";

  public setSearchTerm = term => {
    this.term = term;
  };
  @computed
  get items() {
    return matchSorter(this.elements, this.term, {
      keys: ["symbol", "name", "number", "atomic_mass"]
    });
  }
}
