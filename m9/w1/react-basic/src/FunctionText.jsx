import { useState } from "react";

export default function FunctionText() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");

  const handleRed = () => {
    setText("빨간색 글씨");
    setColor("red");
  };

  const handleBlue = () => {
    setText("파란색 글씨");
    setColor("blue");
  };

  return (
    <>
      <h1 style={{ color }}>{text}</h1>
      <button onClick={handleRed}>빨간색</button>
      <button onClick={handleBlue}>파란색</button>
    </>
  );
}
