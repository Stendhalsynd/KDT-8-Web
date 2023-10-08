import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import Counter from "./Counter";
import Login from "./Login";

// import store from "./store";
import { store } from "./store/index-toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Counter />
      <Login />
    </Provider>
  </StrictMode>
);

/*
// redux 를 이용한 코드
import { createStore } from "redux";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

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

const removeTodo = (event) => {
  event.preventDefault();
  store.dispatch({
    type: DELETE_TODO,
    id: Number(event.target.parentNode.id),
  });
};

store.subscribe(() => {
  const todos = store.getState();

  ul.innerHTML = "";
  todos.map((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    // btn.addEventListener("click", (event) => {
    //   event.preventDefault();
    //   store.dispatch({ type: DELETE_TODO, id: todo.id });
    // });
    btn.addEventListener("click", removeTodo);
    li.innerText = todo.text;
    li.id = todo.id;
    li.appendChild(btn);
    ul.appendChild(li);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  store.dispatch({ type: ADD_TODO, text: input.value });
  input.value = "";
});

// const action = [
//   {
//     type: "ADD",
//   },
//   {
//     type: "MINUS",
//   },
// ];

// // 리듀서는 데이터를 수정해주는 함수
// const countReducer = (state = 0, action) => {
//   console.log("나는 리듀서!");
//   switch (action.type) {
//     case "ADD":
//       return state + 1;
//     case "MINUS":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// // store 는 데이터를 넣는 곳
// // store 생성
// // createStore : store 생성, 리듀서 함수 필수

// const countStore = createStore(countReducer);
// console.log(countStore);

// // js 를 이용한 +1, -1 코드
// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });

// // getState() 는 createStore 로 생성된 저장소에서 최신상태의 값을 반환할 때 쓰는 메소드
// console.log("state : ", countStore.getState());

// let count = 0;

// add.addEventListener("click", () => {
//   count += 1;
//   num.textContent = count;
// });
// minus.addEventListener("click", () => {
//   count -= 1;
//   num.textContent = count;
// });

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
*/
