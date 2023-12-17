import Image from 'next/image';
import classes from './MediaObjectCard.module.css';

interface Props {
  children: React.ReactNode;
  type: 'avatar' | 'post';
  imgSrc: string;
  imgAlt: string;
}

// children: 유저 이름, 발행 날짜 등 text 부분
// 나머지 props는 img 태그의 props를 그대로 사용할 수 있음
const MediaObjectCard: React.FC<Props> = ({
  children,
  type,
  imgSrc,
  imgAlt,
}: Props) => {
  const imgClass = `${classes.thumbnail} ${classes[type]}`;
  const imgSize = type === 'avatar' ? 48 : 128;
  return (
    <div className={classes.container}>
      <Image
        className={imgClass}
        src={imgSrc}
        alt={imgAlt}
        width={imgSize}
        height={imgSize}
      />
      <div className={classes.text}>{children}</div>
    </div>
  );
};

export default MediaObjectCard;
