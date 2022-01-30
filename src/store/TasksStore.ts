import { makeAutoObservable } from 'mobx';
import { ITask } from '../components/TaskList/TaskItem/TaskItem';

export interface IStatistic {
  completedTaskCount: number
  taskCount: number
}

class TasksStore {
  mobxTasks: ITask[] = [];

  constructor() {
    makeAutoObservable(this);
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

export default new TasksStore();
