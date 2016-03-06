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
      <button (click)="_scoreService.resetScore()">Restart</button>
      <flag-quiz></flag-quiz>
    `,
    styles: [`
        button {
            font-size: inherit;
            padding: .5em 1em;
            background: #dfdfdf;
            border: 0;
            color: #3e3e3e;
            border-radius: .25em;
            margin: 0 1em 1em;
        }
    `],
    directives: [FlagQuizComponent, ScoreComponent],
    providers: [CountryService, ScoreService]
})

export class AppComponent {

    title: string = 'Country Flag Quiz';

    constructor(private _countryService: CountryService, private _scoreService: ScoreService) { }

}
