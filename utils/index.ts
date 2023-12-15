import { PostInfo } from '@/types';

export const DUMMY_POSTS: PostInfo[] = [
  {
    id: 5,
    title: '커피',
    description: '커피 맛있는데 카페인 때문에 잠을 못 잔다.',
    image: '/images/picture5.jpg',
    createdAt: '20231215',
    author: {
      id: 1,
      username: '은지',
      avatar: '/images/user.png',
    },
  },
  {
    id: 3,
    title: '귤',
    description:
      '겨울에는 귤을 많이 먹으니까 손에서 귤 냄새가 난다. 그런데 이번 겨울에는 아직 귤을 먹지 못했다.',
    image: '/images/picture3.jpg',
    createdAt: '20231215',
    author: {
      id: 1,
      username: '은지',
      avatar: '/images/user.png',
    },
  },
  {
    id: 2,
    title: '맛있는 초콜릿 케이크',
    description:
      '초콜릿 케이크 같이 보이지만 사실은 치즈가 들어있는 초콜릿 케이크다. 초콜릿 케이크 같이 보이지만 사실은 치즈가 들어있는 초콜릿 케이크다. 초콜릿 케이크 같이 보이지만 사실은 치즈가 들어있는 초콜릿 케이크다. 그게 그거 같지만 다르다. ^ ^;',
    image: '/images/picture2.jpg',
    createdAt: '20231215',
    author: {
      id: 1,
      username: '은지',
      avatar: '/images/user.png',
    },
  },
  {
    id: 1,
    title: '메모장',
    description:
      '카페에 메모장이 있었다. 최근에 무인 양품 노트를 샀는데 크기도 맘에 들고 막 쓰기 참 좋다.',
    image: '/images/picture1.jpg',
    createdAt: '20231213',
    author: {
      id: 1,
      username: '은지',
      avatar: '/images/user.png',
    },
  },
];

export const formattedDate = (date: string) => {
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);

  return `${year}년 ${month}월 ${day}일`;
};

export const truncateText = (text: string, maxLength: number) => {
  return `${text.substring(0, maxLength)}...`;
};
