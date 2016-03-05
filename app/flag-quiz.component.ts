import {Component, OnInit} from 'angular2/core';
import {Country} from './country';
import {CountryService} from './country.service';
import {ScoreService} from './score.service';
import {Random} from './random';

@Component({
    selector: 'flag-quiz',
    styleUrls: ['app/flag-quiz.component.css'],
    templateUrl: 'app/flag-quiz.component.html'
})

export class FlagQuizComponent implements OnInit {

    countries: Country[];
    selectedCountry: Country;

    ngOnInit() {
        this.getCountries();
    }

    constructor(private _countryService: CountryService, private _scoreService: ScoreService) { }

    onSelect(country) {
        if (country.iso3 === this.selectedCountry.iso3) {
            this.correctAnswer();
        } else {
            this.incorrectAnswer();
        }
    }

    getCountries() {
        this._countryService.getRandomCountries().then(countries => {
            this.countries = countries;
            this.selectedCountry = Random.getRandomItem(countries);
        });
    }

    correctAnswer(): void {
        this._scoreService.incrementScore();
        this.changeItem();
    }

    incorrectAnswer(): void {
        this._scoreService.incrementCounter();
        this.changeItem();
    }

    changeItem(): void {
        this.getCountries();
    }

}
