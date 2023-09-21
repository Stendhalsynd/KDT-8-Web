import { useState } from "react";

export default function FunctionTodo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [done, setDone] = useState(false);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setList([...list, { todo, isDone: false }]);
    setTodo("");
  };

  const handleCheckbox = (item) => {
    item.isDone = !item.isDone;
    setDone((prev) => !prev);
  };

  const removeDoneTodo = () => {
    setList((prev) => prev.filter((todo) => !todo.isDone));
  };

  if (list.length > 10) {
    alert("할 일이 너무 많아요!");
    setList((prev) => prev.slice(0, 10));
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="할 일 입력..."
          value={todo}
          onChange={handleTodo}
        />
        <button type="button" onClick={addTodo}>
          추가
        </button>
      </form>
      <br />
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.isDone}
              value={done}
              onChange={() => handleCheckbox(item)}
            />
            {item.todo}
          </li>
        ))}
      </ul>
      <button type="button" onClick={removeDoneTodo}>
        완료된 할 일 삭제
      </button>
    </>
  );
}
