import { useEffect } from 'react';

// callbackFn: esc key 클릭 시 실행할 콜백 함수
const useEscKey = (callbackFn: () => void) => {
  useEffect(() => {
    const escKeyHandler = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        callbackFn();
      }
    };
    document.addEventListener('keydown', escKeyHandler);
    return () => document.removeEventListener('keydown', escKeyHandler);
  });
};

export default useEscKey;
