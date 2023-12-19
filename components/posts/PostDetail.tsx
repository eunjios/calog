import { PostInfo } from '../../types';
import User from './User';
import classes from './PostDetail.module.css';

interface Props {
  post: PostInfo;
}

function PostDetail({ post }: Props) {
  const { title, image, description } = post;
  const { author } = post;

  return (
    <section className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <User
        avatar={author.avatar}
        username={author.username}
        createdAt={post.createdAt}
      />
      <img className={classes.img} src={image} alt={title} />
      <p className={classes.content}>{description}</p>
    </section>
  );
}

export default PostDetail;
