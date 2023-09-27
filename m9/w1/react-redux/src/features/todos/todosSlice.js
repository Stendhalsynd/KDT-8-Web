import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  todos: [
    // { id: 0, text: "Learn React", completed: true },
    // { id: 1, text: "Learn Redux", completed: false },
  ],
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await axios.get("http://localhost:8000/todos");
    let dbTodos = response.data.map((todoData) => ({
      id: todoData.id - 1,
      text: todoData.title,
      completed: todoData.done === 1,
    }));
    return dbTodos;
  } catch (error) {
    console.error("error fetching todos : ", error);
    return [];
  }
});

export const todoAdded = createAsyncThunk(
  "todos/todoAdded",
  async (payload, { dispatch }) => {
    try {
      // 서버에 추가할 데이터를 준비합니다.
      const requestData = {
        title: payload,
        done: 0, // 이 부분은 기본값으로 설정하거나 payload에서 받아오도록 변경해야 할 수 있습니다.
      };

      // 서버에 POST 요청을 보냅니다.
      const response = await axios.post(
        "http://localhost:8000/todo",
        requestData
      );

      // 성공한 경우, 서버에서 받은 데이터를 리듀서로 추가합니다.
      if (response.result)
        dispatch(
          todosSlice.actions.addTodo({
            text: payload,
            completed: false,
          })
        );

      // 여기서 response.data는 서버에서 추가된 할 일의 정보를 포함합니다.
      // 서버에서 할 일의 ID 등을 생성하는 방식에 따라서 이 부분을 조정할 수 있습니다.
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async ({ id, newText, completed }, { dispatch, getState }) => {
    const currentState = getState();
    const isDone = currentState.todos.todos.find(
      (todo) => todo.id === id
    ).completed;

    try {
      const response = await axios.patch(
        `http://localhost:8000/todo/${id + 1}`,
        {
          title: newText,
          done: isDone ? 1 : 0,
        }
      );

      console.log("resposne : ", response);

      if (response.data.result) {
        console.log("newText, completed : ", newText, completed);
        dispatch(
          todosSlice.actions.editTodoState({
            id,
            text: newText,
            completed,
          })
        );
      }
    } catch (error) {
      console.error("Error editing todo:", error);
      throw error;
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoToggled: (state, action) => {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    allCompleted: (state) => {
      state.todos = state.todos.map((todo) => ({
        ...todo,
        completed: true,
      }));
    },
    completedCleared: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    // 서버에서 추가된 할 일을 state에 추가하는 액션
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    editTodoState: (state, action) => {
      const { id, text, completed } = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text,
            completed,
          };
        }
        return todo;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        // 비동기 액션 호출이 성공한 경우, 데이터를 상태에 업데이트합니다.
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        // 비동기 액션 호출이 실패한 경우, 에러를 처리할 수 있습니다.
        console.error("Error fetching todos:", action.error);
      });
  },
});

export const maxId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;

export const todos = (state) => state.todos;

export const completedTodos = (state) =>
  state.todos.filter((todo) => todo.completed === true);

export const { todoToggled, todoDeleted, allCompleted, completedCleared } =
  todosSlice.actions;

export default todosSlice.reducer;
