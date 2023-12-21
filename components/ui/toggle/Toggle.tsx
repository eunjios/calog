import OutsideClickHandler from 'react-outside-click-handler';
import {
  AbsoluteContainer,
  Content,
  Button,
  Placeholder,
} from './Toggle.style';
import useToggleVisibility from '@/hooks/useToggleVisibility';
import useEscKey from '@/hooks/useEscKey';

interface Props {
  children: React.ReactNode;
  showContentButtonText?: string;
  hideContentButtonText?: string;
  hasPlaceholder?: boolean;
  placeholderText?: string;
  callbackFn?: () => void; // toggle 버튼 누를 때마다 실행될 콜백 함수
}

function Toggle({
  children,
  showContentButtonText = '추가',
  hideContentButtonText = '취소',
  hasPlaceholder = false,
  placeholderText = '오늘은 할 일이 없어요',
  callbackFn,
}: Props) {
  const { isVisible, toggle, hide } = useToggleVisibility(callbackFn);

  useEscKey(hide);

  let content;
  if (isVisible) {
    content = children;
  } else if (hasPlaceholder) {
    content = <Placeholder>{placeholderText}</Placeholder>;
  }

  return (
    <OutsideClickHandler onOutsideClick={hide}>
      {content && <Content>{content}</Content>}
      <AbsoluteContainer>
        <Button onClick={toggle}>
          {isVisible ? hideContentButtonText : showContentButtonText}
        </Button>
      </AbsoluteContainer>
    </OutsideClickHandler>
  );
}

export default Toggle;
