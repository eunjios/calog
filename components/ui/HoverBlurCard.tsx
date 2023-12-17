import Link from 'next/link';
import classes from './HoverBlurCard.module.css';
import Image from 'next/image';

interface Props {
  imgSrc: string;
  imgAlt?: string;
  href?: string;
  children?: React.ReactNode;
}

const HoverBlurCard: React.FC<Props> = ({
  imgSrc,
  imgAlt,
  href,
  children,
}: Props) => {
  const Card = (
    <div className={classes.container}>
      <div className={classes.card}>
        <Image
          src={imgSrc}
          alt={imgAlt ?? '카드 이미지'}
          width={360}
          height={360}
        />
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
