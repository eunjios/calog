/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
  fontSize?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
}

function Logo({ fontSize = '24px', ...props }: Props) {
  return (
    <div
      css={css`
        font-size: ${fontSize};
        color: #333;
        font-weight: bold;
        font-family: 'Afacad';
      `}
      style={{ ...props }}
    >
      calog
    </div>
  );
}

export default Logo;
