/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface Props {
  children: React.ReactNode;
}

function GridItem({ children }: Props) {
  return (
    <div
      css={css`
        aspect-ratio: 1/1;
        border-radius: 16px;
        overflow: hidden;
      `}
    >
      {children}
    </div>
  );
}

export default GridItem;
