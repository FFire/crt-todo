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

const elementsInit = {
  pendingTask: '',
};

export class UiStore {
  rootStore: RootStore;
  uiTheme: UiThemes = UiThemes.LIGHT;
  elements: Record<string, string> = elementsInit;
  pendingTaskContent = '';
  textFilterContent = '';
  stateFilerChecked = StateFilterNames.all;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setPendingTaskContent(value:string):void {
    this.pendingTaskContent = value;
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
}
