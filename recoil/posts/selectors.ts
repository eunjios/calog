import { PostInfo } from '@/types';
import { selector } from 'recoil';
import postState from './atom';
import selectedDate from '../date/atom';
import { NewPostInfo } from './types';
import uuid from 'react-uuid';

export const selectedPostList = selector<PostInfo[]>({
  key: 'selectedPostList',
  get: ({ get }) => {
    const list = get(postState);
    const date = get(selectedDate);
    const selectedPost = list.filter((item) => item.date === date);
    return selectedPost || [];
  },
});

export const postRepo = selector({
  key: 'postRepo',
  get: ({ getCallback }) => {
    const add = getCallback(
      ({ snapshot, set }) =>
        async (post: NewPostInfo) => {
          const posts = await snapshot.getPromise(postState);
          const date = await snapshot.getPromise(selectedDate);

          // TODO: author 로그인 정보 사용
          const newPost: PostInfo = {
            id: uuid(),
            date: date,
            author: {
              id: 1,
              username: '은지',
              avatar: '/images/user.png',
            },
            ...post,
          };

          set(postState, [...posts, newPost]);
        }
    );
    return { add };
  },
});
