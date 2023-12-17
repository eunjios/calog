import { selector } from 'recoil';
import todoListState from './atom';
import selectedDate from '../date/atom';
import { TodoInfo, TodoListInfo } from '@/types';

export const todoRepository = selector({
  key: 'todoRepository',
  get: ({ getCallback }) => {
    // TOGGLE
    const toggle = getCallback(
      ({ snapshot, set }) =>
        async (todoId: number) => {
          const list = await snapshot.getPromise(todoListState);
          set(
            todoListState,
            list.map((todo) =>
              todo.id === todoId ? { ...todo, done: !todo.done } : todo
            )
          );
        }
    );

    // ADD
    const add = getCallback(({ snapshot, set }) => async (text: string) => {
      const list = await snapshot.getPromise(todoListState);
      const newTodo: TodoInfo = {
        id: Date.now(), // uuid
        text: text,
        done: false,
      };
      set(todoListState, [newTodo, ...list]);
    });

    return { toggle, add };
  },
});

export const filteredTodoList = selector<TodoListInfo>({
  key: 'filteredTodoList',
  get: ({ get }) => {
    const list = get(todoListState);
    const date = get(selectedDate);
    const completedTodoList = list.filter((todo) => todo.done);
    const uncompletedTodoList = list.filter((todo) => !todo.done);

    return {
      date,
      todoList: list,
      completedTodoList,
      uncompletedTodoList,
      totalCount: list.length,
      doneCount: uncompletedTodoList.length,
    };
  },
});
