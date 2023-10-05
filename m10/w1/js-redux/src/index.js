// redux 를 이용한 코드
import { createStore } from "redux";

const action = [
  {
    type: "ADD",
  },
  {
    type: "MINUS",
  },
];

// 리듀서는 데이터를 수정해주는 함수
const countReducer = (state = 0, action) => {
  console.log("나는 리듀서!");
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

// store 는 데이터를 넣는 곳
// store 생성
// createStore : store 생성, 리듀서 함수 필수

const countStore = createStore(countReducer);
console.log(countStore);

// js 를 이용한 +1, -1 코드
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const num = document.querySelector("#num");

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

// getState() 는 createStore 로 생성된 저장소에서 최신상태의 값을 반환할 때 쓰는 메소드
console.log("state : ", countStore.getState());

let count = 0;

add.addEventListener("click", () => {
  count += 1;
  num.textContent = count;
});
minus.addEventListener("click", () => {
  count -= 1;
  num.textContent = count;
});

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
