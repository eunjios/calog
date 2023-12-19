import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import classes from './Callout.module.css';

interface Props {
  children: React.ReactNode;
  hasToggle?: boolean;
  toggleColor?: string;
  backgroundColor?: string;
  border?: string;
}

function Callout({
  children,
  hasToggle = false,
  toggleColor = '#aeaeae',
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const icon = isOpen ? (
    <MdKeyboardArrowUp size={20} fill={toggleColor} />
  ) : (
    <MdKeyboardArrowDown size={20} fill={toggleColor} />
  );
  const contentClass = `${classes.content} ${isOpen ? classes.open : ''}`;

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <section style={{ ...props }} className={classes.callout}>
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
