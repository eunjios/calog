import { atom } from 'recoil';
import { PostInfo } from '@/types';
import { DUMMY_POSTS } from '@/utils/data';

const postState = atom<PostInfo[]>({
  key: 'postState',
  default: DUMMY_POSTS,
  dangerouslyAllowMutability: true, // 배열 아이템 추가 가능
});

export default postState;
