import classes from './Intro.module.css';
import HoverBlurCard from '../ui/HoverBlurCard';

const Intro = () => {
  return (
    <div className={classes.layout}>
      <HoverBlurCard imgSrc="/images/main.jpg" alt="calog 선택" href="/calog">
        <h2 className={classes.logo}>calog</h2>
        <p className={classes.text}>
          is a personal blog service that records with a calendar.
        </p>
      </HoverBlurCard>
    </div>
  );
};

export default Intro;
