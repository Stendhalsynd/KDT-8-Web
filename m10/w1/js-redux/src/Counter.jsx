import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/index-toolkit";

export default function Counter() {
  const number = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(counterAction.increment());
  };
  const minus = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={minus}>MINUS</button>
    </div>
  );
}
