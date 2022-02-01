import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export const enum UiThemes {
  LIGHT = 'light',
  DARK = 'dark',
}

export class UiStore {
  mobxUiTheme: UiThemes = UiThemes.LIGHT;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setUiTheme(uiTheme: UiThemes): void {
    this.mobxUiTheme = uiTheme;
  }
}
