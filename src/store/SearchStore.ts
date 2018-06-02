import { observable, computed } from "mobx";
import countries from "../data/countries";
import { default as matchSorter } from "match-sorter";

export class SearchStore {
  @observable public countries = countries;
  @observable public term = "";

  public setSearchTerm = term => {
    this.term = term;
  };
  @computed
  get filteredCountries() {
    return matchSorter(this.countries, this.term, {
      keys: ["name", "capital"]
    });
  }
}
