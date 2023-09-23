import { useReducer } from "react";

// initialState 는 카운터의 초기값
const initialState = { count: 0 };

// reducer 는 상태와 액션을 받아 새로운 상태를 반환하는 함수
//

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    // case "RESET":
    //   return 0;
    default:
      throw new Error("Invalid action type");
    // return state;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
    </>
  );
}
