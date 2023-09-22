import { useState, useEffect } from "react";

const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    // Mount 시점에 실행
    console.log("Functional Component | ⭕️ mount!");

    // Unmount 시점에 실행
    return () => {
      console.log('Functional Component | ❌ unmount!"');
    };
  }, []);

  // Mount & Update 시점에 실행
  useEffect(() => {
    console.log("Functional Component | ✅ update!");
  });

  // text 가 바뀔 때만 실행
  useEffect(() => {
    console.log("Functional Component | ✅ text update!");
  }, [text]);

  return (
    <>
      <p>MyComponent{number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default MyComponent;
