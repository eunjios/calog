import classes from './MediaObjectCard.module.css';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  children: React.ReactNode;
  type: 'avatar' | 'post';
}

// children: 유저 이름, 발행 날짜 등 text 부분
// 나머지 props는 img 태그의 props를 그대로 사용할 수 있음
const MediaObjectCard: React.FC<Props> = ({ children, type, ...props }) => {
  const imgClass = `${classes.thumbnail} ${classes[type]}`;
  return (
    <div className={classes.container}>
      <img className={imgClass} {...props} />
      <div className={classes.text}>{children}</div>
    </div>
  );
};

export default MediaObjectCard;
