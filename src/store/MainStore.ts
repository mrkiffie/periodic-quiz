import { reaction } from "mobx";
import { MenuStore } from "./MenuStore";
import { QuizStore } from "./QuizStore";
import { ElementListStore } from "./ElementListStore";
import { SettingsStore } from "./SettingsStore";
import { SearchStore } from "./SearchStore";
import { ElementStore } from "./ElementStore";

export class MainStore {
  public settings = new SettingsStore();
  public menu = new MenuStore();
  public quiz = new QuizStore();
  public elements = new ElementListStore();
  public element = new ElementStore();
  public search = new SearchStore();
}
