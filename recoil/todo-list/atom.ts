import { atom } from 'recoil';
import { TodoList } from './types';
import { DUMMY_TODO_LIST } from '@/utils/data';

const todoState = atom<TodoList[]>({
  key: 'todoState',
  default: DUMMY_TODO_LIST,
  dangerouslyAllowMutability: true, // 배열 아이템 추가 가능
});

export default todoState;
