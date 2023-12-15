import { PostInfo } from '../../types';
import PostCalendar from '../calendar/PostCalendar';
import Todo from '../todo/Todo';
import Post from './Post';
import classes from './Calog.module.css';

interface Props {
  posts: PostInfo[];
}

const Calog: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <PostCalendar />
      <div className={classes.container}>
        <Todo />
        <ul className={classes.list}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Calog;
