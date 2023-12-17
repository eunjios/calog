export interface PostInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  author: UserInfo;
}

export interface UserInfo {
  id: number;
  username: string;
  avatar: string;
}

export interface TodoInfo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoListInfo {
  date: string;
  todoList: TodoInfo[];
  totalCount: number;
  doneCount: number;
  completedTodoList: TodoInfo[];
  uncompletedTodoList: TodoInfo[];
}
