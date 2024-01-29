import { css } from '@emotion/react';

export const container = css`
  padding-top: 24px;
`;

export const common = css`
  width: 100%;
  line-height: 24px;
  padding: 12px 32px;
  border-radius: 32px;
  font-family: 'Afacad';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

export const blackBtn = css`
  border: 1.6px solid transparent;
  color: var(--text-white);
  background: var(--button-black);

  &:hover {
    background: var(--hover-black);
  }
`;

export const whiteBtn = css`
  border: 1.6px solid var(--border1);
  color: var(--text-base);
  background: transparent;

  &:hover {
    background: var(--hover-white);
  }
`;

export const notAllowed = css`
  cursor: not-allowed;
  background: var(--button-disabled);
`;
