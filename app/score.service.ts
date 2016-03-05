export class ScoreService {
  public score: number = 0;
  public counter: number = 0;

  incrementScore (): void {
    this.score++;
    this.counter++;
  }

  incrementCounter(): void {
    this.counter++;
  }

  resetScore (): void {
    this.score = 0;
    this.counter = 0;

  }

}
