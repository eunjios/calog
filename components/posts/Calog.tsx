import PostCalendar from '../calendar/PostCalendar';
import Todo from '../todo/Todo';
import PostSection from './PostSection';
import classes from './Calog.module.css';

function Calog() {
  return (
    <>
      <PostCalendar />
      <div className={classes.container}>
        <Todo />
        <PostSection />
      </div>
    </>
  );
}

export default Calog;
