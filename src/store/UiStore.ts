/* eslint-disable lines-between-class-members */
import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export const enum UiThemes {
  LIGHT = 'light',
  DARK = 'dark',
}
const elementsInit = {
  pendingTask: '',
};

export class UiStore {
  rootStore: RootStore;
  uiTheme: UiThemes = UiThemes.LIGHT;
  elements: Record<string, string> = elementsInit;
  textFilterContent = '';

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setTextFilterContent(content: string): void {
    this.textFilterContent = content;
  }

  get getTextFilterContent():string {
    return this.textFilterContent;
  }

  setUiTheme(uiTheme: UiThemes): void {
    this.uiTheme = uiTheme;
  }

  get getUiTheme():UiThemes {
    return this.uiTheme;
  }
}
