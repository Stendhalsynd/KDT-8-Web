import { useState } from "react";

export default function FunctionToggle() {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleToggle}>전환</button>
      <p>{status && "보여라"}</p>
    </>
  );
}
