/** @jsxImportSource @emotion/react */

import {
  container,
  common,
  blackBtn,
  whiteBtn,
  notAllowed,
} from './Button.style';

interface Props {
  children: React.ReactNode;
  theme?: 'black' | 'white';
  disabled?: boolean;
}

function Button({ children, theme = 'black', disabled = false }: Props) {
  const color = theme === 'black' ? blackBtn : whiteBtn;
  const btn = [common, color, disabled && notAllowed];

  return (
    <div css={container}>
      <button css={btn} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}

export default Button;
