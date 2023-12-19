import { useRecoilValue } from 'recoil';
import Callout from '../ui/Callout';
import TodoItem from './TodoItem';
import { todoStats } from '../../recoil/todo-list/selectors';
import NewTodo from './NewTodo';
import selectedDate from '@/recoil/date/atom';
// import classes from './Todo.module.css';
import todoState from '@/recoil/todo-list/atom';

function Todo() {
  const { totalCount, uncompletedTodoList, completedTodoList } =
    useRecoilValue(todoStats);
  const date = useRecoilValue(selectedDate);

  const state = useRecoilValue(todoState);
  console.log(state);

  if (totalCount === 0) {
    return (
      <Callout>
        <NewTodo key={date} />
      </Callout>
    );
  }

  return (
    // 3개 이상은 더보기 버튼
    <Callout hasToggle={totalCount > 3}>
      <NewTodo key={date} />
      {uncompletedTodoList?.map((todo) => (
        <TodoItem key={todo.id} done={todo.done} id={todo.id}>
          {todo.text}
        </TodoItem>
      ))}
      {completedTodoList?.map((todo) => (
        <TodoItem key={todo.id} done={todo.done} id={todo.id}>
          {todo.text}
        </TodoItem>
      ))}
    </Callout>
  );
}

export default Todo;
