import { selector } from 'recoil';
import todoState from './atom';
import selectedDate from '../date/atom';
import { TodoItemData, TodoListStats } from '@/types';

export const selectedTodoList = selector<TodoItemData[]>({
  key: 'selectedTodoList',
  get: ({ get }) => {
    const list = get(todoState);
    const date = get(selectedDate);
    const selectedTodo = list.find((item) => item.date === date);
    return selectedTodo?.todoList || [];
  },
});

export const todoRepo = selector({
  key: 'todoRepo',
  get: ({ getCallback }) => {
    // TOGGLE
    const toggle = getCallback(
      ({ snapshot, set }) =>
        async (todoId: number) => {
          const allList = await snapshot.getPromise(todoState);
          const date = await snapshot.getPromise(selectedDate);

          const selected = allList.find((item) => item.date === date);
          const remaining = allList.filter((item) => item.date !== date);

          if (!selected) return;

          const toggledTodoList = selected.todoList.map((todo) =>
            todo.id === todoId ? { ...todo, done: !todo.done } : todo
          );
          const updated = { date, todoList: toggledTodoList };

          set(todoState, [...remaining, updated]);
        }
    );

    // ADD
    const add = getCallback(({ snapshot, set }) => async (text: string) => {
      const allList = await snapshot.getPromise(todoState);
      const date = await snapshot.getPromise(selectedDate);

      const selected = allList.find((item) => item.date === date);
      const remaining = allList.filter((item) => item.date !== date);

      const newTodo: TodoItemData = {
        id: Date.now(), // TODO: uuid
        text: text,
        done: false,
      };

      if (selected) {
        const updated = {
          date,
          todoList: [newTodo, ...selected.todoList],
        };
        set(todoState, [...remaining, updated]);
      } else {
        const updated = {
          date,
          todoList: [newTodo],
        };
        set(todoState, [...allList, updated]);
      }
    });

    return { toggle, add };
  },
});

export const todoStats = selector<TodoListStats>({
  key: 'todoStats',
  get: ({ get }) => {
    const list = get(todoState);
    const date = get(selectedDate);
    const selectedTodo = list.find((item) => item.date === date);

    if (!selectedTodo) {
      return {
        date,
        todoList: [],
        totalCount: 0,
        doneCount: 0,
        completedTodoList: [],
        uncompletedTodoList: [],
      };
    }

    const completedTodoList = selectedTodo?.todoList.filter(
      (todo) => todo.done
    );
    const uncompletedTodoList = selectedTodo?.todoList.filter(
      (todo) => !todo.done
    );

    return {
      date,
      todoList: selectedTodo.todoList,
      completedTodoList,
      uncompletedTodoList,
      totalCount: selectedTodo.todoList.length,
      doneCount: uncompletedTodoList.length,
    };
  },
});
