import { useSelector, useDispatch } from "react-redux";
import {
  todoAdded,
  todoToggled,
  allDeleted,
  allCompleted,
  completedCleared,
  maxId,
} from "./todosSlice";

export default function Todo() {
  const dispatch = useDispatch();

  return <>todo</>;
}
