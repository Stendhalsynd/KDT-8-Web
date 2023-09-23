import { useRef } from "react";

export default function UseRef2() {
  const idRef = useRef(1);

  const plusIdRef = () => {
    idRef.current += 1;
    console.log("idRef.current : ", idRef.current);
  };

  return (
    <>
      <p>useRef 로컬변수 사용</p>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>plus ref</button>
    </>
  );
}
