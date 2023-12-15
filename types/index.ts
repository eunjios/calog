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
