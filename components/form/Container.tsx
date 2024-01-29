/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div
      css={css`
        padding: 0 16px;
        text-align: center;
        width: 100%;
        max-width: 360px;
        margin: 0 auto;

        @media screen and (max-width: 768px) {
          padding: 0 24px;
        }
      `}
    >
      {children}
    </div>
  );
}

export default Container;
