import { useRecoilState } from "recoil";

import { todoListFilterState } from "./state";

import { ReverseContainerStyle } from "./style";

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <ReverseContainerStyle>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">모두보기</option>
        <option value="Show Completed">완료한 일만 보기</option>
        <option value="Show Uncompleted">해야 할 일 보기</option>
      </select>
    </ReverseContainerStyle>
  );
}
