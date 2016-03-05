import {Component} from 'angular2/core';
import {Country} from './country';

@Component({
  selector: 'country-detail',
  template: `
  <div *ngIf="country">
    <h2>{{country.country}}</h2>
    <div>{{country.capital}}</div>
  </div>
`,
  inputs: ['country']

})

export class CountryDetailComponent {
  public country: Country;
}
