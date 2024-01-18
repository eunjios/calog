import Image from 'next/image';
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
        date={post.date}
      />
      {/* <Image /> width 100% */}
      <Image
        className={classes.img}
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
      />
      <p className={classes.content}>{description}</p>
    </section>
  );
}

export default PostDetail;
