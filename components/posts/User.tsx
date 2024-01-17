import { formattedDate } from '../../utils';
import MediaObjectCard from '../ui/MediaObjectCard';
import classes from './User.module.css';

interface Props {
  avatar: string;
  username: string;
  date: string;
}

function User({ avatar, username, date }: Props) {
  const createdDate = formattedDate(date);
  return (
    <MediaObjectCard type="avatar" imgSrc={avatar} imgAlt={username}>
      <h2 className={classes.name}>{username}</h2>
      <p className={classes.date}>{createdDate}</p>
    </MediaObjectCard>
  );
}

export default User;
