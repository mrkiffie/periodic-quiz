import { observable } from "mobx";
import { IElement, indexedElements } from "../data/items";

export class ElementStore {
  @observable
  public element: IElement;

  public loadDetail = (symbol: string) => {
    if (this.element && this.element.symbol === symbol) {
      return;
    }
    this.element = indexedElements[symbol];
  };
}
