import { atom } from 'recoil';
// import { DUMMY_SELECTED_TODO_LIST } from '@/utils/data';
import { TodoInfo } from '@/types';

const todoListState = atom<TodoInfo[]>({
  key: 'todoListState',
  default: [], // TODO: 서버에서 받아오기
});

export const selectedTodoId = atom<number>({
  key: 'selectedTodoId',
});

export default todoListState;
