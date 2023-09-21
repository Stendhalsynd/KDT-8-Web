import { useState } from "react";

export default function FunctionDisappear() {
  const [text, setText] = useState("사라져라 ");
  const [status, setStatus] = useState(true);

  const toggleAppear = () => {
    setStatus((prev) => !prev);
    setText((prev) => (prev === "보여라" ? "사라져라" : "보여라"));
  };

  return (
    <>
      <button onClick={toggleAppear}>{text}</button>
      {status && <h1>안녕하세요</h1>}
    </>
  );
}
