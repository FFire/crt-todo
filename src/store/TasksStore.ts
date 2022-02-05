/* eslint-disable lines-between-class-members */
import { makeAutoObservable } from 'mobx';
import { initialTasks } from '../fixtures/initialTasks';
import { RootStore } from './RootStore';

export interface IStatistic {
  completedTaskCount: number
  taskCount: number
}

export interface ITask {
  id: number;
  text: string;
  isDone: boolean;
}

export interface IFilter {
  type: 'text' | 'state';
  fn: (task: ITask) => boolean;
}

export class TasksStore {
  tasks: ITask[] = [];
  isLoading = true;
  dataLayer:ITask[] = initialTasks;
  filters: IFilter[] = [];
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setIsDone(targetId:number, targetIsDone:boolean): void {
    this.tasks = this.tasks.map((task) => (task.id === targetId
      ? { ...task, isDone: targetIsDone }
      : task));
  }

  deleteCompleted(): void {
    this.tasks = this.tasks.filter(({ isDone }) => !isDone);
  }

  deleteById(targetId: number): void {
    this.tasks = this.tasks.filter(({ id }) => id !== targetId);
  }

  addTasks(newTasks: ITask[]): void {
    this.tasks = [...newTasks, ...this.tasks];
  }

  loadTasks(): void {
    this.addTasks(initialTasks);
    this.isLoading = false;
  }

  setFilter(newFilter: IFilter): void {
    const withoutFilter = this.filters.filter(({ type }) => type !== newFilter.type);
    this.filters = [...withoutFilter, newFilter];
  }

  get statistic(): IStatistic {
    const taskCount = this.tasks.length;
    const completedTaskCount = this.tasks.filter(({ isDone }) => !isDone).length;
    return { completedTaskCount, taskCount };
  }

  get getFilteredTasks():ITask[] {
    return this.filters.reduce((acc, { fn }):ITask[] => acc.filter((task) => fn(task)), this.tasks);
  }
}
