import OutsideClickHandler from 'react-outside-click-handler';
import useEscKey from '@/hooks/useEscKey';
import useToggleVisibility from '@/hooks/useToggleVisibility';
import {
  AbsoluteContainer,
  Button,
  Content,
} from './ToggleVisibleButton.style';

interface Props {
  children: React.ReactNode;
  showContentButtonText?: string;
  hideContentButtonText?: string;
}

const ToggleVisibleButton: React.FC<Props> = ({
  children,
  showContentButtonText = '추가',
  hideContentButtonText = '취소',
}: Props) => {
  const { isVisible, toggle, hide } = useToggleVisibility();

  useEscKey(hide);

  return (
    <OutsideClickHandler onOutsideClick={hide}>
      {isVisible && <Content>{children}</Content>}
      <AbsoluteContainer>
        <Button onClick={toggle}>
          {isVisible ? hideContentButtonText : showContentButtonText}
        </Button>
      </AbsoluteContainer>
    </OutsideClickHandler>
  );
};

export default ToggleVisibleButton;
