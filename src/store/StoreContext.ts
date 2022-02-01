import React from 'react';
import { RootStore } from './RootStore';
import { TasksStore } from './TasksStore';
import { UiStore } from './UiStore';

const rootStore = new RootStore();

export const stores = {
  rootStore,
  tasksStore: new TasksStore(rootStore),
  uiStore: new UiStore(rootStore),
};

export default React.createContext(stores);
