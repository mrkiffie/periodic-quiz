export class ScoreService {
  public score: number = 0;
  public counter: number = 0;

  constructor() {
    this.restoreScore();
  }

  incrementScore(): void {
    this.score++;
    this.counter++;
    localStorage.setItem('score', this.score);
    localStorage.setItem('counter', this.counter);
  }

  incrementCounter(): void {
    this.counter++;
    localStorage.setItem('counter', this.counter);
  }

  resetScore(): void {
    this.score = 0;
    this.counter = 0;
    localStorage.setItem('score', this.score);
    localStorage.setItem('counter', this.counter);

  }

  restoreScore(): void {
      this.score = localStorage.getItem('score') || 0;
      this.counter = localStorage.getItem('counter') || 0;
  }

}
