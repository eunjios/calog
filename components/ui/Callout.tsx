import classes from './Callout.module.css';

interface Props {
  children: React.ReactNode;
}

const Callout: React.FC<Props> = ({ children }) => {
  return (
    <section className={classes.callout}>
      <ul>{children}</ul>
    </section>
  );
};

export default Callout;
