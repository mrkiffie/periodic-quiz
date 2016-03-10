import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CountryService} from './country.service';
import {ScoreService} from './score.service';
import {ScoreComponent} from './score.component';
import {FlagQuizComponent} from './flag-quiz.component';
import {CountryFlagQuizComponent} from './country-flag-quiz.component';

@Component({
    selector: 'country-quiz',
    template: `
      <nav>
        <a [routerLink]="['NameTheFlag']">Name the Flag</a>
        <a [routerLink]="['PinTheFlag']">Pin the Flag</a>
      </nav>

      <quiz-score [score]="_scoreService.score" [counter]="_scoreService.counter"></quiz-score>
      <button (click)="_scoreService.resetScore()">Restart</button>

      <router-outlet></router-outlet>
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
    directives: [ROUTER_DIRECTIVES, ScoreComponent],
    providers: [CountryService, ScoreService, ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/name-the-flag',
        name: 'NameTheFlag',
        component: FlagQuizComponent,
        useAsDefault: true
    },
    {
        path: '/pin-the-flag',
        name: 'PinTheFlag',
        component: CountryFlagQuizComponent
    }
])
export class AppComponent {

    constructor(private _countryService: CountryService, private _scoreService: ScoreService) { }

}
