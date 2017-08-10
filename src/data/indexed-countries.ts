import countries from "./countries";

const indexedCountries = countries.reduce(
  (hash, country) => ({
    ...hash,
    ...{ [country.iso]: country }
  }),
  {}
);

countries.forEach(country => {
  country.neighbours.forEach(iso => {
    const neighbour = indexedCountries[iso];
    if (!neighbour) {
      console.warn("country not found", iso);
    }
  });
});

export default indexedCountries;
