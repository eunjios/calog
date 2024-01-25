export interface PostInfo {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: UserInfo;
}

export interface UserInfo {
  id: number;
  username: string;
  avatar: string;
}

export interface TodoItemData {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoListStats {
  date: string;
  todoList: TodoItemData[];
  totalCount: number;
  doneCount: number;
  completedTodoList: TodoItemData[];
  uncompletedTodoList: TodoItemData[];
}

export interface JoinFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
