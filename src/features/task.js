import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
  try {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      return JSON.parse(tasks);
    }
  } catch (error) {
    console.error("Error loading tasks from local storage:", error);
  }
  return [];
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: loadTasksFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const updatedTasks = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    },
    markTaskComplete: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        state[taskIndex] = { ...state[taskIndex], done: true };
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
  },
});

export const { addTask, deleteTask, markTaskComplete } = taskSlice.actions;

export default taskSlice.reducer;
