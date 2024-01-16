/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface Props {
  children: React.ReactNode;
}

function Grid({ children }: Props) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      `}
    >
      {children}
    </div>
  );
}

export default Grid;
