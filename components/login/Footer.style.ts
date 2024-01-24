import { css } from '@emotion/react';

export const container = css`
  margin-top: 16px;
`;

export const links = css`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

export const link = css`
  font-size: 12px;
  font-weight: 500;
  & a {
    color: var(--text-light);
  }
`;

export const text = css`
  font-size: 12px;
  margin: 2px 2px;
`;

export const base = css`
  font-weight: 400;
  color: var(--text-light);
`;

export const emp = css`
  font-weight: 500;
  color: var(--text-gray);
  border-bottom: 1px solid var(--text-gray);
`;
