import { makeAutoObservable } from 'mobx';

class TasksStore {
  mobxTasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  setIsDone(targetId, targetIsDone) {
    this.mobxTasks = this.mobxTasks.map((task) => (task.id === parseInt(targetId, 10)
      ? { ...task, isDone: targetIsDone }
      : task));
  }

  deleteCompleted() {
    this.mobxTasks = this.mobxTasks.filter(({ isDone }) => !isDone);
  }

  deleteById(targetId) {
    this.mobxTasks = this.mobxTasks.filter(({ id }) => id !== parseInt(targetId, 10));
  }

  addTasks(newTasks) {
    this.mobxTasks = [...newTasks, ...this.mobxTasks];
  }

  get statistic() {
    const taskCount = this.mobxTasks.length;
    const completedTaskCount = this.mobxTasks.filter(({ isDone }) => !isDone).length;
    return { completedTaskCount, taskCount };
  }
}

export default new TasksStore();
