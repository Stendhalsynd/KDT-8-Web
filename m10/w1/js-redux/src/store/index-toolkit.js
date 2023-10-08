import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
  },
});

const initLogin = { isLogin: false };
const loginSlice = createSlice({
  name: "login",
  initialState: initLogin,
  reducers: {
    login: (state) => {
      console.log("로그인");
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// });

// export const store = configureStore({
//   reducer: counterSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    login: loginSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const loginAction = loginSlice.actions;
