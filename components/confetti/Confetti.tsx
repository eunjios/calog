import { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import {
  TOnInitComponentFn,
  TCanvasConfettiInstance,
  TCanvasConfettiAnimationOptions,
} from 'react-canvas-confetti/dist/types';

function Confetti() {
  const refAnimationInstance = useRef<TCanvasConfettiInstance | null>(null);

  const getInstance: TOnInitComponentFn = useCallback(({ confetti }) => {
    refAnimationInstance.current = confetti;
  }, []);

  const makeShot = useCallback(
    (particleRatio: number, opts: TCanvasConfettiAnimationOptions) => {
      refAnimationInstance.current &&
        refAnimationInstance.current({
          ...opts,
          origin: { y: 0.7 },
          particleCount: Math.floor(200 * particleRatio),
        });
    },
    []
  );

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => fire);

  return (
    <ReactCanvasConfetti
      onInit={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
    />
  );
}

export default Confetti;
