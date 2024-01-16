import { PostInfo } from '@/types';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';

interface Props {
  posts: PostInfo[];
}

function PostList({ posts }: Props) {
  return (
    <div>
      <NewPost />
      <ul className={classes.list}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostList;
