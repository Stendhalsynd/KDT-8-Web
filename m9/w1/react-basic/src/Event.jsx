function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function Event() {
  const handleClick = () => {
    console.log("test");
  };

  const handleClick2 = (e, str) => {
    console.log("e : ", e);
    console.log(str);
  };

  const handleClick3 = () => {
    console.log("test3");
  };

  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onClick={(e) => handleClick2(e, "클릭함")}>클릭2</button>
      <Button onClick={handleClick3}>클릭3</Button>
    </>
  );
}
