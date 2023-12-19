import classes from './Card.module.css';

interface Props {
  children: React.ReactNode;
}

function Card({ children }: Props) {
  return <div className={classes.card}>{children}</div>;
}

export default Card;
