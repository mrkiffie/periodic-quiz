import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Country} from './country';
import {FlagQuizComponent} from './flag-quiz.component';
import {ScoreComponent} from './score.component';
import {CountryService} from './country.service';
import {ScoreService} from './score.service';
import {Random} from './random';

@Component({
    selector: 'country-quiz',
    template: `
      <h1>{{title}}</h1>
      <quiz-score [score]="_scoreService.score" [counter]="_scoreService.counter"></quiz-score>

      <flag-quiz></flag-quiz>
    `,
    styles: [``],
    directives: [FlagQuizComponent, ScoreComponent],
    providers: [CountryService, ScoreService]
})

export class AppComponent implements OnInit {

    title: string = 'Country Flag Quiz';
    score: number;

    constructor(private _countryService: CountryService, private _scoreService: ScoreService) { }

    ngOnInit() {
        this.populateScore();
    }

    populateScore() {
        this._scoreService.resetScore();
    }
}
