import { useState } from 'react';
import classes from './ToggleVisibleButton.module.css';

interface Props {
  children: React.ReactNode;
  buttonText?: string;
}

const ToggleVisibleButton: React.FC<Props> = ({
  children,
  ...props
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonText = props.buttonText ?? '추가';
  const toggleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  if (!isVisible) {
    return (
      <div className={classes.new}>
        <button className={classes.button} onClick={toggleVisible}>
          {buttonText}
        </button>
      </div>
    );
  } else {
    return (
      <div className={classes.cancel}>
        <div className={classes.content}>{children}</div>
        <button className={classes.button} onClick={toggleVisible}>
          x
        </button>
      </div>
    );
  }
};

export default ToggleVisibleButton;
