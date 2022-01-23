/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskList: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks: (state, action) => {
      const tasks = action.payload;
      state.taskList = [...tasks, ...state.taskList];
    },

    removeTaskById: (state, action) => {
      const targetId = action.payload;
      state.taskList = state.taskList.filter(({ id }) => id !== parseInt(targetId, 10));
    },

    removeCompletedTasks: (state, action) => {
      state.taskList = state.taskList.filter(({ isDone }) => !isDone);
    },

    setIsDone: (state, action) => {
      const { id: targetId, checked: targetIsDone } = action.payload;
      state.taskList = state.taskList.map(
        (task) => (task.id === parseInt(targetId, 10) ? { ...task, isDone: targetIsDone } : task),
      );
    },

  },
});

export const {
  addTasks, removeTaskById, removeCompletedTasks, setIsDone,
} = tasksSlice.actions;

export default tasksSlice.reducer;
