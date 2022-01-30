import { makeAutoObservable } from 'mobx';

export const enum UiThemes {
  LIGHT = 'light',
  DARK = 'dark',
}

class UiStore {
  mobxUiTheme: UiThemes = UiThemes.LIGHT;

  constructor() {
    makeAutoObservable(this);
  }

  setUiTheme(uiTheme: UiThemes): void {
    this.mobxUiTheme = uiTheme;
  }
}

export default new UiStore();
