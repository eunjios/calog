import Callout from '../ui/Callout';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <Callout>
      {/* 3개만 - 이상은 더보기 버튼 */}
      <TodoList>그릭 요거트 구매하기</TodoList>
      <TodoList done>요가랑 스트레칭 하기</TodoList>
      <TodoList done>방청소 하기</TodoList>
    </Callout>
  );
};

export default Todo;
