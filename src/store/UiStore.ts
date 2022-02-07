/* eslint-disable lines-between-class-members */
import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export const enum UiThemes {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum StateFilterNames {
  all = 'All',
  active= 'Active',
  completed= 'Completed',
}

export class UiStore {
  rootStore: RootStore;
  private uiTheme: UiThemes = UiThemes.DARK;
  private pendingTaskContent = '';
  private textFilterContent = '';
  private stateFilerChecked = StateFilterNames.all;
  private errorMesage = '';

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setErrorMessage(message: string):void {
    this.errorMesage = message;
  }

  get getErrorMessage(): string {
    return this.errorMesage;
  }

  setPendingTaskContent(value:string):void {
    this.pendingTaskContent = value;
  }

  get getPendingTaskContent(): string {
    return this.pendingTaskContent;
  }

  setStateFilter(stateFilterValue: StateFilterNames): void {
    this.stateFilerChecked = stateFilterValue;
  }

  get getStateFilter(): StateFilterNames {
    return this.stateFilerChecked;
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
  get getDarkMode():boolean {
    return this.uiTheme === UiThemes.DARK;
  }
}
