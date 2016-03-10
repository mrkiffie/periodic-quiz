import {Component, OnInit} from 'angular2/core';
import {Country} from './country';
import {CountryService} from './country.service';
import {ScoreService} from './score.service';
import {Random} from './random';
import {BaseQuizComponent} from './base-quiz.component';

@Component({
    selector: 'country-flag-quiz',
    styleUrls: ['app/country-flag-quiz.component.css'],
    templateUrl: 'app/country-flag-quiz.component.html'
})

export class CountryFlagQuizComponent extends BaseQuizComponent implements OnInit {

    constructor(protected _countryService: CountryService, protected _scoreService: ScoreService) {
        super(_countryService, _scoreService);
     }

    ngOnInit() {
        this.getCountries();
    }
}
