/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface Props {
  children: React.ReactNode;
}

function Header({ children }: Props) {
  return (
    <div
      css={css`
        margin-bottom: 32px;
      `}
    >
      {children}
    </div>
  );
}

function HeaderTitle({ children }: Props) {
  return (
    <h2
      css={css`
        text-align: center;
        margin: 16px 0 8px 0;
        color: var(--text-dark);
        font-size: 20px;
        line-height: 30px;
        word-break: keep-all;
      `}
    >
      {children}
    </h2>
  );
}

function HeaderText({ children }: Props) {
  return (
    <p
      css={css`
        color: var(--text-gray);
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
      `}
    >
      {children}
    </p>
  );
}

Header.Title = HeaderTitle;
Header.Text = HeaderText;

export default Header;
