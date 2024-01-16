import { PostInfo } from '../../types';
import PostCalendar from '../calendar/PostCalendar';
import Todo from '../todo/Todo';
import PostList from './PostList';
import classes from './Calog.module.css';
import { RecoilRoot } from 'recoil';

interface Props {
  posts: PostInfo[];
}

function Calog({ posts }: Props) {
  return (
    <RecoilRoot>
      <PostCalendar />
      <div className={classes.container}>
        <Todo />
        <PostList posts={posts} />
      </div>
    </RecoilRoot>
  );
}

export default Calog;
