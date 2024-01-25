/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
  children: React.ReactNode;
}

function VerticalCenter({ children }: Props) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        height: 100%;
      `}
    >
      {children}
    </div>
  );
}

export default VerticalCenter;
