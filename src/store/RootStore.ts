import { makeAutoObservable } from 'mobx';

export class RootStore {
  appCaption = 'CRA To-do';

  constructor() {
    makeAutoObservable(this);
  }
}
