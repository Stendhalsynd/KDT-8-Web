import { useState, useCallback } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const incrementCount = useCallback(() => {
    console.log("함수 실행");
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Child1Component onClick={incrementCount} />
      <p>Count: {count}</p>
    </>
  );
}

function Child1Component({ onClick }) {
  console.log("child1 component render");
  return <button onClick={onClick}>Increment Count1</button>;
}
