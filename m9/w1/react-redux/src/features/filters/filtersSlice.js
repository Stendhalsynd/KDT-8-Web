import { createSlice } from "@reduxjs/toolkit";

export const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const initialState = {
  status: StatusFilters.All,
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
    statusFilterChanged: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { statusFilterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
