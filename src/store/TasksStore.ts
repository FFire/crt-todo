/* eslint-disable lines-between-class-members */
import { makeAutoObservable } from 'mobx';
import * as yup from 'yup';
import { ValidationError } from 'yup';
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
  rootStore: RootStore;
  private tasks: ITask[] = [];
  private isLoading = true;
  private filters: IFilter[] = [];

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

  makeNewTask(taskText:string): ITask {
    const id = Math.max(...this.tasks.map((task) => task.id)) + 1;
    const isDone = false;
    const newTask = { id, text: taskText, isDone };

    return newTask;
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

  getValidateErrors(taskText: string): string {
    try {
      yup.string()
        .required('Task is required')
        .min(5, 'Task must be minimum 5 letters')
        .notOneOf(this.getAllTasksText, 'Task already exist')
        .validateSync(taskText.toLowerCase());

      return '';
    } catch (err) { return (err as ValidationError).message; }
  }

  get getTasks(): ITask[] {
    return this.tasks;
  }

  get getAllTasksText(): string[] {
    return this.tasks.map(({ text }) => text);
  }

  get statistic(): IStatistic {
    const taskCount = this.tasks.length;
    const completedTaskCount = this.tasks.filter(({ isDone }) => !isDone).length;
    return { completedTaskCount, taskCount };
  }

  get getFilteredTasks():ITask[] {
    return this.filters.reduce((acc, { fn }):ITask[] => acc.filter((task) => fn(task)), this.tasks);
  }

  get getIsLoading(): boolean {
    return this.isLoading;
  }
}
