import { observable } from "mobx";
import { indexedCountries } from "../data/indexed-countries";
import { ICountry } from "../data/countries";

export class CountryStore {
  @observable public country: ICountry;

  public loadCountry = (iso: string) => {
    if (this.country && this.country.iso === iso) {
      return;
    }
    const country = { ...indexedCountries[iso] };
    country.neighbours = country.neighbours.map(
      iso => (typeof iso === "string" ? indexedCountries[iso] : iso)
    );
    this.country = country;
  };
}
