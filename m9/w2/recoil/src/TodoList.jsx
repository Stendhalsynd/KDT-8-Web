import { useRecoilValue } from "recoil";

import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListStats from "./TodoListStats";

import Header from "./Header";

import { ListContainerStyle } from "./style";

import { filteredTodoListState } from "./state";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <Header />
      <TodoItemCreator />

      <ListContainerStyle>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </ListContainerStyle>
      <TodoListStats />
    </>
  );
}
