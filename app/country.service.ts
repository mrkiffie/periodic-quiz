import {COUNTRIES} from './mock-countries';
import {Injectable} from 'angular2/core';
import {Random} from './random';
import {Country} from './country';

@Injectable()
export class CountryService {

  getAllCountries () {
    return Promise.resolve(COUNTRIES);
  }

  getRandomCountries (count: number = 4) {
    return Promise.resolve(Random.getRandomRange(COUNTRIES, count));
  }

}
