import { formattedDate } from '../../utils';
import MediaObjectCard from '../ui/MediaObjectCard';
import classes from './User.module.css';

interface Props {
  avatar: string;
  username: string;
  createdAt: string;
}

const User: React.FC<Props> = ({ avatar, username, createdAt }) => {
  const date = formattedDate(createdAt);
  return (
    <MediaObjectCard type="avatar" src={avatar} alt={username}>
      <h2 className={classes.name}>{username}</h2>
      <p className={classes.date}>{date}</p>
    </MediaObjectCard>
  );
};

export default User;
