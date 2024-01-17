import { TodoList } from '@/recoil/todo-list/types';
import { PostInfo, TodoItemData } from '../types';

export const DUMMY_POSTS: PostInfo[] = [
  {
    id: '5',
    title: '커피',
    description: '커피 맛있는데 카페인 때문에 잠을 못 잔다.',
    image: '/images/picture5.jpg',
    date: '20231215',
    author: {
      id: 1,
      username: '은지',
      avatar: '/images/user.png',
    },
  },
  {
    id: '3',
    title: '귤',
    description:
      '겨울에는 귤을 많이 먹으니까 손에서 귤 냄새가 난다. 그런데 이번 겨울에는 아직 귤을 먹지 못했다.',
    image: '/images/picture3.jpg',
    date: '20231215',
    author: {
      id: 1,
      username: '은지',
      avatar: '/images/user.png',
    },
  },
  {
    id: '2',
    title: '맛있는 초콜릿 케이크',
    description:
      '초콜릿 케이크 같이 보이지만 사실은 치즈가 들어있는 초콜릿 케이크다. 초콜릿 케이크 같이 보이지만 사실은 치즈가 들어있는 초콜릿 케이크다. 초콜릿 케이크 같이 보이지만 사실은 치즈가 들어있는 초콜릿 케이크다. 그게 그거 같지만 다르다. ^ ^;',
    image: '/images/picture2.jpg',
    date: '20231215',
    author: {
      id: 1,
      username: '은지',
      avatar: '/images/user.png',
    },
  },
  {
    id: '1',
    title: '메모장',
    description:
      '카페에 메모장이 있었다. 최근에 무인 양품 노트를 샀는데 크기도 맘에 들고 막 쓰기 참 좋다.',
    image: '/images/picture1.jpg',
    date: '20231213',
    author: {
      id: 1,
      username: '은지',
      avatar: '/images/user.png',
    },
  },
];

export const DUMMY_TODO_LIST: TodoList[] = [
  {
    date: '20231203',
    todoList: [
      {
        id: 1,
        text: '스트레칭 하기',
        done: true,
      },
      {
        id: 2,
        text: '고구마 굽기',
        done: true,
      },
      {
        id: 3,
        text: '물 1L 이상 마시기',
        done: false,
      },
    ],
  },
  {
    date: '20231215',
    todoList: [
      {
        id: 4,
        text: '책 반납하기',
        done: true,
      },
      {
        id: 5,
        text: 'Next.js 개인 프로젝트 시작하기',
        done: true,
      },
      {
        id: 6,
        text: 'UI 컴포넌트 잘 만들기',
        done: true,
      },
      {
        id: 7,
        text: '운동 열심히 하기',
        done: false,
      },
    ],
  },
  {
    date: '20231216',
    todoList: [
      {
        id: 8,
        text: '오늘은 진짜 꼭 운동하기',
        done: false,
      },
    ],
  },
];

export const DUMMY_SELECTED_TODO_LIST: TodoItemData[] = [
  {
    id: 1,
    text: '스트레칭 하기',
    done: true,
  },
  {
    id: 2,
    text: '고구마 굽기',
    done: true,
  },
  {
    id: 3,
    text: '물 1L 이상 마시기',
    done: false,
  },
  {
    id: 4,
    text: '방 청소하기',
    done: true,
  },
];
