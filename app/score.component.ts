import {Component} from 'angular2/core';

@Component({
    selector: 'quiz-score',
    template: `<div>Score: {{score}} / {{counter}}</div>`,
    inputs: ['score', 'counter']
})

export class ScoreComponent {

    score: number;
    counter: number;

}
