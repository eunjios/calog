// TEST
import { useState } from 'react';

interface Props {
  children: React.ReactNode;
  initialVisibility?: boolean;
  OpenButton?: React.FC<BtnProps>;
  CloseButton?: React.FC<BtnProps>;
}

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<BtnProps> = ({ children, ...props }: BtnProps) => {
  return <button {...props}>{children}</button>;
};

const Toggle: React.FC<Props> = ({
  children,
  initialVisibility = false,
  OpenButton = Button,
  CloseButton = Button,
}: Props) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };

  if (!isVisible) {
    return (
      <div>
        <div>
          <OpenButton onClick={toggle}>추가</OpenButton>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>{children}</div>
        <div>
          <CloseButton onClick={toggle}>취소</CloseButton>
        </div>
      </div>
    );
  }
};

export default Toggle;
