import { observable } from "mobx";

export class SettingsStore {
  @observable public isScoreEnabled = true;
  @observable public debug = false;

  public toggleScore = () => {
    this.isScoreEnabled = !this.isScoreEnabled;
  };

  public toggleDebug = () => {
    this.debug = !this.debug;
  };
}
