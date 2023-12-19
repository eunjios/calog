import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import classes from './Callout.module.css';

interface Props {
  children: React.ReactNode;
  hasToggle?: boolean;
}

function Callout({ children, hasToggle = false }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const icon = isOpen ? (
    <MdKeyboardArrowUp size={20} fill="#aeaeae" />
  ) : (
    <MdKeyboardArrowDown size={20} fill="#aeaeae" />
  );
  const contentClass = `${classes.content} ${isOpen ? classes.open : ''}`;

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <section className={classes.callout}>
      <div className={contentClass}>{children}</div>
      {hasToggle && (
        <div className={classes.toggle}>
          <button onClick={toggle}>{icon}</button>
        </div>
      )}
    </section>
  );
}

export default Callout;
