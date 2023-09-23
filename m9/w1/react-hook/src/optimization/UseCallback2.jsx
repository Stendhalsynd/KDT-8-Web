import { useState, useCallback } from "react";

export default function UseCallback2() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    console.log("useCallback 쓰지 않을때 count : ", count);
  };

  const incrementCount = useCallback(() => {
    console.log("count : ", count);
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <button onClick={incrementCount}>{count}</button>
    </>
  );
}
