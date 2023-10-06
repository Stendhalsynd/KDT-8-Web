import { createStore } from "redux";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const id = state.length;
      const newTodo = { text: action.text, id };
      return [...state, newTodo];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

export default store;
