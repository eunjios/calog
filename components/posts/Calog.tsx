import { PostInfo } from '../../types';
import PostCalendar from '../calendar/PostCalendar';
import Todo from '../todo/Todo';
import Post from './Post';
import classes from './Calog.module.css';
import { RecoilRoot } from 'recoil';

interface Props {
  posts: PostInfo[];
}

const Calog: React.FC<Props> = ({ posts }: Props) => {
  return (
    <RecoilRoot>
      <PostCalendar />
      <div className={classes.container}>
        <Todo />
        <ul className={classes.list}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </RecoilRoot>
  );
};

export default Calog;
