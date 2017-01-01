import countries from './countries';

const indexedCountries = countries.reduce((map, country) => {
  map[country.iso] = country;
  return map;
}, {});

countries.forEach(country => {
  country.neighbours.forEach(iso => {
    const neighbour = indexedCountries[iso];
    if (!neighbour) {
      console.log('country not found', iso);
    }
  });
});

export default indexedCountries;