import { useState } from "react";

export default function UseStateTodo() {
  const [todos, setTodos] = useState([]); // 할 일 목록
  const [inputTodo, setInputTodo] = useState(""); // input 에 입력할 값

  const addTodo = () => {
    if (todos.length > 9) alert("할 일이 너무 많아요!");

    if (inputTodo !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputTodo,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setInputTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const removeTodo = () => {
    setTodos(todos.filter((todo) => todo.checked === false));
  };

  return (
    <>
      <input
        type="text"
        placeholder="할 일 입력"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        추가
      </button>

      <br />

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </li>
          );
        })}
      </ul>

      <br />

      <button type="button" onClick={removeTodo}>
        완료된 할 일 삭제
      </button>
    </>
  );
}
