import Link from 'next/link';
import classes from './HoverBlurCard.module.css';

interface Props {
  imgSrc: string;
  alt?: string;
  href?: string;
  children?: React.ReactNode;
}

const HoverBlurCard: React.FC<Props> = ({ imgSrc, alt, href, children }) => {
  const Card = (
    <div className={classes.container}>
      <div className={classes.card}>
        <img src={imgSrc} alt={alt ?? '카드 이미지'} />
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );

  if (href) {
    return <Link href={href}>{Card}</Link>;
  } else {
    return Card;
  }
};

export default HoverBlurCard;
