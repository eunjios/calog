/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { FaCircleInfo } from 'react-icons/fa6';

interface Props {
  children: React.ReactNode;
}
function HelperText({ children }: Props) {
  return (
    <p
      css={css`
        display: flex;
        gap: 4px;
        align-items: center;
        text-align: left;
        font-size: 10px;
        margin: 2px 8px;
        color: var(--text-light);
      `}
    >
      <FaCircleInfo color="var(--border2)" />
      {children}
    </p>
  );
}

export default HelperText;
