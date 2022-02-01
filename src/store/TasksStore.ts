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

export class TasksStore {
  mobxTasks: ITask[] = [];
  isLoading = false;
  dataLayer:ITask[] = initialTasks;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  loadTasks():void {
    this.mobxTasks = this.dataLayer;
    this.isLoading = true;
  }

  setIsDone(targetId:number, targetIsDone:boolean): void {
    this.mobxTasks = this.mobxTasks.map((task) => (task.id === targetId
      ? { ...task, isDone: targetIsDone }
      : task));
  }

  deleteCompleted(): void {
    this.mobxTasks = this.mobxTasks.filter(({ isDone }) => !isDone);
  }

  deleteById(targetId: number): void {
    this.mobxTasks = this.mobxTasks.filter(({ id }) => id !== targetId);
  }

  addTasks(newTasks: ITask[]): void {
    this.mobxTasks = [...newTasks, ...this.mobxTasks];
  }

  get statistic(): IStatistic {
    const taskCount = this.mobxTasks.length;
    const completedTaskCount = this.mobxTasks.filter(({ isDone }) => !isDone).length;
    return { completedTaskCount, taskCount };
  }
}
