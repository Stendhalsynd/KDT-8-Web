import { useState } from "react";

export default function FunctionCounter() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </>
  );
}
