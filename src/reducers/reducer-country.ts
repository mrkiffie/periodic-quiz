import { indexedCountries } from "../data/indexed-countries";
import { LOAD_COUNTRY } from "../actions/index";

export default (state = null, action) => {
  const iso = action.payload;

  switch (action.type) {
    case LOAD_COUNTRY:
      const country = { ...indexedCountries[iso] };
      country.neighbours = country.neighbours.map(iso => (typeof iso === "string" ? indexedCountries[iso] : iso));
      return country;
    default:
      return state;
  }
};
