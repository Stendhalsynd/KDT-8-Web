import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./state";

import TodoListFilters from "./TodoListFilters";

import { StatsStyle } from "./style";

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <StatsStyle>
      <div>
        <span>✅ 전체 할일 : {totalNum}개</span>
        <span> ⭕️ 완료한 일 : {totalCompletedNum}개</span>
        <span> ❌ 해야할 일 : {totalUncompletedNum}개</span>
        <span> % 진행도 : {formattedPercentCompleted} %</span>
      </div>
      <TodoListFilters />
    </StatsStyle>
  );
}
