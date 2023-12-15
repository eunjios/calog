import Link from 'next/link';
import classes from './HoverBlurCard.module.css';

interface Props {
  imgSrc: string;
  alt?: string;
  href?: string;
  children?: React.ReactNode;
}

const HoverBlurCard: React.FC<Props> = ({ imgSrc, alt, href, children }) => {
  if (href) {
    return (
      <Link href={href}>
        <div className={classes.container}>
          <div className={classes.card}>
            <img src={imgSrc} alt={alt ?? '카드 이미지'} />
          </div>
          <div className={classes.content}>{children}</div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className={classes.container}>
        <div className={classes.card}>
          <img src={imgSrc} alt={alt ?? '카드 이미지'} />
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    );
  }
};

export default HoverBlurCard;
