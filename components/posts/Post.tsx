import Link from 'next/link';
import { PostInfo } from '../../types';
import MediaObjectCard from '../ui/MediaObjectCard';
import classes from './Post.module.css';

interface Props {
  post: PostInfo;
}

const Post: React.FC<Props> = (props) => {
  const { id, title, image, description } = props.post;

  return (
    <Link href={`post/${id}`}>
      <li className={classes.item}>
        <MediaObjectCard type="post" src={image} alt={title}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.description}>{description}</p>
        </MediaObjectCard>
      </li>
    </Link>
  );
};

export default Post;
