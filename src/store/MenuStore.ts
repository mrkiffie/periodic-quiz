import { observable } from "mobx";

export class MenuStore {
  @observable public open = false;
  public toggleMenu = () => {
    this.open = !this.open;
  };
}
