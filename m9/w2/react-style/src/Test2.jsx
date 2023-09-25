import styled from "styled-components";
import { useState } from "react";

const AddToList = styled.input``;

const AddBtn = styled.button`
  background-color: skyblue;
  border: none;
  padding: 4px 6px;
  border-radius: 3px;
  margin: 10px;
`;

const Item = styled.li`
  border-bottom: 1px solid black;
`;

const List = styled.ul`
  ${Item} {
    list-style: none;
    margin: 0;
  }

  padding: 0;
  height: 200px;
  width: 50vw;
  overflow-y: auto;
  background-color: salmon;
`;

export default function Test2() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoList = () => {
    setTodoList((prevList) => [
      ...prevList,
      { id: new Date().toDateString, text: inputText },
    ]);
    setInputText("");
  };

  return (
    <>
      <AddToList
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <AddBtn onClick={() => addTodoList()}>Add</AddBtn>
      <List>
        {todoList.map((todo) => (
          <Item key={todo.id}>{todo.text}</Item>
        ))}
      </List>
    </>
  );
}
