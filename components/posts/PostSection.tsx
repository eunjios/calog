import NewPost from './NewPost';
import PostList from './PostList';
import classes from './PostSection.module.css';

function PostSection() {
  return (
    <div className={classes.container}>
      <NewPost />
      <PostList />
    </div>
  );
}

export default PostSection;
