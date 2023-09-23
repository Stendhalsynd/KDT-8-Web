import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false },
  ],
  filters: {
    status: "All",
  },
};

// Create a utility function to generate the next todo ID
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.todos.push({
        id: nextTodoId(state.todos),
        text: action.payload,
        completed: false,
      });
    },
    todoToggled: (state, action) => {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    todoDeleted: () => {},
    allCompleted: () => {},
    completedCleared: () => {},
    statusFilterChanged: () => {},
  },
});

export const { statusFilterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
