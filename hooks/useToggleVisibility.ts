import { useEffect, useState } from 'react';

const useToggleVisibility = (
  callbackFn?: () => void,
  initialVisibility = false
) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  useEffect(() => {
    if (callbackFn) {
      callbackFn();
    }
  }, [isVisible, callbackFn]);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    toggle,
    show,
    hide,
  };
};

export default useToggleVisibility;
