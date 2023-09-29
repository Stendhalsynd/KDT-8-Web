import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "./state";

import { BtnStyle, ContainerStyle, InputStyle } from "./style";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoLit) => [
      ...oldTodoLit,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <ContainerStyle>
      <InputStyle
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") addItem();
        }}
        placeholder="할일을 입력하세요"
      />
      <BtnStyle onClick={addItem} style={{ margin: "5px" }}>
        Add
      </BtnStyle>
    </ContainerStyle>
  );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}
